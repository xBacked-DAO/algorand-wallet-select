const checkConnection = () => {
  return (typeof AlgoSigner !== 'undefined');
};

const ConnectToInjected = () => {
  if (typeof window === 'undefined') {
    return {
      provider: AlgoSigner,
      connect: AlgoSigner.connect,
      check: checkConnection,
    };
  }
}

export default ConnectToInjected;
