import * as injected from "./injected";
import * as providers from "./providers";
import * as connectors from "./connectors";

const data = {
  ...injected,
  ...providers,
};

export const getWallets = () => {
  return Object.values(data).map((walletInfo) => ({
    ...walletInfo,
    connector: connectors[walletInfo.id],
  }));
};
