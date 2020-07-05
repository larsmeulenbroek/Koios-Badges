const infuraKey = "37a4c5643fe0470c944325f1e9e12d50";
providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: infuraKey // required
    }
  }
};

async function init() {
  web3modal = new Web3Modal.default({
    network: "rinkeby",
    providerOptions,
    theme: "dark"
  });

  web3modal.toggleModal();
}

document.addEventListener('DOMContentLoaded', init)