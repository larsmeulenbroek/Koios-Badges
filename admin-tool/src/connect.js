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

  web3modal.on('connect', onConnect);
}

async function onConnect(provider) {
  web3 = new Web3(provider);
  if (await web3.eth.getChainId() != 4) {
    alert("Please connect with rinkeby network address");
  } else {
    accounts = await web3.eth.getAccounts();
    contract = new web3.eth.Contract(contractJson.abi, contractJson.networks[4].address);
  }
}

document.addEventListener('DOMContentLoaded', init)