# Algorand Wallet Select

![](./assets/wallet-selector-demo.gif)

A single Web3 / Algorand provider solution for all Wallets.

## Introduction

AlgorandWalletSelect is an easy-to-use library to help developers add support for multiple providers in their apps with a simple customizable configuration.

By default AlgorandWalletSelect Library supports injected providers like (AlgoSigner, MyAlgoWallet, etc) and WalletConnect (OfficialAlgorandWallet, etc). You can also easily configure the library to support more wallets.

## Projects using AlgorandWalletSelect

Open a PR to add your project to the list!

- [xBacked DAO](https://xbacked.io/)

## Usage

1. Install the AlgorandWalletSelect NPM package

```bash
npm install --save @xbacked-dao/algorand-wallet-select
# OR
yarn add @xbacked-dao/algorand-wallet-select
```

2. Add algorand-wallet-select to your Dapp as follows

```javascript
import { WalletSelector } from "algorand-wallet-select";

const returnWallet = async (data) => {
  if (!!data) {
    console.log(data.connector.check());
    console.log(await data.connector.connect());
    console.log(data.connector.provider);
  }
};

const Template = (args) => (
  <div>
    <h1 className="ws-text-lg">Algorand Wallet Selector</h1>
    <p>Built with 💚 by xBacked</p>
    <WalletSelector returnWallet={returnWallet} />
  </div>
);
```

## Optional: Configuring wallets to display

Simply do the following to only display the MyAlgo wallet. Valid `wallets` are `myalgowallet`, `algosigner` and `walletconnect`.
```javascript
const Template = (args) => (
  <div>
    <h1 className="ws-text-lg">Algorand Wallet Selector</h1>
    <p>Built with 💚 by xBacked</p>
    <WalletSelector
      returnWallet={returnWallet}
      wallets=["myalgowallet"]
    />
  </div>
);
```

## Adding a new provider

Do you want to add your provider to Web3Modal? All logic for supported providers lives inside the src/providers directory. To add a new follow the following steps [here]().

## License

MIT
