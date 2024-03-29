"use client";

import BackButton from "@/components/ui/back-button";
import ValidLocationAlert from "@/components/valid-location-alert";
import { useBottomOverStore } from "@/store/bottom-over";

import { Position } from "@/types/position";
import { Geolocation } from "@capacitor/geolocation";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { Location } from "@prisma/client";
import { Circle, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { LocateFixed } from "lucide-react";
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

  const [openBottomOver, openBottomOverWithPayload, closeBottomOver] = useBottomOverStore(useShallow((state) => [state.openBottomOver, state.openBottomOverWithPayload, state.closeBottomOver]));

  const onFixedButtonClick = useCallback(async () => {
    if (!map || !center) {
      return;
    }

    await Haptics.impact({ style: ImpactStyle.Medium });

    map.panTo(currentUserPosition);
  }, [map, center]);

  const onCenterMarkerClick = useCallback(
    (event: google.maps.MapMouseEvent) => {
      map.panTo(event.latLng);
      map.setZoom(16);
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
      map.setZoom(16);

      openBottomOver("location");
    },
    [map]
  );

  const onMapClick = () => {
    if (!map) return;
    closeBottomOver();
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
      }
    });

    return () => {
      unSubscribe();
      closeBottomOver();
      setMap(null);
    };
  }, []);

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
      zoom={16}
      onLoad={setMap}
      onUnmount={() => setMap(null)}
      onClick={onMapClick}
    >
      {map && <ValidLocationAlert />}

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
          <>
            <Circle
              key={`${location.id}-marker`}
              center={{ lat: location.latitude, lng: location.longitude }}
              radius={location.radius}
              options={{
                strokeOpacity: 0,
                fillOpacity: 0.1,
                fillColor: "rgba(46,61, 233, .8)",
              }}
            />

            <Marker
              key={location.id}
              position={{ lat: location.latitude, lng: location.longitude }}
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
          </>
        ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapArea;
