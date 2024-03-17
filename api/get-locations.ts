import { Location } from "@/types/location";

export const getLocations = (userId: number): Promise<Location[]> => {
  return new Promise((resolve) =>
    resolve([
      {
        id: 1,
        position: {
          lat: 37.4,
          lng: 126.7,
        },
        radius: 1400,
        title: "비투텍 본사",
        address: "서울시 금천구 가산디지털1로 145, 408호",
      },
    ])
  );
};
