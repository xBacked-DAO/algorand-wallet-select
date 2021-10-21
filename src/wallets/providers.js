import MyAlgoWalletLogo from "./logos/myalgowallet.png";
import WalletConnectLogo from "./logos/walletconnect.png";

export const MYALGOWALLET = {
  id: "myalgowallet",
  name: "MyAlgoWallet",
  logo: MyAlgoWalletLogo,
  type: "qrcode",
};

export const WALLETCONNECT = {
  id: "walletconnect",
  name: "WalletConnect",
  logo: WalletConnectLogo,
  type: "qrcode",
  package: {
    required: [["infuraId", "rpc"]]
  }
};
