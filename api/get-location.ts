import { Location } from "@/types/location";

export const getLocation = (locationId: number): Promise<Location> =>
  new Promise((resolve) =>
    resolve({
      position: {
        lat: 37.4,
        lng: 126.7,
      },
      id: 2,
      radius: 100,
      title: "비투텍 본사",
      address: "서울시 금천구 가산디지털1로 145, 408호",
    })
  );
