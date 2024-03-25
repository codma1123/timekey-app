"use client";

import BackButton from "@/components/ui/back-button";
import { useBottomOverStore } from "@/store/bottom-over";

import { Position } from "@/types/position";
import { Geolocation } from "@capacitor/geolocation";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { Location } from "@prisma/client";
import { Circle, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { CheckCircle2, LocateFixed } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";

interface GoogleMapAreaProps {
  locationId?: number;
  center?: Position;
  location?: Location;
  locations?: Location[];
}

const MapArea = (props: GoogleMapAreaProps) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAqEOHY4jTtu86DH5XPZ9Lc4TEBA3i-zo8",
    language: "KOREAN",
    region: "ko-KR",
    version: "beta",
    id: "9c0ef9fc8d76e054",
    mapIds: ["9c0ef9fc8d76e054"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isCurrentPositionLoaded, setisCurrentPositionLoaded] = useState(false);
  const [center, setCenter] = useState<google.maps.LatLngLiteral | null>(null);
  const [currentUserPosition, setCurrentUserPosition] = useState<google.maps.LatLngLiteral | null>(null);
  const [circleData, setCircleData] = useState<Location>(null);

  const [openBottomOver, openBottomOverWithPayload, closeBottomOver] = useBottomOverStore(useShallow((state) => [state.openBottomOver, state.openBottomOverWithPayload, state.closeBottomOver]));

  const onFixedButtonClick = useCallback(async () => {
    if (!map || !center) {
      return;
    }

    await Haptics.impact({ style: ImpactStyle.Medium });

    map.panTo(currentUserPosition);
  }, [map, center]);

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  const onCenterMarkerClick = useCallback(
    (event: google.maps.MapMouseEvent) => {
      map.panTo(event.latLng);
      map.setZoom(14);
      openBottomOver("location");
    },
    [map]
  );

  const onLocationMarkerClick = useCallback(
    (location: Location) => {
      map.panTo({
        lat: props.location.latitude,
        lng: props.location.longitude,
      });
      map.setZoom(13);

      setCircleData(location);
      openBottomOver("location");
    },
    [map]
  );

  const onMapClick = () => {
    if (!map) return;
    closeBottomOver();
    setCircleData(null);
  };

  useEffect(() => {
    const initCenter = async () => {
      const { coords } = await Geolocation.getCurrentPosition();
      const { latitude: lat, longitude: lng } = coords;

      setCenter(props.center || { lat, lng });
      setCurrentUserPosition({ lat, lng });
      setisCurrentPositionLoaded(true);
    };

    initCenter();

    if (props.location) {
      openBottomOverWithPayload({
        type: "location",
        payload: {
          ...props.location,
        },
      });
    }

    const unSubscribe = useBottomOverStore.subscribe((state, prevState) => {
      if (state.isOpen === true && prevState.isOpen === false) {
        setCircleData(null);
      }
    });

    return () => {
      unSubscribe();
      closeBottomOver();
      setMap(null);
    };
  }, []);

  const isValidLocation = false;

  return center && isLoaded && isCurrentPositionLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: "100vw",
        height: "100vh",
      }}
      options={{
        disableDefaultUI: true,
      }}
      center={center}
      zoom={14}
      onLoad={setMap}
      onUnmount={onUnmount}
      onClick={onMapClick}
    >
      <div className="absolute top-[7.5%] left-6 bg-primary-dark rounded-xl text-sm z-50 p-2 px-3 text-white">
        {isValidLocation ? (
          <span className="flex gap-x-2 items-center">
            <CheckCircle2 className="w-4 h-4 text-main" />
            현재 퇴근 지역에 위치하고 있습니다.
          </span>
        ) : (
          <span className="flex gap-x-2 items-center ">
            <CheckCircle2 className="w-4 h-4" />
            현재 퇴근 지역에 위치하고 있지 않습니다
          </span>
        )}
      </div>

      <BackButton />

      <button className="absolute bottom-[15%] right-6 p-1 bg-primary-dark rounded-xl z-50">
        <LocateFixed
          className="h-8 w-8 text-white"
          onClick={onFixedButtonClick}
        />
      </button>

      {currentUserPosition && (
        <Marker
          position={currentUserPosition}
          onClick={onCenterMarkerClick}
          icon={{
            url: "/assets/user-pin.svg",
            scaledSize: {
              height: 60,
              width: 30,
              equals: () => true,
            },
          }}
        />
      )}

      {props.locations &&
        props.locations.map((location) => (
          <Marker
            position={{
              lat: location.latitude,
              lng: location.longitude,
            }}
            onClick={() => onLocationMarkerClick(location)}
            icon={{
              url: "/assets/location-pin.svg",
              scaledSize: {
                height: 60,
                width: 30,
                equals: () => true,
              },
            }}
          />
        ))}

      {circleData && (
        <Circle
          onClick={() => setCircleData(null)}
          key={circleData.id}
          center={{ lat: circleData.latitude, lng: circleData.longitude }}
          radius={circleData.radius}
          options={{
            strokeOpacity: 0,
            fillOpacity: 0.2,
            fillColor: "rgba(46,61, 233, .8)",
          }}
        />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapArea;
