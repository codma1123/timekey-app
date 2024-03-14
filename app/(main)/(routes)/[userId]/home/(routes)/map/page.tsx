import { getLocation } from "@/api/get-location";
import { getLocations } from "@/api/get-locations";
import GoogleMapArea from "@/components/google-map";

interface MapParams {
  params: {
    userId: number;
  };

  searchParams: {
    locationId?: number;
  };
}

const Map = async ({ params, searchParams }: MapParams) => {
  const locations = await getLocations(params.userId);

  if (searchParams.locationId) {
    const { position: center } = await getLocation(searchParams.locationId);
    return (
      <GoogleMapArea
        center={center}
        locations={locations}
      />
    );
  } else {
    return <GoogleMapArea locations={locations} />;
  }
};

export default Map;
