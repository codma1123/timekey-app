import { RequestType } from "@prisma/client";
import axios from "axios";

interface ReportPutRequestParams {
  userId: UUID;
  reportId: UUID;
  requestType: RequestType;
  description: string;
}

export const reportPutRequest = async (params: ReportPutRequestParams) => {
  return await axios.put("/api/work/confirm-request", params);
};
