const checkConnection = () => {
  return (typeof AlgoSigner !== 'undefined');
};

const ConnectToAlgoSigner = () => {
  if (typeof window === 'undefined') {
    return {
      provider: AlgoSigner,
      connect: AlgoSigner.connect,
      check: checkConnection,
    };
  }
}

export default ConnectToAlgoSigner;
