import MyAlgoWalletLogo from "./logos/myalgowallet.png";
import AlgoWalletLogo from "./logos/algo.png";

export const MYALGOWALLET = {
  id: "myalgowallet",
  name: "MyAlgoWallet",
  logo: MyAlgoWalletLogo,
  type: "qrcode",
};

export const WALLETCONNECT = {
  id: "walletconnect",
  name: "Algorand Official Wallet",
  logo: AlgoWalletLogo,
  type: "qrcode",
  package: {
    required: [["infuraId", "rpc"]]
  }
};