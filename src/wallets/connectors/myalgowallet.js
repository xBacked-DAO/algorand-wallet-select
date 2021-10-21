import MyAlgo from '@randlabs/myalgo-connect';

const ConnectToMyAlgo = () => {
  const myAlgoWallet = new MyAlgo();

  return {
    provider: myAlgoWallet,
    connect: async () => await myAlgoWallet.connect(),
    check: () => (false),
  };
}

export default ConnectToMyAlgo;