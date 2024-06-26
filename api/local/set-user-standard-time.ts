import { StandardTime } from "@/api/db/auth/set-user-standard-time";
import axios from "axios";

interface SetUserStandardTimeParams {
  userId: UUID;
  start: StandardTime;
  end: StandardTime;
}

export const setUserStandardTime = async (params: SetUserStandardTimeParams) => {
  return await axios.put("/api/user/set-user-standard-time", params);
};
