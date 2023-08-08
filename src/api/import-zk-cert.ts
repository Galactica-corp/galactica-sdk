import { GalacticaErrorBase } from "./error";
import { invokeSnap } from "../utils/invoke-snap";
import { Prettify } from "../types";

type ErrorName = "SomethingWentWrongWithImport" | "SomethingWentWrong2";

export class ImportZkCertError extends GalacticaErrorBase<ErrorName> {}

export type ImportZkCertParams<
  T extends Record<string, unknown> = Record<string, unknown>
> = {
  zkCert: T;
};

export const importZkCert = async <
  T extends Record<string, unknown> = Record<string, unknown>
>(
  params: Prettify<ImportZkCertParams<T>>
) => {
  const response = await invokeSnap({
    method: "importZkCert",
    params: { ...params, listZkCerts: true },
  });
  return response as { gip69: T[] };
};
