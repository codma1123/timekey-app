import { Location } from "@/types/location";

export const getLocation = (locationId: number): Promise<Location> =>
  new Promise((resolve) =>
    resolve({
      position: {
        lat: 38,
        lng: 127,
      },
      id: 2,
      radius: 100,
    })
  );
