import { useState } from "react";
import { injected, providers, connectors } from "../wallets";

const walletsData = {
  ...providers,
  ...injected,
};

const allWallets = Object.values(walletsData).map((walletInfo) => ({
  ...walletInfo,
  connector: connectors[walletInfo.id](),
}));

export function useProvideWallet() {
  const [wallet, _setWallet] = useState(null);
  const [validWallets, _setValidWallets] = useState([]);

  const setWallet = (walletInfo) => {
    _setWallet(walletInfo);
  };

  const setValidWallets = (validWallets) => {
    _setValidWallets(validWallets);
  };

  const getWallets = () => {
    const filteredWallets = allWallets.filter(wallet => (
      validWallets.includes(wallet.id)
    ));
    if (filteredWallets.length === 0) return allWallets;
    return filteredWallets;
  };

  return {
    wallet,
    setWallet,
    getWallets,
    setValidWallets,
  };
}
