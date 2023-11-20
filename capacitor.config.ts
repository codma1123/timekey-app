import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "my-app",
  webDir: "out",
  server: {
    androidScheme: "https",
    url: "http://192.168.1.35:3000/",
    cleartext: true,
  },
};

export default config;
