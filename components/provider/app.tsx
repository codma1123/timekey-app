"use client";

import React, { useEffect } from "react";
import { App } from "@capacitor/app";

const AppProvider = () => {
  useEffect(() => {
    App.addListener("appStateChange", (data) => {
      if (data.isActive) {
        // refresh requests .....
        console.log("refresh !");
      }
    });

    return () => {
      App.removeAllListeners();
    };
  }, []);

  return <></>;
};

export default AppProvider;
