import { getLocation } from "@/api/get-location";
import { getLocations } from "@/api/get-locations";
import MapArea from "@/app/(main)/(routes)/[userId]/home/(routes)/map/(components)/map-area";

interface MapParams {
  params: {
    userId: number;
  };

  searchParams: {
    locationId?: number;
  };
}

const MapPage = async ({ params, searchParams }: MapParams) => {
  const locations = await getLocations(params.userId);

  if (searchParams.locationId) {
    const { position: center } = await getLocation(searchParams.locationId);
    const location = await getLocation(searchParams.locationId);

    return (
      <MapArea
        location={location}
        center={center}
        locations={locations}
      />
    );
  }

  return <MapArea locations={locations} />;
};

export default MapPage;
