import { getLocation } from "@/api/db/locations/get-location";
import { getLocations } from "@/api/db/locations/get-locations";
import MapArea from "@/app/(main)/(routes)/[userId]/home/(routes)/map/(components)/map-area";

interface MapParams {
  params: {
    userId: number;
  };

  searchParams: {
    locationId?: string;
  };
}

const MapPage = async ({ params, searchParams }: MapParams) => {
  const locations = await getLocations({ userId: params.userId });

  if (searchParams.locationId) {
    const location = await getLocation({ locationId: searchParams.locationId });

    return (
      <MapArea
        location={location}
        center={{ lat: location.latitude, lng: location.longitude }}
        locations={locations}
      />
    );
  }

  return <MapArea locations={locations} />;
};

export default MapPage;
