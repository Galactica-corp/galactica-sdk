import { invokeSnap } from "../utils/invoke-snap";

type Response = "zkCert storage cleared";

export const clearStorage = async () => {
  const response: Response = await invokeSnap({ method: "clearStorage" });
  return response;
};
