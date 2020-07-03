var contract;

async function setHeaderInfo() {
    var accounts = await window.web3.eth.getAccounts();
    const headerInfo = document.getElementById('headerInfo');
    headerInfo.innerHTML = `(${await window.web3.eth.net.getNetworkType()}): ${accounts[0]}`
    await web3.eth.net.getId().then((id) => {
        contract = new web3.eth.Contract(contractJson.abi, contractJson.networks[id].address);
        console.log(contract);
    });
}

async function init() {
    setHeaderInfo()
    ethereum.on("accountsChanged", setHeaderInfo);
    ethereum.on("networkChanged", setHeaderInfo);
    ethereum.on("chainChanged", setHeaderInfo);
    ethereum.on("chainIdChanged", setHeaderInfo);
    ethereum.autoRefreshOnNetworkChange = false;
}

window.onload = async function () {
    const ethEnabled = () => {
        if (window.ethereum) {
            window.web3 = new Web3(Web3.givenProvider);
            window.ethereum.enable();
            return true;
        }
        return false;
    }
    if (!ethEnabled()) {
        alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
    } else {
        init();
    }
};
