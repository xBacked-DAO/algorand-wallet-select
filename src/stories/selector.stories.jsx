import React from 'react';

import { WalletSelector } from '../';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Algorand Wallet Selector',
  component: WalletSelector,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    returnWallet: (data) => {
      alert(JSON.stringify(data))
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div>
    <h1 className="text-lg">Algorand Wallet Selector</h1>
    <a href="https://xbacked.io" className="hover:underline">Built with 💚 by xBacked</a>
    <WalletSelector {...args}>
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-100 hover:bg-opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Connect your wallet
      </button>
    </WalletSelector>
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  returnWallet: async (data) => {
    if (!!data) {
      console.log(data.connector.check());
      console.log(await data.connector.connect());
      console.log(data.connector.provider);
    }
  },
};

export const ConfigureWallets = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ConfigureWallets.args = {
  returnWallet: async (data) => {
    if (!!data) {
      console.log(data.connector.check());
      console.log(await data.connector.connect());
      console.log(data.connector.provider);
    }
  },
  wallets: ['myalgowallet', 'walletconnect']
};
