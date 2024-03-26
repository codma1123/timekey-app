"use client";

import { Geolocation } from "@capacitor/geolocation";
import { Location } from "@prisma/client";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const CheckValidLocation = () => {
  const [location, setLocation] = useState<Location[]>(null);

  const onClick = () => {};

  useEffect(() => {
    const checkValidLocation = async () => {
      try {
        const { coords } = await Geolocation.getCurrentPosition();

        const response = await axios.get<Location[]>("/api/location/check-valid-location", {
          params: {
            latitude: coords.latitude,
            longitude: coords.longitude,
          },
        });

        setLocation(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    checkValidLocation();
  }, []);

  return (
    <div
      className="text-3xl absolute top-8 left-2 z-100 text-red-400"
      onClick={onClick}
    >
      {location && location.length > 0 ? <div>있다!</div> : <div>없다!</div>}
    </div>
  );
};

export default React.memo(CheckValidLocation);
