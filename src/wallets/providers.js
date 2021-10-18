import WalletConnectLogo from "./logos/walletconnect-circle.svg";

export const WALLETCONNECT = {
  id: "walletconnect",
  name: "WalletConnect",
  logo: WalletConnectLogo,
  type: "qrcode",
  package: {
    required: [["infuraId", "rpc"]]
  }
};
