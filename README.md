# Algorand Wallet Selector

A single Web3 / Algorand provider solution for all Wallets.

## Introduction

AlgorandWalletSelector is an easy-to-use library to help developers add support for multiple providers in their apps with a simple customizable configuration.

By default AlgorandWalletSelector Library supports injected providers like (AlgoSigner, MyAlgoWallet, etc) and WalletConnect (Official AlgorandWallet, etc). You can also easily configure the library to support more wallets.

## Preview

You can test the library on: [https://xbacked.io/](https://xbacked.io/)

## Projects using AlgorandWalletSelector

Open a PR to add your project to the list!

- [xBacked DAO](https://xbacked.io/)

## Inspiration

[Web3Modal/Ethereum](https://github.com/Web3Modal/web3modal)

## Usage

1. Install AlgorandWalletSelector NPM package

```bash
npm install --save algorand-wallet-selector
# OR
yarn add aweb3wallet
```

2. Add algorand-wallet-selector to your Dapp as follows

```javascript
import AlgorandWalletSelector from "algorand-wallet-selector";

const provider = new AlgorandWalletSelector({
  network: "mainnet",
});

const wallet = await provider.connectTo("walletconnect");
```

## Adding a new provider

Do you want to add your provider to Web3Modal? All logic for supported providers lives inside the src/providers directory. To add a new follow the following steps [here]().

## License

MIT
