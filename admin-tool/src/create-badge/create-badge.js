/* Maybe use this in connect.js
async function setHeaderInfo() {
    var accounts = await web3.eth.getAccounts();
    const headerInfo = document.getElementById('headerInfo');
    headerInfo.innerHTML = `(${await web3.eth.net.getNetworkType()}): ${accounts[0]}`
}
async function init() {
    setHeaderInfo()
    ethereum.on("accountsChanged", setHeaderInfo);
    ethereum.on("networkChanged", setHeaderInfo);
    ethereum.on("chainChanged", setHeaderInfo);
    ethereum.on("chainIdChanged", setHeaderInfo);
    ethereum.autoRefreshOnNetworkChange = false;
}
window.onload = init(); */

/*
    Na connecten met een wallet heb je hier toegang tot:
        contract    -> Het contract object gemaakt met web3
        web3        -> Web3 instance
        accounts    -> array of accounts
*/