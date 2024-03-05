import { CapacitorConfig } from "@capacitor/cli";
import { KeyboardResize } from "@capacitor/keyboard";

const config: CapacitorConfig = {
  appId: "com.timekey.app",
  appName: "timekey",
  webDir: "out",
  server: {
    url: "http://192.168.1.35:3000/",
    cleartext: true,
  },

  plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
      launchAutoHide: true,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    Keyboard: {
      resize: KeyboardResize.Body,
    },
  },
};

export default config;
