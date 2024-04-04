import axios from "axios";

interface WorkStartParams {
  userId: UUID;
  reportId: UUID;
  locationId: UUID;
}

export const workStart = async (params: WorkStartParams) => {
  return await axios.put("/api/work/start", params);
};
