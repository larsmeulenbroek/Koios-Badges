const infuraKey = "37a4c5643fe0470c944325f1e9e12d50";
var accounts, contract, web3;

function createBadgeElement(badgeJson) {
    var list = document.getElementById("badgeList");

    var badge = document.createElement("div");
    badge.classList.add("badge-item")
    badge.innerHTML = `
<h1 class="badge-header"> ${badgeJson.name}</h1>
<div class="badge-image" style="background-image: url('https://larsmeulenbroek.github.io/Koios-Badges/admin-tool/assets/images/badge-gold.png')"></div>
<p class="badge-description">${badgeJson.description}</p>
`

    list.appendChild(badge)
}

function getBadgeContent(url) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.responseText));
            createBadgeElement(JSON.parse(xhr.responseText))
        }
    };

    xhr.open('GET', url);

    xhr.send();

}

async function getBadges() {
    console.log(contract);
    var totalBadges = await contract.methods.nonce().call()
    console.log(totalBadges);

    // TODO remove next line
    totalBadges = 3;

    for (var i = 1; i <= totalBadges; i++) {
        var uri = await contract.methods.uri(i).call();
        console.log(uri);
        getBadgeContent(uri);
    }
}

async function setHeaderInfo() {
    const headerInfo = document.getElementById('headerInfo');
    headerInfo.innerHTML = `(${await web3.eth.net.getNetworkType()}): ${accounts[0]}`
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


