"use client";

import { useEffect, useRef, useState } from "react";
import { GoogleMap } from "@capacitor/google-maps";

import { useRouter } from "next/navigation";
import { Geolocation } from "@capacitor/geolocation";
import BackButton from "@/components/ui/back-button";
import { Position } from "@/types/position";
import { Location } from "@/types/location";
import { LocateFixed } from "lucide-react";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { useBottomOverStore } from "@/store/bottom-over";

interface GoogleMapAreaProps {
  locationId?: number;
  center?: Position;
  locations?: Location[];
}

interface LocationMarker {
  markerId: string;
  isFocused: boolean;
  position: Position;
  radius: number;
}

const GoogleMapArea = ({ locationId, locations, center }: GoogleMapAreaProps) => {
  const mapRef = useRef<HTMLElement | null>(null);
  const router = useRouter();
  const openBottomOver = useBottomOverStore((state) => state.openBottomOver);
  const closeBottomOver = useBottomOverStore((state) => state.closeBottomOver);

  const [userPosition, setUserPosition] = useState<Position | null>(null);
  const [map, setMap] = useState<GoogleMap>(null);
  const [markers, setMarkers] = useState<LocationMarker[]>([]);
  const [activeCircleId, setActiveCircleId] = useState<string>(null);

  let mapTemp: GoogleMap;

  const onFixedButtonClick = async () => {
    if (!mapRef.current || !userPosition || !map) {
      return;
    }

    await Haptics.impact({ style: ImpactStyle.Medium });

    await map.setCamera({
      coordinate: userPosition,
      zoom: 14,
      animate: true,
      animationDuration: 4000,
    });
  };

  const onLocationMarkerClick = async (markerId: string) => {
    setActiveCircleId(markerId);
    openBottomOver("location");
  };

  const onMapClick = async () => {
    closeBottomOver();

    if (!activeCircleId) return;

    await map.removeCircles([activeCircleId]);
  };

  useEffect(() => {
    const getUserPosition = async (): Promise<Position> => {
      const location = await Geolocation.getCurrentPosition();
      return {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      };
    };

    const initUserMarker = async (map: GoogleMap, position: Position): Promise<string> => {
      if (!map) return;

      const markerId = await map.addMarker({
        coordinate: position,
        iconUrl: "icons/map-pin.png",
      });

      return markerId;
    };

    const initLocationMarkers = async (map: GoogleMap, locations: Location[]): Promise<string[]> => {
      if (!map) return;

      const markerArray = locations.map((location) => ({
        coordinate: location.position,
        title: `${location.id}`,
      }));

      const markerIds = await map.addMarkers(markerArray);

      setMarkers(() =>
        locations.map((location, i) => ({
          isFocused: false,
          markerId: markerArray[i].title,
          position: location.position,
          radius: location.radius,
        }))
      );

      return markerIds;
    };

    const initMap = async () => {
      if (!mapRef.current) return;

      const userPosition = await getUserPosition();

      mapTemp?.destroy();

      const _map = await GoogleMap.create({
        id: "timekey-map",
        element: mapRef.current,
        apiKey: "AIzaSyAqEOHY4jTtu86DH5XPZ9Lc4TEBA3i-zo8",
        config: {
          center: center || userPosition,
          zoom: 14,
        },
      });

      setUserPosition(userPosition);

      if (map) return;
      await initUserMarker(_map, userPosition);
      await initLocationMarkers(_map, locations);

      setMap(_map);
      mapTemp = _map;
    };

    initMap().catch(() => router.back());

    return () => {
      map?.destroy();
      mapTemp?.destroy();
    };
  }, []);

  useEffect(() => {
    const addMarkerListener = async () => {
      if (!markers || !map) return;

      await map.setOnMarkerClickListener((target) => onLocationMarkerClick(target.title));
      await map.setOnMapClickListener(onMapClick);
    };

    addMarkerListener();
  }, [map, markers]);

  return (
    <div>
      <capacitor-google-map
        ref={mapRef}
        className="w-96 h-96"
        style={{
          display: "inline-block",
          backgroundColor: "#fff",
          zIndex: 100,
          width: "100vw",
          height: "100vh",
        }}
      ></capacitor-google-map>

      <button className="absolute bottom-[15%] right-6 p-1 bg-primary-dark rounded-full z-50">
        <LocateFixed
          className="h-8 w-8 text-white"
          onClick={onFixedButtonClick}
        />
      </button>
    </div>
  );
};

export default GoogleMapArea;
