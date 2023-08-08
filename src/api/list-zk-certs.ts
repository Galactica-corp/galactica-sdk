import { invokeSnap } from "../utils/invoke-snap";

export type ListZkCertsError = unknown;

export const listZkCerts = async () => {
  const response = await invokeSnap({ method: "listZkCerts" });
  return response as { gip69: Record<string, unknown>[] };
};
