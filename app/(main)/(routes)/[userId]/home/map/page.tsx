import { getLocation } from "@/api/get-location";
import GoogleMapArea from "@/components/google-map";

const Map = async ({ searchParams }: { searchParams: { locationId?: number } }) => {
  if (searchParams.locationId) {
    const { position: center } = await getLocation(searchParams.locationId);
    return <GoogleMapArea center={center} />;
  }

  return <GoogleMapArea />;
};

export default Map;
