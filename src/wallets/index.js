import * as injected from "./injected";
import * as providers from "./providers";
import * as connectors from "./connectors";

const data = {
  ...injected,
  ...providers,
};

const wallets = Object.keys(data).map(key => (data[key]));

export { connectors, wallets };