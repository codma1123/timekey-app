import { Location } from "@/types/location";

export const getLocations = (userId: number): Promise<Location[]> => {
  return new Promise((resolve) =>
    resolve([
      {
        id: 1,
        position: {
          lat: 37,
          lng: 127,
        },
        radius: 20,
      },
    ])
  );
};
