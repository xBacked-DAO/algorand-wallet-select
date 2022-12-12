import { useState } from "react";
import { injected, providers } from "../wallets";

const walletsData = {
  ...providers,
  ...injected,
};

const allWallets = Object.values(walletsData).map((walletInfo) => ({
  ...walletInfo
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
    const allWalletsMap = {};
    allWallets.map(wallet => allWalletsMap[wallet.id] = wallet);
    console.log(allWalletsMap);
    const filteredWallets = validWallets.map(walletId => (
      allWalletsMap[walletId]
    ));
    if (filteredWallets.length === 0) return allWallets;
    console.log(filteredWallets);
    return filteredWallets;
  };

  return {
    wallet,
    setWallet,
    getWallets,
    setValidWallets,
  };
}
