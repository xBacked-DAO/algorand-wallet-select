import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const checkConnection = (connector) => {
  return (connector.connected);
};

const ConnectToWalletConnect = (opts) => {
  const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required 
    qrcodeModal: QRCodeModal,
  });

  return {
    provider: connector,
    connect: async () => await connector.createSession(),
    check: () => checkConnection(connector),
  }
};

export default ConnectToWalletConnect;