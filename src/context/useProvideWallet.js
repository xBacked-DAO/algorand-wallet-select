import { useState } from "react";

export function useProvideWallet() {
  const [wallet, _setWallet] = useState(null);

  const setWallet = (walletInfo) => {
    _setWallet(walletInfo)
  };

  return {
    wallet,
    setWallet,
  };
}
