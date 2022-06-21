import MyAlgoWalletLogo from "./logos/myalgowallet.png";
import PeraLogo from "./logos/pera.png";
import FireBlocksLogo from "./logos/fireblocks-logo.svg";

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

export const FIRE_BLOCKS = {
  id: "fireblocks",
  name: "Fireblocks",
  logo: FireBlocksLogo,
  type: "qrcode",
  package: {
    required: [["infuraId", "rpc"]]
  }
};