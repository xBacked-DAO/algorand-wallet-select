import MyAlgoWalletLogo from "./logos/myalgowallet.png";
import PeraLogo from "./logos/pera.png";

export const MYALGOWALLET = {
  id: "myalgowallet",
  name: "MyAlgoWallet",
  logo: MyAlgoWalletLogo,
  type: "qrcode",
};

export const WALLETCONNECT = {
  id: "walletconnect",
  name: "Pera Wallet",
  logo: PeraLogo,
  type: "qrcode",
  package: {
    required: [["infuraId", "rpc"]]
  }
};