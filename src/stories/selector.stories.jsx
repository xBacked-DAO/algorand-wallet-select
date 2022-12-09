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
    <h1 className="ws-text-lg">Algorand Wallet Selector</h1>
    <a href="https://xbacked.io" className="ws-hover:underline">Built with 💚 by xBacked</a>
    <WalletSelector {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  returnWallet: async (data) => {
    if (!!data) {
      alert(`Connectin with ${data.id}`);
    }
  },
};

export const ConfigureWallets = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ConfigureWallets.args = {
  returnWallet: async (data) => {
    if (!!data) {
      alert(`Connectin with ${data.id}`);
    }
  },
  wallets: ['myalgowallet', 'walletconnect', 'pera', 'exodus', 'defly', 'fireblocks']
};
