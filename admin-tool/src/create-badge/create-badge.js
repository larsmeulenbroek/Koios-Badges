const infuraKey = "37a4c5643fe0470c944325f1e9e12d50";
var accounts, contract, web3, isAdmin;

async function getBadgeBalance(badgeId) {
    return await contract.methods.balanceOf(accounts[0], badgeId).call();
}

function createBadgeElement(badgeJson, badgeId) {
    getBadgeBalance(badgeId).then((balance) => {
        var list = document.getElementById("badgeList");

        var badge = document.createElement("div");
        badge.id = badgeId.toString();
        badge.classList.add("badge-item")
        badge.innerHTML = `
<h1 class="badge-header"> ${badgeJson.name}</h1>
<div class="badge-image" style="background-image: url(${badgeJson.image})"></div>
<p class="badge-balance">(${balance})</p>
<p class="badge-description">${badgeJson.description}</p>
`
        list.appendChild(badge)
    });

}

function getBadgeContent(url, badgeId) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            createBadgeElement(JSON.parse(xhr.responseText), badgeId)
        }
    };

    xhr.open('GET', url);

    xhr.send();

}

async function getBadges() {
    console.log(contract);
    var totalBadges = await contract.methods.nonce().call()

    // TODO remove next line
    totalBadges = 7;

    for (var i = 1; i <= totalBadges; i++) {
        var uri = await contract.methods.uri(i).call();
        getBadgeContent(uri, i);
    }
}

async function setHeaderInfo() {
    await contract.methods.creators(accounts[0]).call().then((bool) => {
        isAdmin = bool;
    });

    const headerInfo = document.getElementById('headerInfo');
    headerInfo.innerHTML = `(${await web3.eth.net.getNetworkType()}): ${accounts[0]}`;
}

async function createBadge() {
    console.log("test");
    await contract.methods.create(10).send({from: accounts[0]})
}

function log(str) {
    document.getElementById("log").innerHTML += '<p>' + str + '</p>';
}

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
        contract = await new web3.eth.Contract(contractJson.abi, contractJson.networks[4].address);
        setHeaderInfo();
        getBadges();
    }
}

document.addEventListener('DOMContentLoaded', init)


