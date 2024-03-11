"use client";

import { useEffect, useRef } from "react";
import { GoogleMap } from "@capacitor/google-maps";
import { Undo2 } from "lucide-react";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Geolocation } from "@capacitor/geolocation";

const GoogleMapArea = () => {
  const mapRef = useRef<HTMLElement>();

  const router = useRouter();

  let newMap: GoogleMap;

  const createMap = async () => {
    if (!mapRef.current) return;

    if (newMap) return;

    console.log(Geolocation.getCurrentPosition());

    newMap = await GoogleMap.create({
      id: "timekey-map",
      element: mapRef.current,
      apiKey: "AIzaSyAqEOHY4jTtu86DH5XPZ9Lc4TEBA3i-zo8",
      config: {
        center: {
          lat: 38,
          lng: 127,
        },
        zoom: 8,
      },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      createMap();
    }, 10);

    return () => {
      newMap?.destroy();
    };
  }, []);

  return (
    <div>
      <motion.button
        className="absolute top-[7.5%] right-6 group bg-primary-dark p-2 rounded-full z-50"
        onClick={async () => {
          await Haptics.impact({ style: ImpactStyle.Medium });
          router.back();
        }}
      >
        <Undo2 className="w-8 h-8 text-secondary group-active:text-main group-active:scale-110 transition" />
      </motion.button>

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
    </div>
  );
};

export default GoogleMapArea;
