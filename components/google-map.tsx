"use client";

import { useEffect, useRef, useState } from "react";
import { GoogleMap } from "@capacitor/google-maps";

import { useRouter } from "next/navigation";
import { Geolocation } from "@capacitor/geolocation";
import BackButton from "@/components/ui/back-button";
import { Position } from "@/types/position";
import { Location } from "@/types/location";
import { LocateFixed } from "lucide-react";

interface GoogleMapAreaProps {
  locationId?: number;
  center?: Position;
  locations?: Location[];
}

const GoogleMapArea = ({ locationId, locations, center }: GoogleMapAreaProps) => {
  const mapRef = useRef<HTMLElement>();
  const router = useRouter();
  const [userPosition, setUserPosition] = useState<Position | null>(null);
  const [map, setMap] = useState<GoogleMap>(null);
  let mapTemp: GoogleMap;

  const onFixedButtonClick = async () => {
    if (!mapRef.current || !userPosition || !map) {
      return;
    }

    await map.setCamera({
      coordinate: userPosition,
      zoom: 14,
      animate: true,
    });
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

      const markerId = await map.addMarker({ coordinate: position });

      return markerId;
    };

    const initLocationMarkers = async () => {
      if (!map) return;

      await map.addMarkers(
        locations.map((location) => ({
          coordinate: location.position,
          title: `${location.id}`,
        }))
      );
    };

    const initMap = async () => {
      if (!mapRef.current) return;

      const userPosition = await getUserPosition();

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
      setMap(_map);
      mapTemp = _map;

      await initUserMarker(_map, userPosition);

      if (locations) {
        await initLocationMarkers();
      }
    };

    initMap().catch((e) => {
      router.back();
    });

    return () => {
      map?.destroy();
      mapTemp?.destroy();
    };
  }, []);

  return (
    <div>
      <BackButton />

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

      <button className="absolute bottom-[15%] right-6 p-2 bg-primary-dark rounded-full z-50">
        <LocateFixed
          className="h-8 w-8 text-white"
          onClick={onFixedButtonClick}
        />
      </button>
    </div>
  );
};

export default GoogleMapArea;
