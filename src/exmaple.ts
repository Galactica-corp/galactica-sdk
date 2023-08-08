import { ImportZkCertError, importZkCert } from "./api/import-zk-cert";

const clientExample = async () => {
  try {
    const response = await importZkCert({ zkCert: { example: 5 } });
    console.log(response.gip69);
  } catch (error) {
    if (error instanceof ImportZkCertError) {
      if (error.name === "SomethingWentWrongWithImport") {
        console.log("toast.error(...)");
      }

      if (error.name === "SomethingWentWrong2") {
        console.log("toast.error(...2)");
      }
    }

    console.log("unknown error");
  }
};
