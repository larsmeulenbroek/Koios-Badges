const contractJson = {
    "contractName": "KoiosBadges",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "_approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_operator",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "_ids",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "_values",
            "type": "uint256[]"
          }
        ],
        "name": "TransferBatch",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_operator",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "TransferSingle",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "string",
            "name": "_value",
            "type": "string"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "URI",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "changeOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "creators",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "nonce",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tokenCreator",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "_interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "addCreator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "removeCreator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_initialSupply",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_uri",
            "type": "string"
          }
        ],
        "name": "create",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_uri",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "updateUri",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "uri",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "_ids",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "_values",
            "type": "uint256[]"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeBatchTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "_owners",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "_ids",
            "type": "uint256[]"
          }
        ],
        "name": "balanceOfBatch",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.9+commit.3e3065ac\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"_ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"_values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"_value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"addCreator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_owners\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_initialSupply\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_uri\",\"type\":\"string\"}],\"name\":\"create\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"creators\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"nonce\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"removeCreator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"_ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_values\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"_interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tokenCreator\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_uri\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"updateUri\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"balanceOf(address,uint256)\":{\"params\":{\"_id\":\"ID of the Token\",\"_owner\":\"The address of the token holder\"},\"returns\":{\"_0\":\"The _owner's balance of the Token type requested\"}},\"balanceOfBatch(address[],uint256[])\":{\"params\":{\"_ids\":\"ID of the Tokens\",\"_owners\":\"The addresses of the token holders\"},\"returns\":{\"_0\":\"The _owner's balance of the Token types requested (i.e. balance for each (owner, id) pair)\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"_operator\":\"Address of authorized operator\",\"_owner\":\"The owner of the Tokens\"},\"returns\":{\"_0\":\"True if the operator is approved, false if not\"}},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"details\":\"Caller must be approved to manage the tokens being transferred out of the `_from` account (see \\\"Approval\\\" section of the standard). MUST revert if `_to` is the zero address. MUST revert if length of `_ids` is not the same as length of `_values`. MUST revert if any of the balance(s) of the holder(s) for token(s) in `_ids` is lower than the respective amount(s) in `_values` sent to the recipient. MUST revert on any other error. MUST emit `TransferSingle` or `TransferBatch` event(s) such that all the balance changes are reflected (see \\\"Safe Transfer Rules\\\" section of the standard). Balance changes and events MUST follow the ordering of the arrays (_ids[0]/_values[0] before _ids[1]/_values[1], etc). After the above conditions for the transfer(s) in the batch are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call the relevant `ERC1155TokenReceiver` hook(s) on `_to` and act appropriately (see \\\"Safe Transfer Rules\\\" section of the standard).\",\"params\":{\"_data\":\"Additional data with no specified format, MUST be sent unaltered in call to the `ERC1155TokenReceiver` hook(s) on `_to`\",\"_from\":\"Source address\",\"_ids\":\"IDs of each token type (order and length must match _values array)\",\"_to\":\"Target address\",\"_values\":\"Transfer amounts per token type (order and length must match _ids array)\"}},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"details\":\"Caller must be approved to manage the tokens being transferred out of the `_from` account (see \\\"Approval\\\" section of the standard). MUST revert if `_to` is the zero address. MUST revert if balance of holder for token `_id` is lower than the `_value` sent. MUST revert on any other error. MUST emit the `TransferSingle` event to reflect the balance change (see \\\"Safe Transfer Rules\\\" section of the standard). After the above conditions are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call `onERC1155Received` on `_to` and act appropriately (see \\\"Safe Transfer Rules\\\" section of the standard).\",\"params\":{\"_data\":\"Additional data with no specified format, MUST be sent unaltered in call to `onERC1155Received` on `_to`\",\"_from\":\"Source address\",\"_id\":\"ID of the token type\",\"_to\":\"Target address\",\"_value\":\"Transfer amount\"}},\"setApprovalForAll(address,bool)\":{\"details\":\"MUST emit the ApprovalForAll event on success.\",\"params\":{\"_approved\":\"True if the operator is approved, false to revoke approval\",\"_operator\":\"Address to add to the set of authorized operators\"}}}},\"userdoc\":{\"methods\":{\"balanceOf(address,uint256)\":{\"notice\":\"Get the balance of an account's Tokens.\"},\"balanceOfBatch(address[],uint256[])\":{\"notice\":\"Get the balance of multiple account/token pairs\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Queries the approval status of an operator for a given owner.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"notice\":\"Transfers `_values` amount(s) of `_ids` from the `_from` address to the `_to` address specified (with safety call).\"},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"notice\":\"Transfers `_value` amount of an `_id` from the `_from` address to the `_to` address specified (with safety call).\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Enable or disable approval for a third party (\\\"operator\\\") to manage all of the caller's tokens.\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/richard/Workspace/Koios-Badges/contracts/KoiosBadges.sol\":\"KoiosBadges\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/richard/Workspace/Koios-Badges/contracts/Address.sol\":{\"keccak256\":\"0xa68301677c29bcf0f3e3f51d74754c0b62667bab76707bb081115d3f4f848753\",\"urls\":[\"bzz-raw://d2bef59770151ffd0bbdad65fd3dbb6b7f71f0e2d577cdf57d5d544853d209f7\",\"dweb:/ipfs/QmQrMk3MZi95LsJnhuVQmpBuSeE2gJ11P6gCEz9FMkftny\"]},\"/Users/richard/Workspace/Koios-Badges/contracts/Common.sol\":{\"keccak256\":\"0x6e29dbadd0b9dbcf495b39c03b8985a777b526adb5ebb0f917cfc45e7e24dc42\",\"urls\":[\"bzz-raw://aac743c619b207f02c42626f7a8190aaa87ff18f816c6474ff5fb9396a7dd9bd\",\"dweb:/ipfs/QmT9h9Qed9oqpbqGWhV1sR4QUbbnFrdU4t1PRWbBjUtJJH\"]},\"/Users/richard/Workspace/Koios-Badges/contracts/ERC165.sol\":{\"keccak256\":\"0xe04e2f2331096b03573a275311db0778f28c64e1728d83a205f2c37e448f85c8\",\"urls\":[\"bzz-raw://34fe9c73208ffc3b0687c85940e24095a94fa96ea5833d2ed4ff6717a9d1e11e\",\"dweb:/ipfs/QmdjhmST7dMypXuQfzybUHYWJjWveLW9hGQTKVmzr6XF6E\"]},\"/Users/richard/Workspace/Koios-Badges/contracts/IERC1155.sol\":{\"keccak256\":\"0xb0453be9ce392a7436d8f03dcabe34ad9ac3eda078aae15d1ca21b3c20f1c540\",\"urls\":[\"bzz-raw://13322372d79e253ae43e352af609fd5e6316849034f30283b9687e6ffcab8cb5\",\"dweb:/ipfs/QmeeEoH1iSTG5xBaG9z1bfKUPZFABAKn9rZF1k9NCTvq5B\"]},\"/Users/richard/Workspace/Koios-Badges/contracts/IERC1155Metadata.sol\":{\"keccak256\":\"0x6372410dc46f6944e8080105bfcc13a38f63ca95424f508d72dbd1f5de59e0c9\",\"urls\":[\"bzz-raw://28e461c7abd05e81f3b78be955d45a54195e4a4a5e1120d8f9537cedb1002b7f\",\"dweb:/ipfs/QmSvdPsU8f4USSoMstNgFRkwRdV5p5Lg4VDzJpMYMHDWj5\"]},\"/Users/richard/Workspace/Koios-Badges/contracts/IERC1155TokenReceiver.sol\":{\"keccak256\":\"0x5d839945218925f87b5bbff4e89902f046667dd651f4660adbb63210b12bff8f\",\"urls\":[\"bzz-raw://bc3ef99aae1d80da98efb100ed6313ba5baaf5df6562fe5f44d9e804e791c172\",\"dweb:/ipfs/QmagpXr3bvLg464fnjzyX8kdzJXhUo9q1p6Gu26fDdTKm5\"]},\"/Users/richard/Workspace/Koios-Badges/contracts/KoiosBadges.sol\":{\"keccak256\":\"0x7bc4d8924bd44d5e613083c4892595009c82f9794abd31325c53be50023bf6d3\",\"urls\":[\"bzz-raw://a47c122ee546459be40fa881532938131385c1193a991027a62eeea03b705d02\",\"dweb:/ipfs/QmRxu8fizrCEWZ5WbzRJyfUbAxzdhsHbGZDe9T2iu2U7uq\"]},\"/Users/richard/Workspace/Koios-Badges/contracts/Ownable.sol\":{\"keccak256\":\"0x487374c29edf257edc7dc532c444e9987381f2dcb4ea06d77762ba5afe5a78e2\",\"license\":\"UNLICENSED\",\"urls\":[\"bzz-raw://1d99ff37b282d3acae010591318bd6de3fc557dc190c94c4775edc14dc04c92d\",\"dweb:/ipfs/QmTqrAB2JRNoixES86FGNWcRKqFTapFWrW4QjYxdqzjrZb\"]},\"/Users/richard/Workspace/Koios-Badges/contracts/SafeMath.sol\":{\"keccak256\":\"0xc4ba13c9e94d6f7a0a7a8a121c7f8faa3a5c8a4f60fe837cda49d8d6805b850b\",\"urls\":[\"bzz-raw://362476aea703d0238fbb0d90cab36365ff6086f9e63b007f42ceec096c4bf6df\",\"dweb:/ipfs/QmVWJKv9cgvqerjHHvgLVeh2NRUuDXkWBFsggCTH72AnYd\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000a333620000a960201b60201c565b620001ab565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161462000150576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018062002e1b602a913960400191505060405180910390fd5b6001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b612c6080620001bb6000396000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c80638da5cb5b116100ad578063affed0e011610071578063affed0e0146108f1578063bd6018bb1461090f578063c87b56dd14610953578063e985e9c5146109fa578063f242432a14610a7657610120565b80638da5cb5b14610769578063933166e1146107b357806394bf804d1461080f578063a22cb4651461085d578063a6f9dae1146108ad57610120565b80632eb2c2d6116100f45780632eb2c2d61461036c5780633b9dce05146104cf57806340c1a064146105135780634e1273f4146105815780635ed12364146106a457610120565b8062fdd58e146101255780630118fa491461018757806301ffc9a7146102605780630e89341c146102c5575b600080fd5b6101716004803603604081101561013b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b43565b6040518082815260200191505060405180910390f35b61024a6004803603604081101561019d57600080fd5b8101908080359060200190929190803590602001906401000000008111156101c457600080fd5b8201836020820111156101d657600080fd5b803590602001918460018302840111640100000000831117156101f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610b9e565b6040518082815260200191505060405180910390f35b6102ab6004803603602081101561027657600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610e67565b604051808215151515815260200191505060405180910390f35b6102f1600480360360208110156102db57600080fd5b8101908080359060200190929190505050610f67565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610331578082015181840152602081019050610316565b50505050905090810190601f16801561035e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104cd600480360360a081101561038257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156103df57600080fd5b8201836020820111156103f157600080fd5b8035906020019184602083028401116401000000008311171561041357600080fd5b90919293919293908035906020019064010000000081111561043457600080fd5b82018360208201111561044657600080fd5b8035906020019184602083028401116401000000008311171561046857600080fd5b90919293919293908035906020019064010000000081111561048957600080fd5b82018360208201111561049b57600080fd5b803590602001918460018302840111640100000000831117156104bd57600080fd5b9091929391929390505050610ff5565b005b610511600480360360208110156104e557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061163a565b005b61053f6004803603602081101561052957600080fd5b810190808035906020019092919050505061173a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61064d6004803603604081101561059757600080fd5b81019080803590602001906401000000008111156105b457600080fd5b8201836020820111156105c657600080fd5b803590602001918460208302840111640100000000831117156105e857600080fd5b90919293919293908035906020019064010000000081111561060957600080fd5b82018360208201111561061b57600080fd5b8035906020019184602083028401116401000000008311171561063d57600080fd5b909192939192939050505061176d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610690578082015181840152602081019050610675565b505050509050019250505060405180910390f35b610767600480360360408110156106ba57600080fd5b81019080803590602001906401000000008111156106d757600080fd5b8201836020820111156106e957600080fd5b8035906020019184600183028401116401000000008311171561070b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919050505061189b565b005b610771611a1d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107f5600480360360208110156107c957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a42565b604051808215151515815260200191505060405180910390f35b61085b6004803603604081101561082557600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a62565b005b6108ab6004803603604081101561087357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611c4c565b005b6108ef600480360360208110156108c357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611d4d565b005b6108f9611e35565b6040518082815260200191505060405180910390f35b6109516004803603602081101561092557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611e3b565b005b61097f6004803603602081101561096957600080fd5b8101908080359060200190929190505050611f3b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109bf5780820151818401526020810190506109a4565b50505050905090810190601f1680156109ec5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610a5c60048036036040811015610a1057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611feb565b604051808215151515815260200191505060405180910390f35b610b41600480360360a0811015610a8c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190640100000000811115610afd57600080fd5b820183602082011115610b0f57600080fd5b80359060200191846001830284011164010000000083111715610b3157600080fd5b909192939192939050505061207f565b005b60006001600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610c5f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f7520617265206e6f7420612063726561746f72000000000000000000000081525060200191505060405180910390fd5b6003600081546001019190508190559050336005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826001600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600660008381526020019081526020016000209080519060200190610d3e929190612a38565b503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628487604051808381526020018281526020019250505060405180910390a4807f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b836040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e27578082015181840152602081019050610e0c565b50505050905090810190601f168015610e545780820380516001836020036101000a031916815260200191505b509250505060405180910390a292915050565b60006301ffc9a760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610f00575063d9b67a2660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610f4f5750630e89341c60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15610f5d5760019050610f62565b600090505b919050565b6060600660008381526020019081526020016000206040516020018082805460018160011615610100020316600290048015610fda5780601f10610fb8576101008083540402835291820191610fda565b820191906000526020600020905b815481529060010190602001808311610fc6575b50509150506040516020818303038152906040529050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461109a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ade602a913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161415611120576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180612b086025913960400191505060405180910390fd5b83839050868690501461117e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612bc96029913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161480611245575060011515600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b61129a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612b2d602f913960400191505060405180910390fd5b60008090505b868690508110156114545760008787838181106112b957fe5b90506020020135905060008686848181106112d057fe5b90506020020135905061133c816001600085815260200190815260200160002060008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461255490919063ffffffff16565b6001600084815260200190815260200160002060008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113f36001600084815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548261256b90919063ffffffff16565b6001600084815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050508060010190506112a0565b508673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb898989896040518080602001806020018381038352878782818152602001925060200280828437600081840152601f19601f8201169050808301925050508381038252858582818152602001925060200280828437600081840152601f19601f820116905080830192505050965050505050505060405180910390a46115568773ffffffffffffffffffffffffffffffffffffffff16612585565b156116305761162f338989898980806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505087878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612598565b5b5050505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146116df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ade602a913960400191505060405180910390fd5b6001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60056020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606082829050858590501461178157600080fd5b60608585905067ffffffffffffffff8111801561179d57600080fd5b506040519080825280602002602001820160405280156117cc5781602001602082028036833780820191505090505b50905060008090505b8686905081101561188e57600160008686848181106117f057fe5b905060200201358152602001908152602001600020600088888481811061181357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482828151811061187757fe5b6020026020010181815250508060010190506117d5565b5080915050949350505050565b803373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611953576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612b9a602f913960400191505060405180910390fd5b8260066000848152602001908152602001600020908051906020019061197a929190612a38565b50817f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b846040518080602001828103825283818151815260200191508051906020019080838360005b838110156119de5780820151818401526020810190506119c3565b50505050905090810190601f168015611a0b5780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915054906101000a900460ff1681565b813373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611b1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612b9a602f913960400191505060405180910390fd5b611b7d600180600086815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461256b90919063ffffffff16565b508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62866001604051808381526020018281526020019250505060405180910390a4611c238273ffffffffffffffffffffffffffffffffffffffff16612585565b15611c4757611c4633338486600160405180602001604052806000815250612829565b5b505050565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611df2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ade602a913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611ee0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ade602a913960400191505060405180910390fd5b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60066020528060005260406000206000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611fe35780601f10611fb857610100808354040283529160200191611fe3565b820191906000526020600020905b815481529060010190602001808311611fc657829003601f168201915b505050505081565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612124576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ade602a913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156121c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f5f746f206d757374206265206e6f6e2d7a65726f2e000000000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16148061228e575060011515600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b6122e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612b2d602f913960400191505060405180910390fd5b612346836001600087815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461255490919063ffffffff16565b6001600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506123fd6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548461256b90919063ffffffff16565b6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051808381526020018281526020019250505060405180910390a46124f48573ffffffffffffffffffffffffffffffffffffffff16612585565b1561254c5761254b338787878787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612829565b5b505050505050565b60008282111561256057fe5b818303905092915050565b600081830190508281101561257c57fe5b80905092915050565b600080823b905060008111915050919050565b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168473ffffffffffffffffffffffffffffffffffffffff1663bc197c8188888787876040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561269e578082015181840152602081019050612683565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156126e05780820151818401526020810190506126c5565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561271f578082015181840152602081019050612704565b50505050905090810190601f16801561274c5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b15801561277157600080fd5b505af1158015612785573d6000803e3d6000fd5b505050506040513d602081101561279b57600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614612821576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603e815260200180612b5c603e913960400191505060405180910390fd5b505050505050565b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168473ffffffffffffffffffffffffffffffffffffffff1663f23a6e6188888787876040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612930578082015181840152602081019050612915565b50505050905090810190601f16801561295d5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b15801561298057600080fd5b505af1158015612994573d6000803e3d6000fd5b505050506040513d60208110156129aa57600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614612a30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526039815260200180612bf26039913960400191505060405180910390fd5b505050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612a7957805160ff1916838001178555612aa7565b82800160010185558215612aa7579182015b82811115612aa6578251825591602001919060010190612a8b565b5b509050612ab49190612ab8565b5090565b612ada91905b80821115612ad6576000816000905550600101612abe565b5090565b9056fe4f6e6c792074686520636f6e7472616374206f776e65722063616e206578656375746520616374696f6e64657374696e6174696f6e2061646472657373206d757374206265206e6f6e2d7a65726f2e4e656564206f70657261746f7220617070726f76616c20666f7220337264207061727479207472616e73666572732e636f6e74726163742072657475726e656420616e20756e6b6e6f776e2076616c75652066726f6d206f6e45524331313535426174636852656365697665644f6e6c792074686520746f6b656e2063726561746f722063616e2061636365737320746869732066756e6374696f6e5f69647320616e64205f76616c756573206172726179206c656e676874206d757374206d617463682e636f6e74726163742072657475726e656420616e20756e6b6e6f776e2076616c75652066726f6d206f6e455243313135355265636569766564a26469706673582212200ef4986efcf4df5b52035f7b1746d586d20e31656a177f5d41c2bbf4ed67a13164736f6c634300060900334f6e6c792074686520636f6e7472616374206f776e65722063616e206578656375746520616374696f6e",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101205760003560e01c80638da5cb5b116100ad578063affed0e011610071578063affed0e0146108f1578063bd6018bb1461090f578063c87b56dd14610953578063e985e9c5146109fa578063f242432a14610a7657610120565b80638da5cb5b14610769578063933166e1146107b357806394bf804d1461080f578063a22cb4651461085d578063a6f9dae1146108ad57610120565b80632eb2c2d6116100f45780632eb2c2d61461036c5780633b9dce05146104cf57806340c1a064146105135780634e1273f4146105815780635ed12364146106a457610120565b8062fdd58e146101255780630118fa491461018757806301ffc9a7146102605780630e89341c146102c5575b600080fd5b6101716004803603604081101561013b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b43565b6040518082815260200191505060405180910390f35b61024a6004803603604081101561019d57600080fd5b8101908080359060200190929190803590602001906401000000008111156101c457600080fd5b8201836020820111156101d657600080fd5b803590602001918460018302840111640100000000831117156101f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610b9e565b6040518082815260200191505060405180910390f35b6102ab6004803603602081101561027657600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610e67565b604051808215151515815260200191505060405180910390f35b6102f1600480360360208110156102db57600080fd5b8101908080359060200190929190505050610f67565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610331578082015181840152602081019050610316565b50505050905090810190601f16801561035e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104cd600480360360a081101561038257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156103df57600080fd5b8201836020820111156103f157600080fd5b8035906020019184602083028401116401000000008311171561041357600080fd5b90919293919293908035906020019064010000000081111561043457600080fd5b82018360208201111561044657600080fd5b8035906020019184602083028401116401000000008311171561046857600080fd5b90919293919293908035906020019064010000000081111561048957600080fd5b82018360208201111561049b57600080fd5b803590602001918460018302840111640100000000831117156104bd57600080fd5b9091929391929390505050610ff5565b005b610511600480360360208110156104e557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061163a565b005b61053f6004803603602081101561052957600080fd5b810190808035906020019092919050505061173a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61064d6004803603604081101561059757600080fd5b81019080803590602001906401000000008111156105b457600080fd5b8201836020820111156105c657600080fd5b803590602001918460208302840111640100000000831117156105e857600080fd5b90919293919293908035906020019064010000000081111561060957600080fd5b82018360208201111561061b57600080fd5b8035906020019184602083028401116401000000008311171561063d57600080fd5b909192939192939050505061176d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610690578082015181840152602081019050610675565b505050509050019250505060405180910390f35b610767600480360360408110156106ba57600080fd5b81019080803590602001906401000000008111156106d757600080fd5b8201836020820111156106e957600080fd5b8035906020019184600183028401116401000000008311171561070b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919050505061189b565b005b610771611a1d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107f5600480360360208110156107c957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a42565b604051808215151515815260200191505060405180910390f35b61085b6004803603604081101561082557600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a62565b005b6108ab6004803603604081101561087357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611c4c565b005b6108ef600480360360208110156108c357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611d4d565b005b6108f9611e35565b6040518082815260200191505060405180910390f35b6109516004803603602081101561092557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611e3b565b005b61097f6004803603602081101561096957600080fd5b8101908080359060200190929190505050611f3b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109bf5780820151818401526020810190506109a4565b50505050905090810190601f1680156109ec5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610a5c60048036036040811015610a1057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611feb565b604051808215151515815260200191505060405180910390f35b610b41600480360360a0811015610a8c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190640100000000811115610afd57600080fd5b820183602082011115610b0f57600080fd5b80359060200191846001830284011164010000000083111715610b3157600080fd5b909192939192939050505061207f565b005b60006001600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610c5f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f7520617265206e6f7420612063726561746f72000000000000000000000081525060200191505060405180910390fd5b6003600081546001019190508190559050336005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826001600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600660008381526020019081526020016000209080519060200190610d3e929190612a38565b503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628487604051808381526020018281526020019250505060405180910390a4807f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b836040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e27578082015181840152602081019050610e0c565b50505050905090810190601f168015610e545780820380516001836020036101000a031916815260200191505b509250505060405180910390a292915050565b60006301ffc9a760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610f00575063d9b67a2660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610f4f5750630e89341c60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15610f5d5760019050610f62565b600090505b919050565b6060600660008381526020019081526020016000206040516020018082805460018160011615610100020316600290048015610fda5780601f10610fb8576101008083540402835291820191610fda565b820191906000526020600020905b815481529060010190602001808311610fc6575b50509150506040516020818303038152906040529050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461109a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ade602a913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161415611120576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180612b086025913960400191505060405180910390fd5b83839050868690501461117e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612bc96029913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161480611245575060011515600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b61129a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612b2d602f913960400191505060405180910390fd5b60008090505b868690508110156114545760008787838181106112b957fe5b90506020020135905060008686848181106112d057fe5b90506020020135905061133c816001600085815260200190815260200160002060008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461255490919063ffffffff16565b6001600084815260200190815260200160002060008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113f36001600084815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548261256b90919063ffffffff16565b6001600084815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050508060010190506112a0565b508673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb898989896040518080602001806020018381038352878782818152602001925060200280828437600081840152601f19601f8201169050808301925050508381038252858582818152602001925060200280828437600081840152601f19601f820116905080830192505050965050505050505060405180910390a46115568773ffffffffffffffffffffffffffffffffffffffff16612585565b156116305761162f338989898980806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505087878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612598565b5b5050505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146116df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ade602a913960400191505060405180910390fd5b6001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60056020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606082829050858590501461178157600080fd5b60608585905067ffffffffffffffff8111801561179d57600080fd5b506040519080825280602002602001820160405280156117cc5781602001602082028036833780820191505090505b50905060008090505b8686905081101561188e57600160008686848181106117f057fe5b905060200201358152602001908152602001600020600088888481811061181357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482828151811061187757fe5b6020026020010181815250508060010190506117d5565b5080915050949350505050565b803373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611953576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612b9a602f913960400191505060405180910390fd5b8260066000848152602001908152602001600020908051906020019061197a929190612a38565b50817f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b846040518080602001828103825283818151815260200191508051906020019080838360005b838110156119de5780820151818401526020810190506119c3565b50505050905090810190601f168015611a0b5780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915054906101000a900460ff1681565b813373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611b1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612b9a602f913960400191505060405180910390fd5b611b7d600180600086815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461256b90919063ffffffff16565b508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62866001604051808381526020018281526020019250505060405180910390a4611c238273ffffffffffffffffffffffffffffffffffffffff16612585565b15611c4757611c4633338486600160405180602001604052806000815250612829565b5b505050565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611df2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ade602a913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611ee0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ade602a913960400191505060405180910390fd5b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60066020528060005260406000206000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611fe35780601f10611fb857610100808354040283529160200191611fe3565b820191906000526020600020905b815481529060010190602001808311611fc657829003601f168201915b505050505081565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612124576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ade602a913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156121c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f5f746f206d757374206265206e6f6e2d7a65726f2e000000000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16148061228e575060011515600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b6122e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612b2d602f913960400191505060405180910390fd5b612346836001600087815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461255490919063ffffffff16565b6001600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506123fd6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548461256b90919063ffffffff16565b6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051808381526020018281526020019250505060405180910390a46124f48573ffffffffffffffffffffffffffffffffffffffff16612585565b1561254c5761254b338787878787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612829565b5b505050505050565b60008282111561256057fe5b818303905092915050565b600081830190508281101561257c57fe5b80905092915050565b600080823b905060008111915050919050565b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168473ffffffffffffffffffffffffffffffffffffffff1663bc197c8188888787876040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561269e578082015181840152602081019050612683565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156126e05780820151818401526020810190506126c5565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561271f578082015181840152602081019050612704565b50505050905090810190601f16801561274c5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b15801561277157600080fd5b505af1158015612785573d6000803e3d6000fd5b505050506040513d602081101561279b57600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614612821576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603e815260200180612b5c603e913960400191505060405180910390fd5b505050505050565b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168473ffffffffffffffffffffffffffffffffffffffff1663f23a6e6188888787876040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612930578082015181840152602081019050612915565b50505050905090810190601f16801561295d5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b15801561298057600080fd5b505af1158015612994573d6000803e3d6000fd5b505050506040513d60208110156129aa57600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614612a30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526039815260200180612bf26039913960400191505060405180910390fd5b505050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612a7957805160ff1916838001178555612aa7565b82800160010185558215612aa7579182015b82811115612aa6578251825591602001919060010190612a8b565b5b509050612ab49190612ab8565b5090565b612ada91905b80821115612ad6576000816000905550600101612abe565b5090565b9056fe4f6e6c792074686520636f6e7472616374206f776e65722063616e206578656375746520616374696f6e64657374696e6174696f6e2061646472657373206d757374206265206e6f6e2d7a65726f2e4e656564206f70657261746f7220617070726f76616c20666f7220337264207061727479207472616e73666572732e636f6e74726163742072657475726e656420616e20756e6b6e6f776e2076616c75652066726f6d206f6e45524331313535426174636852656365697665644f6e6c792074686520746f6b656e2063726561746f722063616e2061636365737320746869732066756e6374696f6e5f69647320616e64205f76616c756573206172726179206c656e676874206d757374206d617463682e636f6e74726163742072657475726e656420616e20756e6b6e6f776e2076616c75652066726f6d206f6e455243313135355265636569766564a26469706673582212200ef4986efcf4df5b52035f7b1746d586d20e31656a177f5d41c2bbf4ed67a13164736f6c63430006090033",
    "immutableReferences": {},
    "sourceMap": "218:12512:6:-:0;;;1484:78;;;;;;;;;;154:10:8;146:5;;:18;;;;;;;;;;;;;;;;;;1519:10:6;1511:5;;:18;;;;;;;;;;;;;;;;;;1535:22;1546:10;1535;;;:22;;:::i;:::-;218:12512;;1566:91;228:5:8;;;;;;;;;;;214:19;;:10;:19;;;206:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1648:4:6::1;1627:8;:18;1636:8;1627:18;;;;;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;1566:91:::0;:::o;218:12512::-;;;;;;;",
    "deployedSourceMap": "218:12512:6:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8375:360;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1762:387;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;786:276;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2632:136;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6466:1679;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1566:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1135:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;9019:375;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2491:137;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;88:20:8;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1091:40:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2203:284;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;9734:201;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;304:89:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1066:20:6;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1661:97;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1186:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10200:152;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3980:890;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;8375:360;8455:7;8709:8;:13;8718:3;8709:13;;;;;;;;;;;:21;8723:6;8709:21;;;;;;;;;;;;;;;;8702:28;;8375:360;;;;:::o;1762:387::-;1849:11;1270:8;:20;1279:10;1270:20;;;;;;;;;;;;;;;;;;;;;;;;;1262:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1877:5:::1;;1875:7;;;;;;;;;;1869:13;;1908:10;1888:12;:17;1901:3;1888:17;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;1952:14;1924:8;:13;1933:3;1924:13;;;;;;;;;;;:25;1938:10;1924:25;;;;;;;;;;;;;;;:42;;;;1988:4;1972:8;:13;1981:3;1972:13;;;;;;;;;;;:20;;;;;;;;;;;;:::i;:::-;;2086:10;2045:73;;2080:3;2045:73;;2060:10;2045:73;;;2098:3;2103:14;2045:73;;;;;;;;;;;;;;;;;;;;;;;;2140:3;2130:14;2134:4;2130:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1762:387:::0;;;;:::o;786:276::-;864:4;638:10;896:26;;880:42;;;:12;:42;;;;:89;;;;706:10;942:27;;926:43;;;:12;:43;;;;880:89;:132;;;;770:10;989:23;;973:39;;;:12;:39;;;;880:132;876:164;;;1029:4;1022:11;;;;876:164;1052:5;1045:12;;786:276;;;;:::o;2632:136::-;2692:13;2744:8;:17;2753:7;2744:17;;;;;;;;;;;2727:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2713:50;;2632:136;;;:::o;6466:1679::-;228:5:8;;;;;;;;;;;214:19;;:10;:19;;;206:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6686:3:6::1;6671:19;;:3;:19;;;;6663:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6761:7;;:14;;6746:4;;:11;;:29;6738:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6844:10;6835:19;;:5;:19;;;:66;;;;6897:4;6858:43;;:16;:23;6875:5;6858:23;;;;;;;;;;;;;;;:35;6882:10;6858:35;;;;;;;;;;;;;;;;;;;;;;;;;:43;;;6835:66;6827:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6965:9;6977:1:::0;6965:13:::1;;6960:340;6984:4;;:11;;6980:1;:15;6960:340;;;7010:10;7023:4;;7028:1;7023:7;;;;;;;;;;;;;7010:20;;7038:13;7054:7;;7062:1;7054:10;;;;;;;;;;;;;7038:26;;7205:30;7229:5;7205:8;:12;7214:2;7205:12;;;;;;;;;;;:19;7218:5;7205:19;;;;;;;;;;;;;;;;:23;;:30;;;;:::i;:::-;7183:8;:12;7192:2;7183:12;;;;;;;;;;;:19;7196:5;7183:19;;;;;;;;;;;;;;;:52;;;;7265:28;7275:8;:12;7284:2;7275:12;;;;;;;;;;;:17;7288:3;7275:17;;;;;;;;;;;;;;;;7265:5;:9;;:28;;;;:::i;:::-;7243:8;:12;7252:2;7243:12;;;;;;;;;;;:17;7256:3;7243:17;;;;;;;;;;;;;;;:50;;;;6960:340;;6997:3;;;;;6960:340;;;;7859:3;7826:52;;7852:5;7826:52;;7840:10;7826:52;;;7864:4;;7870:7;;7826:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8027:16;:3;:14;;;:16::i;:::-;8023:118;;;8053:81;8089:10;8101:5;8108:3;8113:4;;8053:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8119:7;;8053:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8128:5;;8053:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:35;:81::i;:::-;8023:118;6466:1679:::0;;;;;;;;:::o;1566:91::-;228:5:8;;;;;;;;;;;214:19;;:10;:19;;;206:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1648:4:6::1;1627:8;:18;1636:8;1627:18;;;;;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;1566:91:::0;:::o;1135:47::-;;;;;;;;;;;;;;;;;;;;;;:::o;9019:375::-;9128:16;9179:4;;:11;;9161:7;;:14;;:29;9153:38;;;;;;9198:26;9241:7;;:14;;9227:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9198:58;;9268:9;9280:1;9268:13;;9263:104;9287:7;;:14;;9283:1;:18;9263:104;;;9331:8;:17;9340:4;;9345:1;9340:7;;;;;;;;;;;;;9331:17;;;;;;;;;;;:29;9349:7;;9357:1;9349:10;;;;;;;;;;;;;;;9331:29;;;;;;;;;;;;;;;;9316:9;9326:1;9316:12;;;;;;;;;;;;;:44;;;;;9303:3;;;;;9263:104;;;;9380:9;9373:16;;;9019:375;;;;;;:::o;2491:137::-;2567:3;1406:10;1385:31;;:12;:17;1398:3;1385:17;;;;;;;;;;;;;;;;;;;;;:31;;;1377:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2594:4:::1;2578:8;:13;2587:3;2578:13;;;;;;;;;;;:20;;;;;;;;;;;;:::i;:::-;;2619:3;2609:14;2613:4;2609:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2491:137:::0;;;:::o;88:20:8:-;;;;;;;;;;;;;:::o;1091:40:6:-;;;;;;;;;;;;;;;;;;;;;;:::o;2203:284::-;2267:3;1406:10;1385:31;;:12;:17;1398:3;1385:17;;;;;;;;;;;;;;;;;;;;;:31;;;1377:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2279:25:::1;2302:1;2279:8:::0;:13:::1;2288:3;2279:13;;;;;;;;;;;:18;2293:3;2279:18;;;;;;;;;;;;;;;;:22;;:25;;;;:::i;:::-;;2356:3;2315:53;;2350:3;2315:53;;2330:10;2315:53;;;2361:3;2366:1;2315:53;;;;;;;;;;;;;;;;;;;;;;;;2379:16;:3;:14;;;:16::i;:::-;2375:108;;;2405:71;2436:10;2448;2460:3;2465;2470:1;2405:71;;;;;;;;;;;::::0;:30:::1;:71::i;:::-;2375:108;2203:284:::0;;;:::o;9734:201::-;9862:9;9820:16;:28;9837:10;9820:28;;;;;;;;;;;;;;;:39;9849:9;9820:39;;;;;;;;;;;;;;;;:51;;;;;;;;;;;;;;;;;;9909:9;9882:48;;9897:10;9882:48;;;9920:9;9882:48;;;;;;;;;;;;;;;;;;;;;;9734:201;;:::o;304:89:8:-;228:5;;;;;;;;;;;214:19;;:10;:19;;;206:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;378:8:::1;370:5;::::0;:16:::1;;;;;;;;;;;;;;;;;;304:89:::0;:::o;1066:20:6:-;;;;:::o;1661:97::-;228:5:8;;;;;;;;;;;214:19;;:10;:19;;;206:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1748:5:6::1;1727:8;:18;1736:8;1727:18;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;1661:97:::0;:::o;1186:42::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;10200:152::-;10293:4;10312:16;:24;10329:6;10312:24;;;;;;;;;;;;;;;:35;10337:9;10312:35;;;;;;;;;;;;;;;;;;;;;;;;;10305:42;;10200:152;;;;:::o;3980:890::-;228:5:8;;;;;;;;;;;214:19;;:10;:19;;;206:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4143:3:6::1;4128:19;;:3;:19;;;;4120:53;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;4196:10;4187:19;;:5;:19;;;:66;;;;4249:4;4210:43;;:16;:23;4227:5;4210:23;;;;;;;;;;;;;;;:35;4234:10;4210:35;;;;;;;;;;;;;;;;;;;;;;;;;:43;;;4187:66;4179:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4441:32;4466:6;4441:8;:13;4450:3;4441:13;;;;;;;;;;;:20;4455:5;4441:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;4418:8;:13;4427:3;4418:13;;;;;;;;;;;:20;4432:5;4418:20;;;;;;;;;;;;;;;:55;;;;4502:30;4513:8;:13;4522:3;4513:13;;;;;;;;;;;:18;4527:3;4513:18;;;;;;;;;;;;;;;;4502:6;:10;;:30;;;;:::i;:::-;4479:8;:13;4488:3;4479:13;;;;;;;;;;;:18;4493:3;4479:18;;;;;;;;;;;;;;;:53;;;;4601:3;4567:51;;4594:5;4567:51;;4582:10;4567:51;;;4606:3;4611:6;4567:51;;;;;;;;;;;;;;;;;;;;;;;;4759:16;:3;:14;;;:16::i;:::-;4755:111;;;4785:74;4816:10;4828:5;4835:3;4840;4845:6;4853:5;;4785:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:30;:74::i;:::-;4755:111;3980:890:::0;;;;;;:::o;1041:110:9:-;1099:7;1126:1;1121;:6;;1114:14;;;;1145:1;1141;:5;1134:12;;1041:110;;;;:::o;1213:123::-;1271:9;1296:1;1292;:5;1288:9;;1315:1;1310;:6;;1303:14;;;;1330:1;1323:8;;1213:123;;;;:::o;449:582:0:-;509:4;521:12;996:7;984:20;976:28;;1025:1;1018:4;:8;1011:15;;;449:582;;;:::o;11569:1159:6:-;307:10:1;12634:22:6;;12542:114;;;12563:3;12542:48;;;12591:9;12602:5;12609:4;12615:7;12624:5;12542:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:114;;;;12534:189;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11569:1159;;;;;;:::o;10459:1106::-;162:10:1;11482:16:6;;11397:101;;;11418:3;11397:43;;;11441:9;11452:5;11459:3;11464:6;11472:5;11397:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:101;;;;11389:171;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10459:1106;;;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "pragma solidity ^0.6.0;\n\nimport \"./Ownable.sol\";\nimport \"./SafeMath.sol\";\nimport \"./Address.sol\";\nimport \"./Common.sol\";\nimport \"./IERC1155Metadata.sol\";\nimport \"./IERC1155TokenReceiver.sol\";\nimport \"./IERC1155.sol\";\n\ncontract KoiosBadges is IERC1155, ERC165, CommonConstants, ERC1155Metadata_URI, Ownable {\n\n  using SafeMath for uint256;\n  using Address for address;\n\n  // id => (owner => balance)\n  mapping (uint256 => mapping(address => uint256)) internal balances;\n\n  // owner => (operator => approved)\n  mapping (address => mapping(address => bool)) internal operatorApproval;\n\n  bytes4 constant private INTERFACE_SIGNATURE_ERC165 = 0x01ffc9a7;\n  bytes4 constant private INTERFACE_SIGNATURE_ERC1155 = 0xd9b67a26;\n  bytes4 constant private INTERFACE_SIGNATURE_URI = 0x0e89341c;\n\n\n  function supportsInterface(bytes4 _interfaceId) public view override returns (bool) {\n    if (_interfaceId == INTERFACE_SIGNATURE_ERC165 || _interfaceId == INTERFACE_SIGNATURE_ERC1155 || _interfaceId == INTERFACE_SIGNATURE_URI) {\n      return true;\n    }\n    return false;\n  }\n\n  uint256 public nonce;\n\n  mapping(address => bool) public creators;\n  mapping(uint256 => address) public tokenCreator;\n  mapping(uint256 => string) public tokenURI;\n\n  modifier creatorOnly() {\n    require(creators[msg.sender], \"You are not a creator\");\n    _;\n  }\n\n  modifier tokenCreatorOnly(uint256 _id) {\n    require(tokenCreator[_id] == msg.sender, \"Only the token creator can access this function\");\n    _;\n  }\n\n  constructor() public {\n    owner = msg.sender;\n    addCreator(msg.sender);\n  }\n\n  function addCreator(address _address) public ownerOnly {\n    creators[_address] = true;\n  }\n\n  function removeCreator(address _address) external ownerOnly {\n    creators[_address] = false;\n  }\n\n  function create(uint256 _initialSupply, string memory _uri) public creatorOnly returns(uint256 _id) {\n\n    _id = ++nonce;\n    tokenCreator[_id] = msg.sender;\n    balances[_id][msg.sender] = _initialSupply;\n    tokenURI[_id] = _uri;\n\n    // Transfer event with mint semantic\n    emit TransferSingle(msg.sender, address(0x0), msg.sender, _id, _initialSupply);\n\n    emit URI(_uri, _id);\n  }\n\n  // Batch mint tokens. Assign directly to _to[].\n  function mint(uint256 _id, address _to) public tokenCreatorOnly(_id) {\n\n    balances[_id][_to].add(1);\n    emit TransferSingle(msg.sender, address(0x0), _to, _id, 1);\n\n    if (_to.isContract()) {\n      _doSafeTransferAcceptanceCheck(msg.sender, msg.sender, _to, _id, 1, '');\n    }\n  }\n\n  function updateUri(string memory _uri, uint256 _id) public tokenCreatorOnly(_id) {\n    tokenURI[_id] = _uri;\n    emit URI(_uri, _id);\n  }\n\n  function uri(uint256 tokenId) public view override returns (string memory) {\n    return string(abi.encodePacked(tokenURI[tokenId]));\n  }\n\n  /////////////////////////////////////////// ERC1155 //////////////////////////////////////////////\n\n  /**\n      @notice Transfers `_value` amount of an `_id` from the `_from` address to the `_to` address specified (with safety call).\n      @dev Caller must be approved to manage the tokens being transferred out of the `_from` account (see \"Approval\" section of the standard).\n      MUST revert if `_to` is the zero address.\n      MUST revert if balance of holder for token `_id` is lower than the `_value` sent.\n      MUST revert on any other error.\n      MUST emit the `TransferSingle` event to reflect the balance change (see \"Safe Transfer Rules\" section of the standard).\n      After the above conditions are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call `onERC1155Received` on `_to` and act appropriately (see \"Safe Transfer Rules\" section of the standard).\n      @param _from    Source address\n      @param _to      Target address\n      @param _id      ID of the token type\n      @param _value   Transfer amount\n      @param _data    Additional data with no specified format, MUST be sent unaltered in call to `onERC1155Received` on `_to`\n  */\n  function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data) external override ownerOnly {\n\n    require(_to != address(0x0), \"_to must be non-zero.\");\n    require(_from == msg.sender || operatorApproval[_from][msg.sender] == true, \"Need operator approval for 3rd party transfers.\");\n\n    // SafeMath will throw with insuficient funds _from\n    // or if _id is not valid (balance will be 0)\n    balances[_id][_from] = balances[_id][_from].sub(_value);\n    balances[_id][_to]   = _value.add(balances[_id][_to]);\n\n    // MUST emit event\n    emit TransferSingle(msg.sender, _from, _to, _id, _value);\n\n    // Now that the balance is updated and the event was emitted,\n    // call onERC1155Received if the destination is a contract.\n    if (_to.isContract()) {\n      _doSafeTransferAcceptanceCheck(msg.sender, _from, _to, _id, _value, _data);\n    }\n  }\n\n  /**\n      @notice Transfers `_values` amount(s) of `_ids` from the `_from` address to the `_to` address specified (with safety call).\n      @dev Caller must be approved to manage the tokens being transferred out of the `_from` account (see \"Approval\" section of the standard).\n      MUST revert if `_to` is the zero address.\n      MUST revert if length of `_ids` is not the same as length of `_values`.\n      MUST revert if any of the balance(s) of the holder(s) for token(s) in `_ids` is lower than the respective amount(s) in `_values` sent to the recipient.\n      MUST revert on any other error.\n      MUST emit `TransferSingle` or `TransferBatch` event(s) such that all the balance changes are reflected (see \"Safe Transfer Rules\" section of the standard).\n      Balance changes and events MUST follow the ordering of the arrays (_ids[0]/_values[0] before _ids[1]/_values[1], etc).\n      After the above conditions for the transfer(s) in the batch are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call the relevant `ERC1155TokenReceiver` hook(s) on `_to` and act appropriately (see \"Safe Transfer Rules\" section of the standard).\n      @param _from    Source address\n      @param _to      Target address\n      @param _ids     IDs of each token type (order and length must match _values array)\n      @param _values  Transfer amounts per token type (order and length must match _ids array)\n      @param _data    Additional data with no specified format, MUST be sent unaltered in call to the `ERC1155TokenReceiver` hook(s) on `_to`\n  */\n  function safeBatchTransferFrom(address _from, address _to, uint256[] calldata _ids, uint256[] calldata _values, bytes calldata _data) external override ownerOnly {\n\n    // MUST Throw on errors\n    require(_to != address(0x0), \"destination address must be non-zero.\");\n    require(_ids.length == _values.length, \"_ids and _values array lenght must match.\");\n    require(_from == msg.sender || operatorApproval[_from][msg.sender] == true, \"Need operator approval for 3rd party transfers.\");\n\n    for (uint256 i = 0; i < _ids.length; ++i) {\n      uint256 id = _ids[i];\n      uint256 value = _values[i];\n\n      // SafeMath will throw with insuficient funds _from\n      // or if _id is not valid (balance will be 0)\n      balances[id][_from] = balances[id][_from].sub(value);\n      balances[id][_to]   = value.add(balances[id][_to]);\n    }\n\n    // Note: instead of the below batch versions of event and acceptance check you MAY have emitted a TransferSingle\n    // event and a subsequent call to _doSafeTransferAcceptanceCheck in above loop for each balance change instead.\n    // Or emitted a TransferSingle event for each in the loop and then the single _doSafeBatchTransferAcceptanceCheck below.\n    // However it is implemented the balance changes and events MUST match when a check (i.e. calling an external contract) is done.\n\n    // MUST emit event\n    emit TransferBatch(msg.sender, _from, _to, _ids, _values);\n\n    // Now that the balances are updated and the events are emitted,\n    // call onERC1155BatchReceived if the destination is a contract.\n    if (_to.isContract()) {\n      _doSafeBatchTransferAcceptanceCheck(msg.sender, _from, _to, _ids, _values, _data);\n    }\n  }\n\n  /**\n      @notice Get the balance of an account's Tokens.\n      @param _owner  The address of the token holder\n      @param _id     ID of the Token\n      @return        The _owner's balance of the Token type requested\n   */\n  function balanceOf(address _owner, uint256 _id) external view override returns (uint256) {\n    // The balance of any account can be calculated from the Transfer events history.\n    // However, since we need to keep the balances to validate transfer request,\n    // there is no extra cost to also privide a querry function.\n    return balances[_id][_owner];\n  }\n\n  /**\n      @notice Get the balance of multiple account/token pairs\n      @param _owners The addresses of the token holders\n      @param _ids    ID of the Tokens\n      @return        The _owner's balance of the Token types requested (i.e. balance for each (owner, id) pair)\n   */\n  function balanceOfBatch(address[] calldata _owners, uint256[] calldata _ids) external view override returns (uint256[] memory) {\n\n    require(_owners.length == _ids.length);\n\n    uint256[] memory balances_ = new uint256[](_owners.length);\n\n    for (uint256 i = 0; i < _owners.length; ++i) {\n      balances_[i] = balances[_ids[i]][_owners[i]];\n    }\n\n    return balances_;\n  }\n\n  /**\n      @notice Enable or disable approval for a third party (\"operator\") to manage all of the caller's tokens.\n      @dev MUST emit the ApprovalForAll event on success.\n      @param _operator  Address to add to the set of authorized operators\n      @param _approved  True if the operator is approved, false to revoke approval\n  */\n  function setApprovalForAll(address _operator, bool _approved) external override {\n    operatorApproval[msg.sender][_operator] = _approved;\n    emit ApprovalForAll(msg.sender, _operator, _approved);\n  }\n\n  /**\n      @notice Queries the approval status of an operator for a given owner.\n      @param _owner     The owner of the Tokens\n      @param _operator  Address of authorized operator\n      @return           True if the operator is approved, false if not\n  */\n  function isApprovedForAll(address _owner, address _operator) external view override returns (bool) {\n    return operatorApproval[_owner][_operator];\n  }\n\n  /////////////////////////////////////////// Internal //////////////////////////////////////////////\n\n  function _doSafeTransferAcceptanceCheck(address _operator, address _from, address _to, uint256 _id, uint256 _value, bytes memory _data) internal {\n\n    // If this was a hybrid standards solution you would have to check ERC165(_to).supportsInterface(0x4e2312e0) here but as this is a pure implementation of an ERC-1155 token set as recommended by\n    // the standard, it is not necessary. The below should revert in all failure cases i.e. _to isn't a receiver, or it is and either returns an unknown value or it reverts in the call to indicate non-acceptance.\n\n\n    // Note: if the below reverts in the onERC1155Received function of the _to address you will have an undefined revert reason returned rather than the one in the require test.\n    // If you want predictable revert reasons consider using low level _to.call() style instead so the revert does not bubble up and you can revert yourself on the ERC1155_ACCEPTED test.\n    require(ERC1155TokenReceiver(_to).onERC1155Received(_operator, _from, _id, _value, _data) == ERC1155_ACCEPTED, \"contract returned an unknown value from onERC1155Received\");\n  }\n\n  function _doSafeBatchTransferAcceptanceCheck(address _operator, address _from, address _to, uint256[] memory _ids, uint256[] memory _values, bytes memory _data) internal {\n\n    // If this was a hybrid standards solution you would have to check ERC165(_to).supportsInterface(0x4e2312e0) here but as this is a pure implementation of an ERC-1155 token set as recommended by\n    // the standard, it is not necessary. The below should revert in all failure cases i.e. _to isn't a receiver, or it is and either returns an unknown value or it reverts in the call to indicate non-acceptance.\n\n    // Note: if the below reverts in the onERC1155BatchReceived function of the _to address you will have an undefined revert reason returned rather than the one in the require test.\n    // If you want predictable revert reasons consider using low level _to.call() style instead so the revert does not bubble up and you can revert yourself on the ERC1155_BATCH_ACCEPTED test.\n    require(ERC1155TokenReceiver(_to).onERC1155BatchReceived(_operator, _from, _ids, _values, _data) == ERC1155_BATCH_ACCEPTED, \"contract returned an unknown value from onERC1155BatchReceived\");\n  }\n}\n\n",
    "sourcePath": "/Users/richard/Workspace/Koios-Badges/contracts/KoiosBadges.sol",
    "ast": {
      "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/KoiosBadges.sol",
      "exportedSymbols": {
        "KoiosBadges": [
          942
        ]
      },
      "id": 943,
      "license": null,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 214,
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:23:6"
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/Ownable.sol",
          "file": "./Ownable.sol",
          "id": 215,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 1018,
          "src": "25:23:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/SafeMath.sol",
          "file": "./SafeMath.sol",
          "id": 216,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 1117,
          "src": "49:24:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/Address.sol",
          "file": "./Address.sol",
          "id": 217,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 21,
          "src": "74:23:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/Common.sol",
          "file": "./Common.sol",
          "id": 218,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 31,
          "src": "98:22:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/IERC1155Metadata.sol",
          "file": "./IERC1155Metadata.sol",
          "id": 219,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 175,
          "src": "121:32:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/IERC1155TokenReceiver.sol",
          "file": "./IERC1155TokenReceiver.sol",
          "id": 220,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 213,
          "src": "154:37:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/IERC1155.sol",
          "file": "./IERC1155.sol",
          "id": 221,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 163,
          "src": "192:24:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 222,
                "name": "IERC1155",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 162,
                "src": "242:8:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC1155_$162",
                  "typeString": "contract IERC1155"
                }
              },
              "id": 223,
              "nodeType": "InheritanceSpecifier",
              "src": "242:8:6"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 224,
                "name": "ERC165",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 42,
                "src": "252:6:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC165_$42",
                  "typeString": "contract ERC165"
                }
              },
              "id": 225,
              "nodeType": "InheritanceSpecifier",
              "src": "252:6:6"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 226,
                "name": "CommonConstants",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 30,
                "src": "260:15:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_CommonConstants_$30",
                  "typeString": "contract CommonConstants"
                }
              },
              "id": 227,
              "nodeType": "InheritanceSpecifier",
              "src": "260:15:6"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 228,
                "name": "ERC1155Metadata_URI",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 174,
                "src": "277:19:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC1155Metadata_URI_$174",
                  "typeString": "contract ERC1155Metadata_URI"
                }
              },
              "id": 229,
              "nodeType": "InheritanceSpecifier",
              "src": "277:19:6"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 230,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1017,
                "src": "298:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$1017",
                  "typeString": "contract Ownable"
                }
              },
              "id": 231,
              "nodeType": "InheritanceSpecifier",
              "src": "298:7:6"
            }
          ],
          "contractDependencies": [
            30,
            42,
            162,
            174,
            1017
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 942,
          "linearizedBaseContracts": [
            942,
            1017,
            174,
            30,
            42,
            162
          ],
          "name": "KoiosBadges",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "id": 234,
              "libraryName": {
                "contractScope": null,
                "id": 232,
                "name": "SafeMath",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1116,
                "src": "317:8:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_SafeMath_$1116",
                  "typeString": "library SafeMath"
                }
              },
              "nodeType": "UsingForDirective",
              "src": "311:27:6",
              "typeName": {
                "id": 233,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "330:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            {
              "id": 237,
              "libraryName": {
                "contractScope": null,
                "id": 235,
                "name": "Address",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 20,
                "src": "347:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Address_$20",
                  "typeString": "library Address"
                }
              },
              "nodeType": "UsingForDirective",
              "src": "341:26:6",
              "typeName": {
                "id": 236,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "359:7:6",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            {
              "constant": false,
              "id": 243,
              "mutability": "mutable",
              "name": "balances",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "401:66:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(uint256 => mapping(address => uint256))"
              },
              "typeName": {
                "id": 242,
                "keyType": {
                  "id": 238,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "410:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "401:48:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(uint256 => mapping(address => uint256))"
                },
                "valueType": {
                  "id": 241,
                  "keyType": {
                    "id": 239,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "421:27:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 240,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 249,
              "mutability": "mutable",
              "name": "operatorApproval",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "509:71:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                "typeString": "mapping(address => mapping(address => bool))"
              },
              "typeName": {
                "id": 248,
                "keyType": {
                  "id": 244,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "518:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "509:45:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                  "typeString": "mapping(address => mapping(address => bool))"
                },
                "valueType": {
                  "id": 247,
                  "keyType": {
                    "id": 245,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "529:24:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "valueType": {
                    "id": 246,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": true,
              "id": 252,
              "mutability": "constant",
              "name": "INTERFACE_SIGNATURE_ERC165",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "585:63:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              },
              "typeName": {
                "id": 250,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "585:6:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30783031666663396137",
                "id": 251,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "638:10:6",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_33540519_by_1",
                  "typeString": "int_const 33540519"
                },
                "value": "0x01ffc9a7"
              },
              "visibility": "private"
            },
            {
              "constant": true,
              "id": 255,
              "mutability": "constant",
              "name": "INTERFACE_SIGNATURE_ERC1155",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "652:64:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              },
              "typeName": {
                "id": 253,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "652:6:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30786439623637613236",
                "id": 254,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "706:10:6",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_3652614694_by_1",
                  "typeString": "int_const 3652614694"
                },
                "value": "0xd9b67a26"
              },
              "visibility": "private"
            },
            {
              "constant": true,
              "id": 258,
              "mutability": "constant",
              "name": "INTERFACE_SIGNATURE_URI",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "720:60:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              },
              "typeName": {
                "id": 256,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "720:6:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30783065383933343163",
                "id": 257,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "770:10:6",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_243872796_by_1",
                  "typeString": "int_const 243872796"
                },
                "value": "0x0e89341c"
              },
              "visibility": "private"
            },
            {
              "baseFunctions": [
                41
              ],
              "body": {
                "id": 283,
                "nodeType": "Block",
                "src": "870:192:6",
                "statements": [
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 272,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          },
                          "id": 268,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 266,
                            "name": "_interfaceId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 260,
                            "src": "880:12:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 267,
                            "name": "INTERFACE_SIGNATURE_ERC165",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 252,
                            "src": "896:26:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "src": "880:42:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          },
                          "id": 271,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 269,
                            "name": "_interfaceId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 260,
                            "src": "926:12:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 270,
                            "name": "INTERFACE_SIGNATURE_ERC1155",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 255,
                            "src": "942:27:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "src": "926:43:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "880:89:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 275,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 273,
                          "name": "_interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 260,
                          "src": "973:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 274,
                          "name": "INTERFACE_SIGNATURE_URI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 258,
                          "src": "989:23:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "973:39:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "880:132:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 280,
                    "nodeType": "IfStatement",
                    "src": "876:164:6",
                    "trueBody": {
                      "id": 279,
                      "nodeType": "Block",
                      "src": "1014:26:6",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1029:4:6",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "functionReturnParameters": 265,
                          "id": 278,
                          "nodeType": "Return",
                          "src": "1022:11:6"
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 281,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1052:5:6",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "functionReturnParameters": 265,
                    "id": 282,
                    "nodeType": "Return",
                    "src": "1045:12:6"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "01ffc9a7",
              "id": 284,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "supportsInterface",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 262,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "846:8:6"
              },
              "parameters": {
                "id": 261,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 260,
                    "mutability": "mutable",
                    "name": "_interfaceId",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 284,
                    "src": "813:19:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "typeName": {
                      "id": 259,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "813:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "812:21:6"
              },
              "returnParameters": {
                "id": 265,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 264,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 284,
                    "src": "864:4:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 263,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "864:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "863:6:6"
              },
              "scope": 942,
              "src": "786:276:6",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "affed0e0",
              "id": 286,
              "mutability": "mutable",
              "name": "nonce",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "1066:20:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 285,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1066:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "933166e1",
              "id": 290,
              "mutability": "mutable",
              "name": "creators",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "1091:40:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 289,
                "keyType": {
                  "id": 287,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1099:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1091:24:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 288,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1110:4:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "40c1a064",
              "id": 294,
              "mutability": "mutable",
              "name": "tokenCreator",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "1135:47:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "typeName": {
                "id": 293,
                "keyType": {
                  "id": 291,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1143:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1135:27:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "valueType": {
                  "id": 292,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1154:7:6",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "c87b56dd",
              "id": 298,
              "mutability": "mutable",
              "name": "tokenURI",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "1186:42:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "typeName": {
                "id": 297,
                "keyType": {
                  "id": 295,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1194:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1186:26:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                  "typeString": "mapping(uint256 => string)"
                },
                "valueType": {
                  "id": 296,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1205:6:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 309,
                "nodeType": "Block",
                "src": "1256:72:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 301,
                            "name": "creators",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 290,
                            "src": "1270:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 304,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 302,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1279:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 303,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1279:10:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1270:20:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "596f7520617265206e6f7420612063726561746f72",
                          "id": 305,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1292:23:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_601f78aed3d933ffb60d4c59686f112c253d4f91e11ad4ef6a4a48af716a5dde",
                            "typeString": "literal_string \"You are not a creator\""
                          },
                          "value": "You are not a creator"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_601f78aed3d933ffb60d4c59686f112c253d4f91e11ad4ef6a4a48af716a5dde",
                            "typeString": "literal_string \"You are not a creator\""
                          }
                        ],
                        "id": 300,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "1262:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 306,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1262:54:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 307,
                    "nodeType": "ExpressionStatement",
                    "src": "1262:54:6"
                  },
                  {
                    "id": 308,
                    "nodeType": "PlaceholderStatement",
                    "src": "1322:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 310,
              "name": "creatorOnly",
              "nodeType": "ModifierDefinition",
              "overrides": null,
              "parameters": {
                "id": 299,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1253:2:6"
              },
              "src": "1233:95:6",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 325,
                "nodeType": "Block",
                "src": "1371:109:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 320,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 315,
                              "name": "tokenCreator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 294,
                              "src": "1385:12:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                              }
                            },
                            "id": 317,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 316,
                              "name": "_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 312,
                              "src": "1398:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1385:17:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 318,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1406:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 319,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1406:10:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "1385:31:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4f6e6c792074686520746f6b656e2063726561746f722063616e2061636365737320746869732066756e6374696f6e",
                          "id": 321,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1418:49:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c11ac9fa49d85882e5620c34a44d794dd8701543033b6415cb4fc851fec3ade4",
                            "typeString": "literal_string \"Only the token creator can access this function\""
                          },
                          "value": "Only the token creator can access this function"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_c11ac9fa49d85882e5620c34a44d794dd8701543033b6415cb4fc851fec3ade4",
                            "typeString": "literal_string \"Only the token creator can access this function\""
                          }
                        ],
                        "id": 314,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "1377:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 322,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1377:91:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 323,
                    "nodeType": "ExpressionStatement",
                    "src": "1377:91:6"
                  },
                  {
                    "id": 324,
                    "nodeType": "PlaceholderStatement",
                    "src": "1474:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 326,
              "name": "tokenCreatorOnly",
              "nodeType": "ModifierDefinition",
              "overrides": null,
              "parameters": {
                "id": 313,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 312,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 326,
                    "src": "1358:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 311,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1358:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1357:13:6"
              },
              "src": "1332:148:6",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 339,
                "nodeType": "Block",
                "src": "1505:57:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 332,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 329,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 983,
                        "src": "1511:5:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 330,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1519:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 331,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1519:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "1511:18:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 333,
                    "nodeType": "ExpressionStatement",
                    "src": "1511:18:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 335,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1546:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1546:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "id": 334,
                        "name": "addCreator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 354,
                        "src": "1535:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 337,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1535:22:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 338,
                    "nodeType": "ExpressionStatement",
                    "src": "1535:22:6"
                  }
                ]
              },
              "documentation": null,
              "id": 340,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 327,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1495:2:6"
              },
              "returnParameters": {
                "id": 328,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1505:0:6"
              },
              "scope": 942,
              "src": "1484:78:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 353,
                "nodeType": "Block",
                "src": "1621:36:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 351,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 347,
                          "name": "creators",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 290,
                          "src": "1627:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 349,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 348,
                          "name": "_address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 342,
                          "src": "1636:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1627:18:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 350,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1648:4:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "1627:25:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 352,
                    "nodeType": "ExpressionStatement",
                    "src": "1627:25:6"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "3b9dce05",
              "id": 354,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 345,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 344,
                    "name": "ownerOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1004,
                    "src": "1611:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1611:9:6"
                }
              ],
              "name": "addCreator",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 343,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 342,
                    "mutability": "mutable",
                    "name": "_address",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 354,
                    "src": "1586:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 341,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1586:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1585:18:6"
              },
              "returnParameters": {
                "id": 346,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1621:0:6"
              },
              "scope": 942,
              "src": "1566:91:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 367,
                "nodeType": "Block",
                "src": "1721:37:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 365,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 361,
                          "name": "creators",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 290,
                          "src": "1727:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 363,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 362,
                          "name": "_address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 356,
                          "src": "1736:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1727:18:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1748:5:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      "src": "1727:26:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 366,
                    "nodeType": "ExpressionStatement",
                    "src": "1727:26:6"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "bd6018bb",
              "id": 368,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 359,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 358,
                    "name": "ownerOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1004,
                    "src": "1711:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1711:9:6"
                }
              ],
              "name": "removeCreator",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 357,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 356,
                    "mutability": "mutable",
                    "name": "_address",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 368,
                    "src": "1684:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 355,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1684:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1683:18:6"
              },
              "returnParameters": {
                "id": 360,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1721:0:6"
              },
              "scope": 942,
              "src": "1661:97:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 424,
                "nodeType": "Block",
                "src": "1862:287:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 382,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 379,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 377,
                        "src": "1869:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 381,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": true,
                        "src": "1875:7:6",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 380,
                          "name": "nonce",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 286,
                          "src": "1877:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1869:13:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 383,
                    "nodeType": "ExpressionStatement",
                    "src": "1869:13:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 389,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 384,
                          "name": "tokenCreator",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 294,
                          "src": "1888:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 386,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 385,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 377,
                          "src": "1901:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1888:17:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 387,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1908:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1908:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "1888:30:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 390,
                    "nodeType": "ExpressionStatement",
                    "src": "1888:30:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 398,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 391,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 243,
                            "src": "1924:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(uint256 => mapping(address => uint256))"
                            }
                          },
                          "id": 395,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 392,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 377,
                            "src": "1933:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1924:13:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 396,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 393,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1938:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 394,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1938:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1924:25:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 397,
                        "name": "_initialSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 370,
                        "src": "1952:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1924:42:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 399,
                    "nodeType": "ExpressionStatement",
                    "src": "1924:42:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 404,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 400,
                          "name": "tokenURI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 298,
                          "src": "1972:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                            "typeString": "mapping(uint256 => string storage ref)"
                          }
                        },
                        "id": 402,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 401,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 377,
                          "src": "1981:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1972:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 403,
                        "name": "_uri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 372,
                        "src": "1988:4:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "1972:20:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 405,
                    "nodeType": "ExpressionStatement",
                    "src": "1972:20:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 407,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2060:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 408,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2060:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 411,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2080:3:6",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2072:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 409,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2072:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 412,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2072:12:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 413,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2086:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 414,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2086:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 415,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 377,
                          "src": "2098:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 416,
                          "name": "_initialSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 370,
                          "src": "2103:14:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 406,
                        "name": "TransferSingle",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59,
                        "src": "2045:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,address,uint256,uint256)"
                        }
                      },
                      "id": 417,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2045:73:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 418,
                    "nodeType": "EmitStatement",
                    "src": "2040:78:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 420,
                          "name": "_uri",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 372,
                          "src": "2134:4:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 421,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 377,
                          "src": "2140:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 419,
                        "name": "URI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "2130:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                          "typeString": "function (string memory,uint256)"
                        }
                      },
                      "id": 422,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2130:14:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 423,
                    "nodeType": "EmitStatement",
                    "src": "2125:19:6"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "0118fa49",
              "id": 425,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 375,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 374,
                    "name": "creatorOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 310,
                    "src": "1829:11:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1829:11:6"
                }
              ],
              "name": "create",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 373,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 370,
                    "mutability": "mutable",
                    "name": "_initialSupply",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 425,
                    "src": "1778:22:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 369,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1778:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 372,
                    "mutability": "mutable",
                    "name": "_uri",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 425,
                    "src": "1802:18:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 371,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1802:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1777:44:6"
              },
              "returnParameters": {
                "id": 378,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 377,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 425,
                    "src": "1849:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 376,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1849:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1848:13:6"
              },
              "scope": 942,
              "src": "1762:387:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 472,
                "nodeType": "Block",
                "src": "2272:215:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 441,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2302:1:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 435,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 243,
                              "src": "2279:8:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(uint256 => mapping(address => uint256))"
                              }
                            },
                            "id": 438,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 436,
                              "name": "_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 427,
                              "src": "2288:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2279:13:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 439,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 437,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 429,
                            "src": "2293:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2279:18:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 440,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1115,
                        "src": "2279:22:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 442,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2279:25:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 443,
                    "nodeType": "ExpressionStatement",
                    "src": "2279:25:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 445,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2330:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 446,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2330:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 449,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2350:3:6",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 448,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2342:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 447,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2342:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 450,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2342:12:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 451,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 429,
                          "src": "2356:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 452,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 427,
                          "src": "2361:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 453,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2366:1:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "id": 444,
                        "name": "TransferSingle",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59,
                        "src": "2315:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,address,uint256,uint256)"
                        }
                      },
                      "id": 454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2315:53:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 455,
                    "nodeType": "EmitStatement",
                    "src": "2310:58:6"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 456,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 429,
                          "src": "2379:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 457,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 19,
                        "src": "2379:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$bound_to$_t_address_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 458,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2379:16:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 471,
                    "nodeType": "IfStatement",
                    "src": "2375:108:6",
                    "trueBody": {
                      "id": 470,
                      "nodeType": "Block",
                      "src": "2397:86:6",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 460,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "2436:3:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 461,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2436:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 462,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "2448:3:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 463,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2448:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 464,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 429,
                                "src": "2460:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 465,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 427,
                                "src": "2465:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 466,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2470:1:6",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "",
                                "id": 467,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2473:2:6",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                  "typeString": "literal_string \"\""
                                },
                                "value": ""
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                  "typeString": "literal_string \"\""
                                }
                              ],
                              "id": 459,
                              "name": "_doSafeTransferAcceptanceCheck",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 907,
                              "src": "2405:30:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                                "typeString": "function (address,address,address,uint256,uint256,bytes memory)"
                              }
                            },
                            "id": 468,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2405:71:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 469,
                          "nodeType": "ExpressionStatement",
                          "src": "2405:71:6"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "94bf804d",
              "id": 473,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "id": 432,
                      "name": "_id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 427,
                      "src": "2267:3:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  ],
                  "id": 433,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 431,
                    "name": "tokenCreatorOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 326,
                    "src": "2250:16:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$_t_uint256_$",
                      "typeString": "modifier (uint256)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2250:21:6"
                }
              ],
              "name": "mint",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 430,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 427,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 473,
                    "src": "2217:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 426,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2217:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 429,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 473,
                    "src": "2230:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 428,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2230:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2216:26:6"
              },
              "returnParameters": {
                "id": 434,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2272:0:6"
              },
              "scope": 942,
              "src": "2203:284:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 494,
                "nodeType": "Block",
                "src": "2572:56:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 487,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 483,
                          "name": "tokenURI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 298,
                          "src": "2578:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                            "typeString": "mapping(uint256 => string storage ref)"
                          }
                        },
                        "id": 485,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 484,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 477,
                          "src": "2587:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2578:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 486,
                        "name": "_uri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 475,
                        "src": "2594:4:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "2578:20:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 488,
                    "nodeType": "ExpressionStatement",
                    "src": "2578:20:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 490,
                          "name": "_uri",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 475,
                          "src": "2613:4:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 491,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 477,
                          "src": "2619:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 489,
                        "name": "URI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "2609:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                          "typeString": "function (string memory,uint256)"
                        }
                      },
                      "id": 492,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2609:14:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 493,
                    "nodeType": "EmitStatement",
                    "src": "2604:19:6"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "5ed12364",
              "id": 495,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "id": 480,
                      "name": "_id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 477,
                      "src": "2567:3:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  ],
                  "id": 481,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 479,
                    "name": "tokenCreatorOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 326,
                    "src": "2550:16:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$_t_uint256_$",
                      "typeString": "modifier (uint256)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2550:21:6"
                }
              ],
              "name": "updateUri",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 478,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 475,
                    "mutability": "mutable",
                    "name": "_uri",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 495,
                    "src": "2510:18:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 474,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2510:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 477,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 495,
                    "src": "2530:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 476,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2530:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2509:33:6"
              },
              "returnParameters": {
                "id": 482,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2572:0:6"
              },
              "scope": 942,
              "src": "2491:137:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "baseFunctions": [
                173
              ],
              "body": {
                "id": 513,
                "nodeType": "Block",
                "src": "2707:61:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 507,
                                "name": "tokenURI",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 298,
                                "src": "2744:8:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                  "typeString": "mapping(uint256 => string storage ref)"
                                }
                              },
                              "id": 509,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 508,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 497,
                                "src": "2753:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2744:17:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage",
                                "typeString": "string storage ref"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_storage",
                                "typeString": "string storage ref"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 505,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2727:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 506,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2727:16:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 510,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2727:35:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 504,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2720:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                          "typeString": "type(string storage pointer)"
                        },
                        "typeName": {
                          "id": 503,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "2720:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                          }
                        }
                      },
                      "id": 511,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2720:43:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "functionReturnParameters": 502,
                    "id": 512,
                    "nodeType": "Return",
                    "src": "2713:50:6"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "0e89341c",
              "id": 514,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "uri",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 499,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "2674:8:6"
              },
              "parameters": {
                "id": 498,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 497,
                    "mutability": "mutable",
                    "name": "tokenId",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 514,
                    "src": "2645:15:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 496,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2645:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2644:17:6"
              },
              "returnParameters": {
                "id": 502,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 501,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 514,
                    "src": "2692:13:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 500,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2692:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2691:15:6"
              },
              "scope": 942,
              "src": "2632:136:6",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "baseFunctions": [
                104
              ],
              "body": {
                "id": 612,
                "nodeType": "Block",
                "src": "4113:757:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 537,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 532,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 519,
                            "src": "4128:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "307830",
                                "id": 535,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4143:3:6",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0x0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 534,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4135:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 533,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4135:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 536,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4135:12:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "4128:19:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "5f746f206d757374206265206e6f6e2d7a65726f2e",
                          "id": 538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4149:23:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_f0ab27c7656312f7e42f97895baa9fbdc438c4b74c263007cccc2cd44408ee3f",
                            "typeString": "literal_string \"_to must be non-zero.\""
                          },
                          "value": "_to must be non-zero."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_f0ab27c7656312f7e42f97895baa9fbdc438c4b74c263007cccc2cd44408ee3f",
                            "typeString": "literal_string \"_to must be non-zero.\""
                          }
                        ],
                        "id": 531,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "4120:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 539,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4120:53:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 540,
                    "nodeType": "ExpressionStatement",
                    "src": "4120:53:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 554,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 545,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 542,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 517,
                              "src": "4187:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 543,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "4196:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 544,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4196:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "4187:19:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 553,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 546,
                                  "name": "operatorApproval",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 249,
                                  "src": "4210:16:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                    "typeString": "mapping(address => mapping(address => bool))"
                                  }
                                },
                                "id": 548,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 547,
                                  "name": "_from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 517,
                                  "src": "4227:5:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "4210:23:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                  "typeString": "mapping(address => bool)"
                                }
                              },
                              "id": 551,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 549,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "4234:3:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 550,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "4234:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4210:35:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "74727565",
                              "id": 552,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4249:4:6",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            },
                            "src": "4210:43:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "4187:66:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4e656564206f70657261746f7220617070726f76616c20666f7220337264207061727479207472616e73666572732e",
                          "id": 555,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4255:49:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_849b4236b9cc0954dc0e729ab0ed3552779085d502d2b1dad4e899fd8211d4be",
                            "typeString": "literal_string \"Need operator approval for 3rd party transfers.\""
                          },
                          "value": "Need operator approval for 3rd party transfers."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_849b4236b9cc0954dc0e729ab0ed3552779085d502d2b1dad4e899fd8211d4be",
                            "typeString": "literal_string \"Need operator approval for 3rd party transfers.\""
                          }
                        ],
                        "id": 541,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "4179:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 556,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4179:126:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 557,
                    "nodeType": "ExpressionStatement",
                    "src": "4179:126:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 571,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 558,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 243,
                            "src": "4418:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(uint256 => mapping(address => uint256))"
                            }
                          },
                          "id": 561,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 559,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 521,
                            "src": "4427:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4418:13:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 562,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 560,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 517,
                          "src": "4432:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4418:20:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 569,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 523,
                            "src": "4466:6:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 563,
                                "name": "balances",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 243,
                                "src": "4441:8:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(uint256 => mapping(address => uint256))"
                                }
                              },
                              "id": 565,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 564,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 521,
                                "src": "4450:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4441:13:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 567,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 566,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 517,
                              "src": "4455:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4441:20:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 568,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sub",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1090,
                          "src": "4441:24:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 570,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4441:32:6",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4418:55:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 572,
                    "nodeType": "ExpressionStatement",
                    "src": "4418:55:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 586,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 573,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 243,
                            "src": "4479:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(uint256 => mapping(address => uint256))"
                            }
                          },
                          "id": 576,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 574,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 521,
                            "src": "4488:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4479:13:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 577,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 575,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 519,
                          "src": "4493:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4479:18:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 580,
                                "name": "balances",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 243,
                                "src": "4513:8:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(uint256 => mapping(address => uint256))"
                                }
                              },
                              "id": 582,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 581,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 521,
                                "src": "4522:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4513:13:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 584,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 583,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 519,
                              "src": "4527:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4513:18:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 578,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 523,
                            "src": "4502:6:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 579,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "add",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1115,
                          "src": "4502:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 585,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4502:30:6",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4479:53:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 587,
                    "nodeType": "ExpressionStatement",
                    "src": "4479:53:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 589,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "4582:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 590,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4582:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 591,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 517,
                          "src": "4594:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 592,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 519,
                          "src": "4601:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 593,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 521,
                          "src": "4606:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 594,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 523,
                          "src": "4611:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 588,
                        "name": "TransferSingle",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59,
                        "src": "4567:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,address,uint256,uint256)"
                        }
                      },
                      "id": 595,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4567:51:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 596,
                    "nodeType": "EmitStatement",
                    "src": "4562:56:6"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 597,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 519,
                          "src": "4759:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 598,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 19,
                        "src": "4759:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$bound_to$_t_address_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 599,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4759:16:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 611,
                    "nodeType": "IfStatement",
                    "src": "4755:111:6",
                    "trueBody": {
                      "id": 610,
                      "nodeType": "Block",
                      "src": "4777:89:6",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 601,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "4816:3:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 602,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "4816:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 603,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 517,
                                "src": "4828:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 604,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 519,
                                "src": "4835:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 605,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 521,
                                "src": "4840:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 606,
                                "name": "_value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 523,
                                "src": "4845:6:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 607,
                                "name": "_data",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 525,
                                "src": "4853:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                }
                              ],
                              "id": 600,
                              "name": "_doSafeTransferAcceptanceCheck",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 907,
                              "src": "4785:30:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                                "typeString": "function (address,address,address,uint256,uint256,bytes memory)"
                              }
                            },
                            "id": 608,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4785:74:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 609,
                          "nodeType": "ExpressionStatement",
                          "src": "4785:74:6"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": {
                "id": 515,
                "nodeType": "StructuredDocumentation",
                "src": "2874:1103:6",
                "text": "@notice Transfers `_value` amount of an `_id` from the `_from` address to the `_to` address specified (with safety call).\n@dev Caller must be approved to manage the tokens being transferred out of the `_from` account (see \"Approval\" section of the standard).\nMUST revert if `_to` is the zero address.\nMUST revert if balance of holder for token `_id` is lower than the `_value` sent.\nMUST revert on any other error.\nMUST emit the `TransferSingle` event to reflect the balance change (see \"Safe Transfer Rules\" section of the standard).\nAfter the above conditions are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call `onERC1155Received` on `_to` and act appropriately (see \"Safe Transfer Rules\" section of the standard).\n@param _from    Source address\n@param _to      Target address\n@param _id      ID of the token type\n@param _value   Transfer amount\n@param _data    Additional data with no specified format, MUST be sent unaltered in call to `onERC1155Received` on `_to`"
              },
              "functionSelector": "f242432a",
              "id": 613,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 529,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 528,
                    "name": "ownerOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1004,
                    "src": "4103:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "4103:9:6"
                }
              ],
              "name": "safeTransferFrom",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 527,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "4094:8:6"
              },
              "parameters": {
                "id": 526,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 517,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 613,
                    "src": "4006:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 516,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4006:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 519,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 613,
                    "src": "4021:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 518,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4021:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 521,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 613,
                    "src": "4034:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 520,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4034:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 523,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 613,
                    "src": "4047:14:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 522,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4047:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 525,
                    "mutability": "mutable",
                    "name": "_data",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 613,
                    "src": "4063:20:6",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 524,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "4063:5:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4005:79:6"
              },
              "returnParameters": {
                "id": 530,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4113:0:6"
              },
              "scope": 942,
              "src": "3980:890:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "baseFunctions": [
                120
              ],
              "body": {
                "id": 747,
                "nodeType": "Block",
                "src": "6628:1517:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 638,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 633,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 618,
                            "src": "6671:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "307830",
                                "id": 636,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6686:3:6",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0x0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 635,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "6678:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 634,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "6678:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 637,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6678:12:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "6671:19:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "64657374696e6174696f6e2061646472657373206d757374206265206e6f6e2d7a65726f2e",
                          "id": 639,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6692:39:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_62feaa226fe2bab79230d856b8132c73f9553fb9f97b507f32473583a3bdc412",
                            "typeString": "literal_string \"destination address must be non-zero.\""
                          },
                          "value": "destination address must be non-zero."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_62feaa226fe2bab79230d856b8132c73f9553fb9f97b507f32473583a3bdc412",
                            "typeString": "literal_string \"destination address must be non-zero.\""
                          }
                        ],
                        "id": 632,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "6663:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 640,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6663:69:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 641,
                    "nodeType": "ExpressionStatement",
                    "src": "6663:69:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 647,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 643,
                              "name": "_ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 621,
                              "src": "6746:4:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                "typeString": "uint256[] calldata"
                              }
                            },
                            "id": 644,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "6746:11:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 645,
                              "name": "_values",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 624,
                              "src": "6761:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                "typeString": "uint256[] calldata"
                              }
                            },
                            "id": 646,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "6761:14:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6746:29:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "5f69647320616e64205f76616c756573206172726179206c656e676874206d757374206d617463682e",
                          "id": 648,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6777:43:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e247f475611b62bc866bf3255b9401b9150f6ea46ea41b1bd81bcf27fac5913f",
                            "typeString": "literal_string \"_ids and _values array lenght must match.\""
                          },
                          "value": "_ids and _values array lenght must match."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_e247f475611b62bc866bf3255b9401b9150f6ea46ea41b1bd81bcf27fac5913f",
                            "typeString": "literal_string \"_ids and _values array lenght must match.\""
                          }
                        ],
                        "id": 642,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "6738:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 649,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6738:83:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 650,
                    "nodeType": "ExpressionStatement",
                    "src": "6738:83:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 664,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 655,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 652,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 616,
                              "src": "6835:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 653,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "6844:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 654,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "6844:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "6835:19:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 663,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 656,
                                  "name": "operatorApproval",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 249,
                                  "src": "6858:16:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                    "typeString": "mapping(address => mapping(address => bool))"
                                  }
                                },
                                "id": 658,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 657,
                                  "name": "_from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 616,
                                  "src": "6875:5:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "6858:23:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                  "typeString": "mapping(address => bool)"
                                }
                              },
                              "id": 661,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 659,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "6882:3:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 660,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "6882:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "6858:35:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "74727565",
                              "id": 662,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6897:4:6",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            },
                            "src": "6858:43:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "6835:66:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4e656564206f70657261746f7220617070726f76616c20666f7220337264207061727479207472616e73666572732e",
                          "id": 665,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6903:49:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_849b4236b9cc0954dc0e729ab0ed3552779085d502d2b1dad4e899fd8211d4be",
                            "typeString": "literal_string \"Need operator approval for 3rd party transfers.\""
                          },
                          "value": "Need operator approval for 3rd party transfers."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_849b4236b9cc0954dc0e729ab0ed3552779085d502d2b1dad4e899fd8211d4be",
                            "typeString": "literal_string \"Need operator approval for 3rd party transfers.\""
                          }
                        ],
                        "id": 651,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "6827:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 666,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6827:126:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 667,
                    "nodeType": "ExpressionStatement",
                    "src": "6827:126:6"
                  },
                  {
                    "body": {
                      "id": 721,
                      "nodeType": "Block",
                      "src": "7002:298:6",
                      "statements": [
                        {
                          "assignments": [
                            680
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 680,
                              "mutability": "mutable",
                              "name": "id",
                              "nodeType": "VariableDeclaration",
                              "overrides": null,
                              "scope": 721,
                              "src": "7010:10:6",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 679,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "7010:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 684,
                          "initialValue": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 681,
                              "name": "_ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 621,
                              "src": "7023:4:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                "typeString": "uint256[] calldata"
                              }
                            },
                            "id": 683,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 682,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 669,
                              "src": "7028:1:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "7023:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "7010:20:6"
                        },
                        {
                          "assignments": [
                            686
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 686,
                              "mutability": "mutable",
                              "name": "value",
                              "nodeType": "VariableDeclaration",
                              "overrides": null,
                              "scope": 721,
                              "src": "7038:13:6",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 685,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "7038:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 690,
                          "initialValue": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 687,
                              "name": "_values",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 624,
                              "src": "7054:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                "typeString": "uint256[] calldata"
                              }
                            },
                            "id": 689,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 688,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 669,
                              "src": "7062:1:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "7054:10:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "7038:26:6"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 704,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 691,
                                  "name": "balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 243,
                                  "src": "7183:8:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(uint256 => mapping(address => uint256))"
                                  }
                                },
                                "id": 694,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 692,
                                  "name": "id",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 680,
                                  "src": "7192:2:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "7183:12:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 695,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 693,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 616,
                                "src": "7196:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "7183:19:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 702,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 686,
                                  "src": "7229:5:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 696,
                                      "name": "balances",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 243,
                                      "src": "7205:8:6",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                        "typeString": "mapping(uint256 => mapping(address => uint256))"
                                      }
                                    },
                                    "id": 698,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 697,
                                      "name": "id",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 680,
                                      "src": "7214:2:6",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "7205:12:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 700,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 699,
                                    "name": "_from",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 616,
                                    "src": "7218:5:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "7205:19:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 701,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sub",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 1090,
                                "src": "7205:23:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 703,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7205:30:6",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7183:52:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 705,
                          "nodeType": "ExpressionStatement",
                          "src": "7183:52:6"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 719,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 706,
                                  "name": "balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 243,
                                  "src": "7243:8:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(uint256 => mapping(address => uint256))"
                                  }
                                },
                                "id": 709,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 707,
                                  "name": "id",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 680,
                                  "src": "7252:2:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "7243:12:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 710,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 708,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 618,
                                "src": "7256:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "7243:17:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 713,
                                      "name": "balances",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 243,
                                      "src": "7275:8:6",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                        "typeString": "mapping(uint256 => mapping(address => uint256))"
                                      }
                                    },
                                    "id": 715,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 714,
                                      "name": "id",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 680,
                                      "src": "7284:2:6",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "7275:12:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 717,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 716,
                                    "name": "_to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 618,
                                    "src": "7288:3:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "7275:17:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 711,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 686,
                                  "src": "7265:5:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 712,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 1115,
                                "src": "7265:9:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 718,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7265:28:6",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7243:50:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 720,
                          "nodeType": "ExpressionStatement",
                          "src": "7243:50:6"
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 675,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 672,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 669,
                        "src": "6980:1:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 673,
                          "name": "_ids",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 621,
                          "src": "6984:4:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          }
                        },
                        "id": 674,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "6984:11:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6980:15:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 722,
                    "initializationExpression": {
                      "assignments": [
                        669
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 669,
                          "mutability": "mutable",
                          "name": "i",
                          "nodeType": "VariableDeclaration",
                          "overrides": null,
                          "scope": 722,
                          "src": "6965:9:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 668,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6965:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 671,
                      "initialValue": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 670,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6977:1:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "6965:13:6"
                    },
                    "loopExpression": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 677,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": true,
                        "src": "6997:3:6",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 676,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 669,
                          "src": "6999:1:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 678,
                      "nodeType": "ExpressionStatement",
                      "src": "6997:3:6"
                    },
                    "nodeType": "ForStatement",
                    "src": "6960:340:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 724,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "7840:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 725,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "7840:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 726,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 616,
                          "src": "7852:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 727,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 618,
                          "src": "7859:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 728,
                          "name": "_ids",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 621,
                          "src": "7864:4:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 729,
                          "name": "_values",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 624,
                          "src": "7870:7:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          },
                          {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          }
                        ],
                        "id": 723,
                        "name": "TransferBatch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "7826:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                          "typeString": "function (address,address,address,uint256[] memory,uint256[] memory)"
                        }
                      },
                      "id": 730,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7826:52:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 731,
                    "nodeType": "EmitStatement",
                    "src": "7821:57:6"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 732,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 618,
                          "src": "8027:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 733,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 19,
                        "src": "8027:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$bound_to$_t_address_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 734,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8027:16:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 746,
                    "nodeType": "IfStatement",
                    "src": "8023:118:6",
                    "trueBody": {
                      "id": 745,
                      "nodeType": "Block",
                      "src": "8045:96:6",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 736,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "8089:3:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 737,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "8089:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 738,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 616,
                                "src": "8101:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 739,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 618,
                                "src": "8108:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 740,
                                "name": "_ids",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 621,
                                "src": "8113:4:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 741,
                                "name": "_values",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 624,
                                "src": "8119:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 742,
                                "name": "_data",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 626,
                                "src": "8128:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                }
                              ],
                              "id": 735,
                              "name": "_doSafeBatchTransferAcceptanceCheck",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 941,
                              "src": "8053:35:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                                "typeString": "function (address,address,address,uint256[] memory,uint256[] memory,bytes memory)"
                              }
                            },
                            "id": 743,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8053:81:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 744,
                          "nodeType": "ExpressionStatement",
                          "src": "8053:81:6"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": {
                "id": 614,
                "nodeType": "StructuredDocumentation",
                "src": "4874:1589:6",
                "text": "@notice Transfers `_values` amount(s) of `_ids` from the `_from` address to the `_to` address specified (with safety call).\n@dev Caller must be approved to manage the tokens being transferred out of the `_from` account (see \"Approval\" section of the standard).\nMUST revert if `_to` is the zero address.\nMUST revert if length of `_ids` is not the same as length of `_values`.\nMUST revert if any of the balance(s) of the holder(s) for token(s) in `_ids` is lower than the respective amount(s) in `_values` sent to the recipient.\nMUST revert on any other error.\nMUST emit `TransferSingle` or `TransferBatch` event(s) such that all the balance changes are reflected (see \"Safe Transfer Rules\" section of the standard).\nBalance changes and events MUST follow the ordering of the arrays (_ids[0]/_values[0] before _ids[1]/_values[1], etc).\nAfter the above conditions for the transfer(s) in the batch are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call the relevant `ERC1155TokenReceiver` hook(s) on `_to` and act appropriately (see \"Safe Transfer Rules\" section of the standard).\n@param _from    Source address\n@param _to      Target address\n@param _ids     IDs of each token type (order and length must match _values array)\n@param _values  Transfer amounts per token type (order and length must match _ids array)\n@param _data    Additional data with no specified format, MUST be sent unaltered in call to the `ERC1155TokenReceiver` hook(s) on `_to`"
              },
              "functionSelector": "2eb2c2d6",
              "id": 748,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 630,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 629,
                    "name": "ownerOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1004,
                    "src": "6618:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "6618:9:6"
                }
              ],
              "name": "safeBatchTransferFrom",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 628,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "6609:8:6"
              },
              "parameters": {
                "id": 627,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 616,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 748,
                    "src": "6497:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 615,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "6497:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 618,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 748,
                    "src": "6512:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 617,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "6512:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 621,
                    "mutability": "mutable",
                    "name": "_ids",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 748,
                    "src": "6525:23:6",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 619,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6525:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 620,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "6525:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 624,
                    "mutability": "mutable",
                    "name": "_values",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 748,
                    "src": "6550:26:6",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 622,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6550:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 623,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "6550:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 626,
                    "mutability": "mutable",
                    "name": "_data",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 748,
                    "src": "6578:20:6",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 625,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "6578:5:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "6496:103:6"
              },
              "returnParameters": {
                "id": 631,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "6628:0:6"
              },
              "scope": 942,
              "src": "6466:1679:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "baseFunctions": [
                130
              ],
              "body": {
                "id": 765,
                "nodeType": "Block",
                "src": "8464:271:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 759,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 243,
                          "src": "8709:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                          }
                        },
                        "id": 761,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 760,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 753,
                          "src": "8718:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "8709:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 763,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 762,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 751,
                        "src": "8723:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "8709:21:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 758,
                    "id": 764,
                    "nodeType": "Return",
                    "src": "8702:28:6"
                  }
                ]
              },
              "documentation": {
                "id": 749,
                "nodeType": "StructuredDocumentation",
                "src": "8149:223:6",
                "text": "@notice Get the balance of an account's Tokens.\n@param _owner  The address of the token holder\n@param _id     ID of the Token\n@return        The _owner's balance of the Token type requested"
              },
              "functionSelector": "00fdd58e",
              "id": 766,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 755,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "8437:8:6"
              },
              "parameters": {
                "id": 754,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 751,
                    "mutability": "mutable",
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 766,
                    "src": "8394:14:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 750,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "8394:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 753,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 766,
                    "src": "8410:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 752,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8410:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "8393:29:6"
              },
              "returnParameters": {
                "id": 758,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 757,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 766,
                    "src": "8455:7:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 756,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8455:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "8454:9:6"
              },
              "scope": 942,
              "src": "8375:360:6",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "baseFunctions": [
                143
              ],
              "body": {
                "id": 829,
                "nodeType": "Block",
                "src": "9146:248:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 785,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 781,
                              "name": "_owners",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 770,
                              "src": "9161:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                "typeString": "address[] calldata"
                              }
                            },
                            "id": 782,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "9161:14:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 783,
                              "name": "_ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 773,
                              "src": "9179:4:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                "typeString": "uint256[] calldata"
                              }
                            },
                            "id": 784,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "9179:11:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9161:29:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 780,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "9153:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 786,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9153:38:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 787,
                    "nodeType": "ExpressionStatement",
                    "src": "9153:38:6"
                  },
                  {
                    "assignments": [
                      792
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 792,
                        "mutability": "mutable",
                        "name": "balances_",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 829,
                        "src": "9198:26:6",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[]"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 790,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9198:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 791,
                          "length": null,
                          "nodeType": "ArrayTypeName",
                          "src": "9198:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                            "typeString": "uint256[]"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 799,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 796,
                            "name": "_owners",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 770,
                            "src": "9241:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                              "typeString": "address[] calldata"
                            }
                          },
                          "id": 797,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "9241:14:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 795,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "9227:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (uint256[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 793,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9231:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 794,
                          "length": null,
                          "nodeType": "ArrayTypeName",
                          "src": "9231:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                            "typeString": "uint256[]"
                          }
                        }
                      },
                      "id": 798,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9227:29:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "9198:58:6"
                  },
                  {
                    "body": {
                      "id": 825,
                      "nodeType": "Block",
                      "src": "9308:59:6",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 823,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 811,
                                "name": "balances_",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 792,
                                "src": "9316:9:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 813,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 812,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 801,
                                "src": "9326:1:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "9316:12:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 814,
                                  "name": "balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 243,
                                  "src": "9331:8:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(uint256 => mapping(address => uint256))"
                                  }
                                },
                                "id": 818,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 815,
                                    "name": "_ids",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 773,
                                    "src": "9340:4:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                      "typeString": "uint256[] calldata"
                                    }
                                  },
                                  "id": 817,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 816,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 801,
                                    "src": "9345:1:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "9340:7:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "9331:17:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 822,
                              "indexExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 819,
                                  "name": "_owners",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 770,
                                  "src": "9349:7:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                    "typeString": "address[] calldata"
                                  }
                                },
                                "id": 821,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 820,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 801,
                                  "src": "9357:1:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "9349:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "9331:29:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "9316:44:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 824,
                          "nodeType": "ExpressionStatement",
                          "src": "9316:44:6"
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 807,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 804,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 801,
                        "src": "9283:1:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 805,
                          "name": "_owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 770,
                          "src": "9287:7:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                            "typeString": "address[] calldata"
                          }
                        },
                        "id": 806,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "9287:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "9283:18:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 826,
                    "initializationExpression": {
                      "assignments": [
                        801
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 801,
                          "mutability": "mutable",
                          "name": "i",
                          "nodeType": "VariableDeclaration",
                          "overrides": null,
                          "scope": 826,
                          "src": "9268:9:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 800,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9268:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 803,
                      "initialValue": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 802,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9280:1:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "9268:13:6"
                    },
                    "loopExpression": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 809,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": true,
                        "src": "9303:3:6",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 808,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 801,
                          "src": "9305:1:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 810,
                      "nodeType": "ExpressionStatement",
                      "src": "9303:3:6"
                    },
                    "nodeType": "ForStatement",
                    "src": "9263:104:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 827,
                      "name": "balances_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 792,
                      "src": "9380:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "functionReturnParameters": 779,
                    "id": 828,
                    "nodeType": "Return",
                    "src": "9373:16:6"
                  }
                ]
              },
              "documentation": {
                "id": 767,
                "nodeType": "StructuredDocumentation",
                "src": "8739:277:6",
                "text": "@notice Get the balance of multiple account/token pairs\n@param _owners The addresses of the token holders\n@param _ids    ID of the Tokens\n@return        The _owner's balance of the Token types requested (i.e. balance for each (owner, id) pair)"
              },
              "functionSelector": "4e1273f4",
              "id": 830,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOfBatch",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 775,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "9110:8:6"
              },
              "parameters": {
                "id": 774,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 770,
                    "mutability": "mutable",
                    "name": "_owners",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 830,
                    "src": "9043:26:6",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                      "typeString": "address[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 768,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "9043:7:6",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 769,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "9043:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                        "typeString": "address[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 773,
                    "mutability": "mutable",
                    "name": "_ids",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 830,
                    "src": "9071:23:6",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 771,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9071:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 772,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "9071:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "9042:53:6"
              },
              "returnParameters": {
                "id": 779,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 778,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 830,
                    "src": "9128:16:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 776,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9128:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 777,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "9128:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "9127:18:6"
              },
              "scope": 942,
              "src": "9019:375:6",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "baseFunctions": [
                151
              ],
              "body": {
                "id": 855,
                "nodeType": "Block",
                "src": "9814:121:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 846,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 839,
                            "name": "operatorApproval",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 249,
                            "src": "9820:16:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                              "typeString": "mapping(address => mapping(address => bool))"
                            }
                          },
                          "id": 843,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 840,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "9837:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 841,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "9837:10:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "9820:28:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 844,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 842,
                          "name": "_operator",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 833,
                          "src": "9849:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "9820:39:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 845,
                        "name": "_approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 835,
                        "src": "9862:9:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "9820:51:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 847,
                    "nodeType": "ExpressionStatement",
                    "src": "9820:51:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 849,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "9897:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 850,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "9897:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 851,
                          "name": "_operator",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 833,
                          "src": "9909:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 852,
                          "name": "_approved",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 835,
                          "src": "9920:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 848,
                        "name": "ApprovalForAll",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 83,
                        "src": "9882:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                          "typeString": "function (address,address,bool)"
                        }
                      },
                      "id": 853,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9882:48:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 854,
                    "nodeType": "EmitStatement",
                    "src": "9877:53:6"
                  }
                ]
              },
              "documentation": {
                "id": 831,
                "nodeType": "StructuredDocumentation",
                "src": "9398:333:6",
                "text": "@notice Enable or disable approval for a third party (\"operator\") to manage all of the caller's tokens.\n@dev MUST emit the ApprovalForAll event on success.\n@param _operator  Address to add to the set of authorized operators\n@param _approved  True if the operator is approved, false to revoke approval"
              },
              "functionSelector": "a22cb465",
              "id": 856,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "setApprovalForAll",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 837,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "9805:8:6"
              },
              "parameters": {
                "id": 836,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 833,
                    "mutability": "mutable",
                    "name": "_operator",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 856,
                    "src": "9761:17:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 832,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "9761:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 835,
                    "mutability": "mutable",
                    "name": "_approved",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 856,
                    "src": "9780:14:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 834,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "9780:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "9760:35:6"
              },
              "returnParameters": {
                "id": 838,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "9814:0:6"
              },
              "scope": 942,
              "src": "9734:201:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "baseFunctions": [
                161
              ],
              "body": {
                "id": 873,
                "nodeType": "Block",
                "src": "10299:53:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 867,
                          "name": "operatorApproval",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 249,
                          "src": "10312:16:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 869,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 868,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 859,
                          "src": "10329:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "10312:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 871,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 870,
                        "name": "_operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 861,
                        "src": "10337:9:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "10312:35:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 866,
                    "id": 872,
                    "nodeType": "Return",
                    "src": "10305:42:6"
                  }
                ]
              },
              "documentation": {
                "id": 857,
                "nodeType": "StructuredDocumentation",
                "src": "9939:258:6",
                "text": "@notice Queries the approval status of an operator for a given owner.\n@param _owner     The owner of the Tokens\n@param _operator  Address of authorized operator\n@return           True if the operator is approved, false if not"
              },
              "functionSelector": "e985e9c5",
              "id": 874,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "isApprovedForAll",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 863,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "10275:8:6"
              },
              "parameters": {
                "id": 862,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 859,
                    "mutability": "mutable",
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 874,
                    "src": "10226:14:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 858,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10226:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 861,
                    "mutability": "mutable",
                    "name": "_operator",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 874,
                    "src": "10242:17:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 860,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10242:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "10225:35:6"
              },
              "returnParameters": {
                "id": 866,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 865,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 874,
                    "src": "10293:4:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 864,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "10293:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "10292:6:6"
              },
              "scope": 942,
              "src": "10200:152:6",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 906,
                "nodeType": "Block",
                "src": "10604:961:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          },
                          "id": 902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 895,
                                "name": "_operator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 877,
                                "src": "11441:9:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 896,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 879,
                                "src": "11452:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 897,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 883,
                                "src": "11459:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 898,
                                "name": "_value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 885,
                                "src": "11464:6:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 899,
                                "name": "_data",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 887,
                                "src": "11472:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 892,
                                    "name": "_to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 881,
                                    "src": "11418:3:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 891,
                                  "name": "ERC1155TokenReceiver",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 212,
                                  "src": "11397:20:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_ERC1155TokenReceiver_$212_$",
                                    "typeString": "type(contract ERC1155TokenReceiver)"
                                  }
                                },
                                "id": 893,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "11397:25:6",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC1155TokenReceiver_$212",
                                  "typeString": "contract ERC1155TokenReceiver"
                                }
                              },
                              "id": 894,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "onERC1155Received",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 193,
                              "src": "11397:43:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                                "typeString": "function (address,address,uint256,uint256,bytes memory) external returns (bytes4)"
                              }
                            },
                            "id": 900,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11397:81:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 901,
                            "name": "ERC1155_ACCEPTED",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26,
                            "src": "11482:16:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "src": "11397:101:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "636f6e74726163742072657475726e656420616e20756e6b6e6f776e2076616c75652066726f6d206f6e455243313135355265636569766564",
                          "id": 903,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11500:59:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ef98af68c848abc187fba39b58082936b9de327b8b5fd25aacd07d63c4d89e42",
                            "typeString": "literal_string \"contract returned an unknown value from onERC1155Received\""
                          },
                          "value": "contract returned an unknown value from onERC1155Received"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_ef98af68c848abc187fba39b58082936b9de327b8b5fd25aacd07d63c4d89e42",
                            "typeString": "literal_string \"contract returned an unknown value from onERC1155Received\""
                          }
                        ],
                        "id": 890,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "11389:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 904,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11389:171:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 905,
                    "nodeType": "ExpressionStatement",
                    "src": "11389:171:6"
                  }
                ]
              },
              "documentation": {
                "id": 875,
                "nodeType": "StructuredDocumentation",
                "src": "10356:100:6",
                "text": "//////////////////////////////////////// Internal //////////////////////////////////////////////"
              },
              "id": 907,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_doSafeTransferAcceptanceCheck",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 888,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 877,
                    "mutability": "mutable",
                    "name": "_operator",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 907,
                    "src": "10499:17:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 876,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10499:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 879,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 907,
                    "src": "10518:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 878,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10518:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 881,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 907,
                    "src": "10533:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 880,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10533:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 883,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 907,
                    "src": "10546:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 882,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "10546:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 885,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 907,
                    "src": "10559:14:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 884,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "10559:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 887,
                    "mutability": "mutable",
                    "name": "_data",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 907,
                    "src": "10575:18:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 886,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "10575:5:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "10498:96:6"
              },
              "returnParameters": {
                "id": 889,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "10604:0:6"
              },
              "scope": 942,
              "src": "10459:1106:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 940,
                "nodeType": "Block",
                "src": "11739:989:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          },
                          "id": 936,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 929,
                                "name": "_operator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 909,
                                "src": "12591:9:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 930,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 911,
                                "src": "12602:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 931,
                                "name": "_ids",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 916,
                                "src": "12609:4:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 932,
                                "name": "_values",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 919,
                                "src": "12615:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 933,
                                "name": "_data",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 921,
                                "src": "12624:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 926,
                                    "name": "_to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 913,
                                    "src": "12563:3:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 925,
                                  "name": "ERC1155TokenReceiver",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 212,
                                  "src": "12542:20:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_ERC1155TokenReceiver_$212_$",
                                    "typeString": "type(contract ERC1155TokenReceiver)"
                                  }
                                },
                                "id": 927,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "12542:25:6",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC1155TokenReceiver_$212",
                                  "typeString": "contract ERC1155TokenReceiver"
                                }
                              },
                              "id": 928,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "onERC1155BatchReceived",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 211,
                              "src": "12542:48:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                                "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory) external returns (bytes4)"
                              }
                            },
                            "id": 934,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "12542:88:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 935,
                            "name": "ERC1155_BATCH_ACCEPTED",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29,
                            "src": "12634:22:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "src": "12542:114:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "636f6e74726163742072657475726e656420616e20756e6b6e6f776e2076616c75652066726f6d206f6e4552433131353542617463685265636569766564",
                          "id": 937,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12658:64:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_907b1bc15e21fe4233c673581af2cf868cd5fa614b6015b432ff41fbc0222bad",
                            "typeString": "literal_string \"contract returned an unknown value from onERC1155BatchReceived\""
                          },
                          "value": "contract returned an unknown value from onERC1155BatchReceived"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_907b1bc15e21fe4233c673581af2cf868cd5fa614b6015b432ff41fbc0222bad",
                            "typeString": "literal_string \"contract returned an unknown value from onERC1155BatchReceived\""
                          }
                        ],
                        "id": 924,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "12534:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 938,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12534:189:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 939,
                    "nodeType": "ExpressionStatement",
                    "src": "12534:189:6"
                  }
                ]
              },
              "documentation": null,
              "id": 941,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_doSafeBatchTransferAcceptanceCheck",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 922,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 909,
                    "mutability": "mutable",
                    "name": "_operator",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 941,
                    "src": "11614:17:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 908,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "11614:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 911,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 941,
                    "src": "11633:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 910,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "11633:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 913,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 941,
                    "src": "11648:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 912,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "11648:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 916,
                    "mutability": "mutable",
                    "name": "_ids",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 941,
                    "src": "11661:21:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 914,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11661:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 915,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "11661:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 919,
                    "mutability": "mutable",
                    "name": "_values",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 941,
                    "src": "11684:24:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 917,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11684:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 918,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "11684:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 921,
                    "mutability": "mutable",
                    "name": "_data",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 941,
                    "src": "11710:18:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 920,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "11710:5:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "11613:116:6"
              },
              "returnParameters": {
                "id": 923,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "11739:0:6"
              },
              "scope": 942,
              "src": "11569:1159:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            }
          ],
          "scope": 943,
          "src": "218:12512:6"
        }
      ],
      "src": "0:12732:6"
    },
    "legacyAST": {
      "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/KoiosBadges.sol",
      "exportedSymbols": {
        "KoiosBadges": [
          942
        ]
      },
      "id": 943,
      "license": null,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 214,
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:23:6"
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/Ownable.sol",
          "file": "./Ownable.sol",
          "id": 215,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 1018,
          "src": "25:23:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/SafeMath.sol",
          "file": "./SafeMath.sol",
          "id": 216,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 1117,
          "src": "49:24:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/Address.sol",
          "file": "./Address.sol",
          "id": 217,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 21,
          "src": "74:23:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/Common.sol",
          "file": "./Common.sol",
          "id": 218,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 31,
          "src": "98:22:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/IERC1155Metadata.sol",
          "file": "./IERC1155Metadata.sol",
          "id": 219,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 175,
          "src": "121:32:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/IERC1155TokenReceiver.sol",
          "file": "./IERC1155TokenReceiver.sol",
          "id": 220,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 213,
          "src": "154:37:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/richard/Workspace/Koios-Badges/contracts/IERC1155.sol",
          "file": "./IERC1155.sol",
          "id": 221,
          "nodeType": "ImportDirective",
          "scope": 943,
          "sourceUnit": 163,
          "src": "192:24:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 222,
                "name": "IERC1155",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 162,
                "src": "242:8:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC1155_$162",
                  "typeString": "contract IERC1155"
                }
              },
              "id": 223,
              "nodeType": "InheritanceSpecifier",
              "src": "242:8:6"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 224,
                "name": "ERC165",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 42,
                "src": "252:6:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC165_$42",
                  "typeString": "contract ERC165"
                }
              },
              "id": 225,
              "nodeType": "InheritanceSpecifier",
              "src": "252:6:6"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 226,
                "name": "CommonConstants",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 30,
                "src": "260:15:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_CommonConstants_$30",
                  "typeString": "contract CommonConstants"
                }
              },
              "id": 227,
              "nodeType": "InheritanceSpecifier",
              "src": "260:15:6"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 228,
                "name": "ERC1155Metadata_URI",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 174,
                "src": "277:19:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC1155Metadata_URI_$174",
                  "typeString": "contract ERC1155Metadata_URI"
                }
              },
              "id": 229,
              "nodeType": "InheritanceSpecifier",
              "src": "277:19:6"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 230,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1017,
                "src": "298:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$1017",
                  "typeString": "contract Ownable"
                }
              },
              "id": 231,
              "nodeType": "InheritanceSpecifier",
              "src": "298:7:6"
            }
          ],
          "contractDependencies": [
            30,
            42,
            162,
            174,
            1017
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 942,
          "linearizedBaseContracts": [
            942,
            1017,
            174,
            30,
            42,
            162
          ],
          "name": "KoiosBadges",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "id": 234,
              "libraryName": {
                "contractScope": null,
                "id": 232,
                "name": "SafeMath",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1116,
                "src": "317:8:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_SafeMath_$1116",
                  "typeString": "library SafeMath"
                }
              },
              "nodeType": "UsingForDirective",
              "src": "311:27:6",
              "typeName": {
                "id": 233,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "330:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            {
              "id": 237,
              "libraryName": {
                "contractScope": null,
                "id": 235,
                "name": "Address",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 20,
                "src": "347:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Address_$20",
                  "typeString": "library Address"
                }
              },
              "nodeType": "UsingForDirective",
              "src": "341:26:6",
              "typeName": {
                "id": 236,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "359:7:6",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            {
              "constant": false,
              "id": 243,
              "mutability": "mutable",
              "name": "balances",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "401:66:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(uint256 => mapping(address => uint256))"
              },
              "typeName": {
                "id": 242,
                "keyType": {
                  "id": 238,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "410:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "401:48:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(uint256 => mapping(address => uint256))"
                },
                "valueType": {
                  "id": 241,
                  "keyType": {
                    "id": 239,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "421:27:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 240,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 249,
              "mutability": "mutable",
              "name": "operatorApproval",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "509:71:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                "typeString": "mapping(address => mapping(address => bool))"
              },
              "typeName": {
                "id": 248,
                "keyType": {
                  "id": 244,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "518:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "509:45:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                  "typeString": "mapping(address => mapping(address => bool))"
                },
                "valueType": {
                  "id": 247,
                  "keyType": {
                    "id": 245,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "529:24:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "valueType": {
                    "id": 246,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": true,
              "id": 252,
              "mutability": "constant",
              "name": "INTERFACE_SIGNATURE_ERC165",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "585:63:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              },
              "typeName": {
                "id": 250,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "585:6:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30783031666663396137",
                "id": 251,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "638:10:6",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_33540519_by_1",
                  "typeString": "int_const 33540519"
                },
                "value": "0x01ffc9a7"
              },
              "visibility": "private"
            },
            {
              "constant": true,
              "id": 255,
              "mutability": "constant",
              "name": "INTERFACE_SIGNATURE_ERC1155",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "652:64:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              },
              "typeName": {
                "id": 253,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "652:6:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30786439623637613236",
                "id": 254,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "706:10:6",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_3652614694_by_1",
                  "typeString": "int_const 3652614694"
                },
                "value": "0xd9b67a26"
              },
              "visibility": "private"
            },
            {
              "constant": true,
              "id": 258,
              "mutability": "constant",
              "name": "INTERFACE_SIGNATURE_URI",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "720:60:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              },
              "typeName": {
                "id": 256,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "720:6:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30783065383933343163",
                "id": 257,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "770:10:6",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_243872796_by_1",
                  "typeString": "int_const 243872796"
                },
                "value": "0x0e89341c"
              },
              "visibility": "private"
            },
            {
              "baseFunctions": [
                41
              ],
              "body": {
                "id": 283,
                "nodeType": "Block",
                "src": "870:192:6",
                "statements": [
                  {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 272,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          },
                          "id": 268,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 266,
                            "name": "_interfaceId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 260,
                            "src": "880:12:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 267,
                            "name": "INTERFACE_SIGNATURE_ERC165",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 252,
                            "src": "896:26:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "src": "880:42:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          },
                          "id": 271,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 269,
                            "name": "_interfaceId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 260,
                            "src": "926:12:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 270,
                            "name": "INTERFACE_SIGNATURE_ERC1155",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 255,
                            "src": "942:27:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "src": "926:43:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "880:89:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 275,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 273,
                          "name": "_interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 260,
                          "src": "973:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 274,
                          "name": "INTERFACE_SIGNATURE_URI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 258,
                          "src": "989:23:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "973:39:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "880:132:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 280,
                    "nodeType": "IfStatement",
                    "src": "876:164:6",
                    "trueBody": {
                      "id": 279,
                      "nodeType": "Block",
                      "src": "1014:26:6",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1029:4:6",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "functionReturnParameters": 265,
                          "id": 278,
                          "nodeType": "Return",
                          "src": "1022:11:6"
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 281,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1052:5:6",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "functionReturnParameters": 265,
                    "id": 282,
                    "nodeType": "Return",
                    "src": "1045:12:6"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "01ffc9a7",
              "id": 284,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "supportsInterface",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 262,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "846:8:6"
              },
              "parameters": {
                "id": 261,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 260,
                    "mutability": "mutable",
                    "name": "_interfaceId",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 284,
                    "src": "813:19:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "typeName": {
                      "id": 259,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "813:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "812:21:6"
              },
              "returnParameters": {
                "id": 265,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 264,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 284,
                    "src": "864:4:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 263,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "864:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "863:6:6"
              },
              "scope": 942,
              "src": "786:276:6",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "affed0e0",
              "id": 286,
              "mutability": "mutable",
              "name": "nonce",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "1066:20:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 285,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1066:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "933166e1",
              "id": 290,
              "mutability": "mutable",
              "name": "creators",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "1091:40:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 289,
                "keyType": {
                  "id": 287,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1099:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1091:24:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 288,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1110:4:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "40c1a064",
              "id": 294,
              "mutability": "mutable",
              "name": "tokenCreator",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "1135:47:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "typeName": {
                "id": 293,
                "keyType": {
                  "id": 291,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1143:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1135:27:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "valueType": {
                  "id": 292,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1154:7:6",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "c87b56dd",
              "id": 298,
              "mutability": "mutable",
              "name": "tokenURI",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 942,
              "src": "1186:42:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "typeName": {
                "id": 297,
                "keyType": {
                  "id": 295,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1194:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1186:26:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                  "typeString": "mapping(uint256 => string)"
                },
                "valueType": {
                  "id": 296,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1205:6:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 309,
                "nodeType": "Block",
                "src": "1256:72:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 301,
                            "name": "creators",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 290,
                            "src": "1270:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 304,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 302,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1279:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 303,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1279:10:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1270:20:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "596f7520617265206e6f7420612063726561746f72",
                          "id": 305,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1292:23:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_601f78aed3d933ffb60d4c59686f112c253d4f91e11ad4ef6a4a48af716a5dde",
                            "typeString": "literal_string \"You are not a creator\""
                          },
                          "value": "You are not a creator"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_601f78aed3d933ffb60d4c59686f112c253d4f91e11ad4ef6a4a48af716a5dde",
                            "typeString": "literal_string \"You are not a creator\""
                          }
                        ],
                        "id": 300,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "1262:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 306,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1262:54:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 307,
                    "nodeType": "ExpressionStatement",
                    "src": "1262:54:6"
                  },
                  {
                    "id": 308,
                    "nodeType": "PlaceholderStatement",
                    "src": "1322:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 310,
              "name": "creatorOnly",
              "nodeType": "ModifierDefinition",
              "overrides": null,
              "parameters": {
                "id": 299,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1253:2:6"
              },
              "src": "1233:95:6",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 325,
                "nodeType": "Block",
                "src": "1371:109:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 320,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 315,
                              "name": "tokenCreator",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 294,
                              "src": "1385:12:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                              }
                            },
                            "id": 317,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 316,
                              "name": "_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 312,
                              "src": "1398:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1385:17:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 318,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1406:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 319,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1406:10:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "1385:31:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4f6e6c792074686520746f6b656e2063726561746f722063616e2061636365737320746869732066756e6374696f6e",
                          "id": 321,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1418:49:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c11ac9fa49d85882e5620c34a44d794dd8701543033b6415cb4fc851fec3ade4",
                            "typeString": "literal_string \"Only the token creator can access this function\""
                          },
                          "value": "Only the token creator can access this function"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_c11ac9fa49d85882e5620c34a44d794dd8701543033b6415cb4fc851fec3ade4",
                            "typeString": "literal_string \"Only the token creator can access this function\""
                          }
                        ],
                        "id": 314,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "1377:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 322,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1377:91:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 323,
                    "nodeType": "ExpressionStatement",
                    "src": "1377:91:6"
                  },
                  {
                    "id": 324,
                    "nodeType": "PlaceholderStatement",
                    "src": "1474:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 326,
              "name": "tokenCreatorOnly",
              "nodeType": "ModifierDefinition",
              "overrides": null,
              "parameters": {
                "id": 313,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 312,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 326,
                    "src": "1358:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 311,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1358:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1357:13:6"
              },
              "src": "1332:148:6",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 339,
                "nodeType": "Block",
                "src": "1505:57:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 332,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 329,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 983,
                        "src": "1511:5:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 330,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1519:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 331,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1519:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "1511:18:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 333,
                    "nodeType": "ExpressionStatement",
                    "src": "1511:18:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 335,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1546:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1546:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "id": 334,
                        "name": "addCreator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 354,
                        "src": "1535:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 337,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1535:22:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 338,
                    "nodeType": "ExpressionStatement",
                    "src": "1535:22:6"
                  }
                ]
              },
              "documentation": null,
              "id": 340,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 327,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1495:2:6"
              },
              "returnParameters": {
                "id": 328,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1505:0:6"
              },
              "scope": 942,
              "src": "1484:78:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 353,
                "nodeType": "Block",
                "src": "1621:36:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 351,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 347,
                          "name": "creators",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 290,
                          "src": "1627:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 349,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 348,
                          "name": "_address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 342,
                          "src": "1636:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1627:18:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 350,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1648:4:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "1627:25:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 352,
                    "nodeType": "ExpressionStatement",
                    "src": "1627:25:6"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "3b9dce05",
              "id": 354,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 345,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 344,
                    "name": "ownerOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1004,
                    "src": "1611:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1611:9:6"
                }
              ],
              "name": "addCreator",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 343,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 342,
                    "mutability": "mutable",
                    "name": "_address",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 354,
                    "src": "1586:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 341,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1586:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1585:18:6"
              },
              "returnParameters": {
                "id": 346,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1621:0:6"
              },
              "scope": 942,
              "src": "1566:91:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 367,
                "nodeType": "Block",
                "src": "1721:37:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 365,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 361,
                          "name": "creators",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 290,
                          "src": "1727:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 363,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 362,
                          "name": "_address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 356,
                          "src": "1736:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1727:18:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1748:5:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      "src": "1727:26:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 366,
                    "nodeType": "ExpressionStatement",
                    "src": "1727:26:6"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "bd6018bb",
              "id": 368,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 359,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 358,
                    "name": "ownerOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1004,
                    "src": "1711:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1711:9:6"
                }
              ],
              "name": "removeCreator",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 357,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 356,
                    "mutability": "mutable",
                    "name": "_address",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 368,
                    "src": "1684:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 355,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1684:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1683:18:6"
              },
              "returnParameters": {
                "id": 360,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1721:0:6"
              },
              "scope": 942,
              "src": "1661:97:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 424,
                "nodeType": "Block",
                "src": "1862:287:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 382,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 379,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 377,
                        "src": "1869:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 381,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": true,
                        "src": "1875:7:6",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 380,
                          "name": "nonce",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 286,
                          "src": "1877:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1869:13:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 383,
                    "nodeType": "ExpressionStatement",
                    "src": "1869:13:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 389,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 384,
                          "name": "tokenCreator",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 294,
                          "src": "1888:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 386,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 385,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 377,
                          "src": "1901:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1888:17:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 387,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1908:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1908:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "1888:30:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 390,
                    "nodeType": "ExpressionStatement",
                    "src": "1888:30:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 398,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 391,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 243,
                            "src": "1924:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(uint256 => mapping(address => uint256))"
                            }
                          },
                          "id": 395,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 392,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 377,
                            "src": "1933:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1924:13:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 396,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 393,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1938:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 394,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1938:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1924:25:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 397,
                        "name": "_initialSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 370,
                        "src": "1952:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1924:42:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 399,
                    "nodeType": "ExpressionStatement",
                    "src": "1924:42:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 404,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 400,
                          "name": "tokenURI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 298,
                          "src": "1972:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                            "typeString": "mapping(uint256 => string storage ref)"
                          }
                        },
                        "id": 402,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 401,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 377,
                          "src": "1981:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1972:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 403,
                        "name": "_uri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 372,
                        "src": "1988:4:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "1972:20:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 405,
                    "nodeType": "ExpressionStatement",
                    "src": "1972:20:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 407,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2060:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 408,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2060:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 411,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2080:3:6",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2072:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 409,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2072:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 412,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2072:12:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 413,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2086:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 414,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2086:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 415,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 377,
                          "src": "2098:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 416,
                          "name": "_initialSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 370,
                          "src": "2103:14:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 406,
                        "name": "TransferSingle",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59,
                        "src": "2045:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,address,uint256,uint256)"
                        }
                      },
                      "id": 417,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2045:73:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 418,
                    "nodeType": "EmitStatement",
                    "src": "2040:78:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 420,
                          "name": "_uri",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 372,
                          "src": "2134:4:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 421,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 377,
                          "src": "2140:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 419,
                        "name": "URI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "2130:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                          "typeString": "function (string memory,uint256)"
                        }
                      },
                      "id": 422,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2130:14:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 423,
                    "nodeType": "EmitStatement",
                    "src": "2125:19:6"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "0118fa49",
              "id": 425,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 375,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 374,
                    "name": "creatorOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 310,
                    "src": "1829:11:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1829:11:6"
                }
              ],
              "name": "create",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 373,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 370,
                    "mutability": "mutable",
                    "name": "_initialSupply",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 425,
                    "src": "1778:22:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 369,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1778:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 372,
                    "mutability": "mutable",
                    "name": "_uri",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 425,
                    "src": "1802:18:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 371,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1802:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1777:44:6"
              },
              "returnParameters": {
                "id": 378,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 377,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 425,
                    "src": "1849:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 376,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1849:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1848:13:6"
              },
              "scope": 942,
              "src": "1762:387:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 472,
                "nodeType": "Block",
                "src": "2272:215:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 441,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2302:1:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 435,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 243,
                              "src": "2279:8:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(uint256 => mapping(address => uint256))"
                              }
                            },
                            "id": 438,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 436,
                              "name": "_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 427,
                              "src": "2288:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2279:13:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 439,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 437,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 429,
                            "src": "2293:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2279:18:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 440,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1115,
                        "src": "2279:22:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 442,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2279:25:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 443,
                    "nodeType": "ExpressionStatement",
                    "src": "2279:25:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 445,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2330:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 446,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2330:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 449,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2350:3:6",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 448,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2342:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 447,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2342:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 450,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2342:12:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 451,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 429,
                          "src": "2356:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 452,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 427,
                          "src": "2361:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 453,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2366:1:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "id": 444,
                        "name": "TransferSingle",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59,
                        "src": "2315:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,address,uint256,uint256)"
                        }
                      },
                      "id": 454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2315:53:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 455,
                    "nodeType": "EmitStatement",
                    "src": "2310:58:6"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 456,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 429,
                          "src": "2379:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 457,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 19,
                        "src": "2379:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$bound_to$_t_address_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 458,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2379:16:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 471,
                    "nodeType": "IfStatement",
                    "src": "2375:108:6",
                    "trueBody": {
                      "id": 470,
                      "nodeType": "Block",
                      "src": "2397:86:6",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 460,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "2436:3:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 461,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2436:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 462,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "2448:3:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 463,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2448:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 464,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 429,
                                "src": "2460:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 465,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 427,
                                "src": "2465:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 466,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2470:1:6",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "",
                                "id": 467,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2473:2:6",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                  "typeString": "literal_string \"\""
                                },
                                "value": ""
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                  "typeString": "literal_string \"\""
                                }
                              ],
                              "id": 459,
                              "name": "_doSafeTransferAcceptanceCheck",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 907,
                              "src": "2405:30:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                                "typeString": "function (address,address,address,uint256,uint256,bytes memory)"
                              }
                            },
                            "id": 468,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2405:71:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 469,
                          "nodeType": "ExpressionStatement",
                          "src": "2405:71:6"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "94bf804d",
              "id": 473,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "id": 432,
                      "name": "_id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 427,
                      "src": "2267:3:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  ],
                  "id": 433,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 431,
                    "name": "tokenCreatorOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 326,
                    "src": "2250:16:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$_t_uint256_$",
                      "typeString": "modifier (uint256)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2250:21:6"
                }
              ],
              "name": "mint",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 430,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 427,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 473,
                    "src": "2217:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 426,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2217:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 429,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 473,
                    "src": "2230:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 428,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2230:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2216:26:6"
              },
              "returnParameters": {
                "id": 434,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2272:0:6"
              },
              "scope": 942,
              "src": "2203:284:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 494,
                "nodeType": "Block",
                "src": "2572:56:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 487,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 483,
                          "name": "tokenURI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 298,
                          "src": "2578:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                            "typeString": "mapping(uint256 => string storage ref)"
                          }
                        },
                        "id": 485,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 484,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 477,
                          "src": "2587:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2578:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 486,
                        "name": "_uri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 475,
                        "src": "2594:4:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "2578:20:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 488,
                    "nodeType": "ExpressionStatement",
                    "src": "2578:20:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 490,
                          "name": "_uri",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 475,
                          "src": "2613:4:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 491,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 477,
                          "src": "2619:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 489,
                        "name": "URI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "2609:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                          "typeString": "function (string memory,uint256)"
                        }
                      },
                      "id": 492,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2609:14:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 493,
                    "nodeType": "EmitStatement",
                    "src": "2604:19:6"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "5ed12364",
              "id": 495,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "id": 480,
                      "name": "_id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 477,
                      "src": "2567:3:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  ],
                  "id": 481,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 479,
                    "name": "tokenCreatorOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 326,
                    "src": "2550:16:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$_t_uint256_$",
                      "typeString": "modifier (uint256)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2550:21:6"
                }
              ],
              "name": "updateUri",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 478,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 475,
                    "mutability": "mutable",
                    "name": "_uri",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 495,
                    "src": "2510:18:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 474,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2510:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 477,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 495,
                    "src": "2530:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 476,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2530:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2509:33:6"
              },
              "returnParameters": {
                "id": 482,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2572:0:6"
              },
              "scope": 942,
              "src": "2491:137:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "baseFunctions": [
                173
              ],
              "body": {
                "id": 513,
                "nodeType": "Block",
                "src": "2707:61:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 507,
                                "name": "tokenURI",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 298,
                                "src": "2744:8:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                  "typeString": "mapping(uint256 => string storage ref)"
                                }
                              },
                              "id": 509,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 508,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 497,
                                "src": "2753:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2744:17:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage",
                                "typeString": "string storage ref"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_storage",
                                "typeString": "string storage ref"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 505,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2727:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 506,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2727:16:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 510,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2727:35:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 504,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2720:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                          "typeString": "type(string storage pointer)"
                        },
                        "typeName": {
                          "id": 503,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "2720:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                          }
                        }
                      },
                      "id": 511,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2720:43:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "functionReturnParameters": 502,
                    "id": 512,
                    "nodeType": "Return",
                    "src": "2713:50:6"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "0e89341c",
              "id": 514,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "uri",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 499,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "2674:8:6"
              },
              "parameters": {
                "id": 498,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 497,
                    "mutability": "mutable",
                    "name": "tokenId",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 514,
                    "src": "2645:15:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 496,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2645:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2644:17:6"
              },
              "returnParameters": {
                "id": 502,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 501,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 514,
                    "src": "2692:13:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 500,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2692:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2691:15:6"
              },
              "scope": 942,
              "src": "2632:136:6",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "baseFunctions": [
                104
              ],
              "body": {
                "id": 612,
                "nodeType": "Block",
                "src": "4113:757:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 537,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 532,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 519,
                            "src": "4128:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "307830",
                                "id": 535,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4143:3:6",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0x0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 534,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4135:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 533,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4135:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 536,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4135:12:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "4128:19:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "5f746f206d757374206265206e6f6e2d7a65726f2e",
                          "id": 538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4149:23:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_f0ab27c7656312f7e42f97895baa9fbdc438c4b74c263007cccc2cd44408ee3f",
                            "typeString": "literal_string \"_to must be non-zero.\""
                          },
                          "value": "_to must be non-zero."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_f0ab27c7656312f7e42f97895baa9fbdc438c4b74c263007cccc2cd44408ee3f",
                            "typeString": "literal_string \"_to must be non-zero.\""
                          }
                        ],
                        "id": 531,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "4120:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 539,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4120:53:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 540,
                    "nodeType": "ExpressionStatement",
                    "src": "4120:53:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 554,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 545,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 542,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 517,
                              "src": "4187:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 543,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "4196:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 544,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4196:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "4187:19:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 553,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 546,
                                  "name": "operatorApproval",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 249,
                                  "src": "4210:16:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                    "typeString": "mapping(address => mapping(address => bool))"
                                  }
                                },
                                "id": 548,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 547,
                                  "name": "_from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 517,
                                  "src": "4227:5:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "4210:23:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                  "typeString": "mapping(address => bool)"
                                }
                              },
                              "id": 551,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 549,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "4234:3:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 550,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "4234:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4210:35:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "74727565",
                              "id": 552,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4249:4:6",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            },
                            "src": "4210:43:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "4187:66:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4e656564206f70657261746f7220617070726f76616c20666f7220337264207061727479207472616e73666572732e",
                          "id": 555,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4255:49:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_849b4236b9cc0954dc0e729ab0ed3552779085d502d2b1dad4e899fd8211d4be",
                            "typeString": "literal_string \"Need operator approval for 3rd party transfers.\""
                          },
                          "value": "Need operator approval for 3rd party transfers."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_849b4236b9cc0954dc0e729ab0ed3552779085d502d2b1dad4e899fd8211d4be",
                            "typeString": "literal_string \"Need operator approval for 3rd party transfers.\""
                          }
                        ],
                        "id": 541,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "4179:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 556,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4179:126:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 557,
                    "nodeType": "ExpressionStatement",
                    "src": "4179:126:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 571,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 558,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 243,
                            "src": "4418:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(uint256 => mapping(address => uint256))"
                            }
                          },
                          "id": 561,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 559,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 521,
                            "src": "4427:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4418:13:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 562,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 560,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 517,
                          "src": "4432:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4418:20:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 569,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 523,
                            "src": "4466:6:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 563,
                                "name": "balances",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 243,
                                "src": "4441:8:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(uint256 => mapping(address => uint256))"
                                }
                              },
                              "id": 565,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 564,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 521,
                                "src": "4450:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4441:13:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 567,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 566,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 517,
                              "src": "4455:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4441:20:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 568,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sub",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1090,
                          "src": "4441:24:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 570,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4441:32:6",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4418:55:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 572,
                    "nodeType": "ExpressionStatement",
                    "src": "4418:55:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 586,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 573,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 243,
                            "src": "4479:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(uint256 => mapping(address => uint256))"
                            }
                          },
                          "id": 576,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 574,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 521,
                            "src": "4488:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4479:13:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 577,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 575,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 519,
                          "src": "4493:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4479:18:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 580,
                                "name": "balances",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 243,
                                "src": "4513:8:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(uint256 => mapping(address => uint256))"
                                }
                              },
                              "id": 582,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 581,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 521,
                                "src": "4522:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4513:13:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 584,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 583,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 519,
                              "src": "4527:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4513:18:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 578,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 523,
                            "src": "4502:6:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 579,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "add",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1115,
                          "src": "4502:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 585,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4502:30:6",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4479:53:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 587,
                    "nodeType": "ExpressionStatement",
                    "src": "4479:53:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 589,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "4582:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 590,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4582:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 591,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 517,
                          "src": "4594:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 592,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 519,
                          "src": "4601:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 593,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 521,
                          "src": "4606:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 594,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 523,
                          "src": "4611:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 588,
                        "name": "TransferSingle",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59,
                        "src": "4567:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,address,uint256,uint256)"
                        }
                      },
                      "id": 595,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4567:51:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 596,
                    "nodeType": "EmitStatement",
                    "src": "4562:56:6"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 597,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 519,
                          "src": "4759:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 598,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 19,
                        "src": "4759:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$bound_to$_t_address_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 599,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4759:16:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 611,
                    "nodeType": "IfStatement",
                    "src": "4755:111:6",
                    "trueBody": {
                      "id": 610,
                      "nodeType": "Block",
                      "src": "4777:89:6",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 601,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "4816:3:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 602,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "4816:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 603,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 517,
                                "src": "4828:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 604,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 519,
                                "src": "4835:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 605,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 521,
                                "src": "4840:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 606,
                                "name": "_value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 523,
                                "src": "4845:6:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 607,
                                "name": "_data",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 525,
                                "src": "4853:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                }
                              ],
                              "id": 600,
                              "name": "_doSafeTransferAcceptanceCheck",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 907,
                              "src": "4785:30:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                                "typeString": "function (address,address,address,uint256,uint256,bytes memory)"
                              }
                            },
                            "id": 608,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4785:74:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 609,
                          "nodeType": "ExpressionStatement",
                          "src": "4785:74:6"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": {
                "id": 515,
                "nodeType": "StructuredDocumentation",
                "src": "2874:1103:6",
                "text": "@notice Transfers `_value` amount of an `_id` from the `_from` address to the `_to` address specified (with safety call).\n@dev Caller must be approved to manage the tokens being transferred out of the `_from` account (see \"Approval\" section of the standard).\nMUST revert if `_to` is the zero address.\nMUST revert if balance of holder for token `_id` is lower than the `_value` sent.\nMUST revert on any other error.\nMUST emit the `TransferSingle` event to reflect the balance change (see \"Safe Transfer Rules\" section of the standard).\nAfter the above conditions are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call `onERC1155Received` on `_to` and act appropriately (see \"Safe Transfer Rules\" section of the standard).\n@param _from    Source address\n@param _to      Target address\n@param _id      ID of the token type\n@param _value   Transfer amount\n@param _data    Additional data with no specified format, MUST be sent unaltered in call to `onERC1155Received` on `_to`"
              },
              "functionSelector": "f242432a",
              "id": 613,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 529,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 528,
                    "name": "ownerOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1004,
                    "src": "4103:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "4103:9:6"
                }
              ],
              "name": "safeTransferFrom",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 527,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "4094:8:6"
              },
              "parameters": {
                "id": 526,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 517,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 613,
                    "src": "4006:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 516,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4006:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 519,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 613,
                    "src": "4021:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 518,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4021:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 521,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 613,
                    "src": "4034:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 520,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4034:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 523,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 613,
                    "src": "4047:14:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 522,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4047:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 525,
                    "mutability": "mutable",
                    "name": "_data",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 613,
                    "src": "4063:20:6",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 524,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "4063:5:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "4005:79:6"
              },
              "returnParameters": {
                "id": 530,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4113:0:6"
              },
              "scope": 942,
              "src": "3980:890:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "baseFunctions": [
                120
              ],
              "body": {
                "id": 747,
                "nodeType": "Block",
                "src": "6628:1517:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 638,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 633,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 618,
                            "src": "6671:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "307830",
                                "id": 636,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6686:3:6",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0x0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 635,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "6678:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 634,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "6678:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 637,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6678:12:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "6671:19:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "64657374696e6174696f6e2061646472657373206d757374206265206e6f6e2d7a65726f2e",
                          "id": 639,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6692:39:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_62feaa226fe2bab79230d856b8132c73f9553fb9f97b507f32473583a3bdc412",
                            "typeString": "literal_string \"destination address must be non-zero.\""
                          },
                          "value": "destination address must be non-zero."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_62feaa226fe2bab79230d856b8132c73f9553fb9f97b507f32473583a3bdc412",
                            "typeString": "literal_string \"destination address must be non-zero.\""
                          }
                        ],
                        "id": 632,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "6663:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 640,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6663:69:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 641,
                    "nodeType": "ExpressionStatement",
                    "src": "6663:69:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 647,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 643,
                              "name": "_ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 621,
                              "src": "6746:4:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                "typeString": "uint256[] calldata"
                              }
                            },
                            "id": 644,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "6746:11:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 645,
                              "name": "_values",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 624,
                              "src": "6761:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                "typeString": "uint256[] calldata"
                              }
                            },
                            "id": 646,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "6761:14:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6746:29:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "5f69647320616e64205f76616c756573206172726179206c656e676874206d757374206d617463682e",
                          "id": 648,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6777:43:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e247f475611b62bc866bf3255b9401b9150f6ea46ea41b1bd81bcf27fac5913f",
                            "typeString": "literal_string \"_ids and _values array lenght must match.\""
                          },
                          "value": "_ids and _values array lenght must match."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_e247f475611b62bc866bf3255b9401b9150f6ea46ea41b1bd81bcf27fac5913f",
                            "typeString": "literal_string \"_ids and _values array lenght must match.\""
                          }
                        ],
                        "id": 642,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "6738:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 649,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6738:83:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 650,
                    "nodeType": "ExpressionStatement",
                    "src": "6738:83:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 664,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 655,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 652,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 616,
                              "src": "6835:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 653,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "6844:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 654,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "6844:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "6835:19:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 663,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 656,
                                  "name": "operatorApproval",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 249,
                                  "src": "6858:16:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                                    "typeString": "mapping(address => mapping(address => bool))"
                                  }
                                },
                                "id": 658,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 657,
                                  "name": "_from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 616,
                                  "src": "6875:5:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "6858:23:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                  "typeString": "mapping(address => bool)"
                                }
                              },
                              "id": 661,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 659,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "6882:3:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 660,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "6882:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "6858:35:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "74727565",
                              "id": 662,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6897:4:6",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            },
                            "src": "6858:43:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "6835:66:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4e656564206f70657261746f7220617070726f76616c20666f7220337264207061727479207472616e73666572732e",
                          "id": 665,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6903:49:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_849b4236b9cc0954dc0e729ab0ed3552779085d502d2b1dad4e899fd8211d4be",
                            "typeString": "literal_string \"Need operator approval for 3rd party transfers.\""
                          },
                          "value": "Need operator approval for 3rd party transfers."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_849b4236b9cc0954dc0e729ab0ed3552779085d502d2b1dad4e899fd8211d4be",
                            "typeString": "literal_string \"Need operator approval for 3rd party transfers.\""
                          }
                        ],
                        "id": 651,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "6827:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 666,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6827:126:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 667,
                    "nodeType": "ExpressionStatement",
                    "src": "6827:126:6"
                  },
                  {
                    "body": {
                      "id": 721,
                      "nodeType": "Block",
                      "src": "7002:298:6",
                      "statements": [
                        {
                          "assignments": [
                            680
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 680,
                              "mutability": "mutable",
                              "name": "id",
                              "nodeType": "VariableDeclaration",
                              "overrides": null,
                              "scope": 721,
                              "src": "7010:10:6",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 679,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "7010:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 684,
                          "initialValue": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 681,
                              "name": "_ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 621,
                              "src": "7023:4:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                "typeString": "uint256[] calldata"
                              }
                            },
                            "id": 683,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 682,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 669,
                              "src": "7028:1:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "7023:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "7010:20:6"
                        },
                        {
                          "assignments": [
                            686
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 686,
                              "mutability": "mutable",
                              "name": "value",
                              "nodeType": "VariableDeclaration",
                              "overrides": null,
                              "scope": 721,
                              "src": "7038:13:6",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 685,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "7038:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 690,
                          "initialValue": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 687,
                              "name": "_values",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 624,
                              "src": "7054:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                "typeString": "uint256[] calldata"
                              }
                            },
                            "id": 689,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 688,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 669,
                              "src": "7062:1:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "7054:10:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "7038:26:6"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 704,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 691,
                                  "name": "balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 243,
                                  "src": "7183:8:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(uint256 => mapping(address => uint256))"
                                  }
                                },
                                "id": 694,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 692,
                                  "name": "id",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 680,
                                  "src": "7192:2:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "7183:12:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 695,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 693,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 616,
                                "src": "7196:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "7183:19:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 702,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 686,
                                  "src": "7229:5:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 696,
                                      "name": "balances",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 243,
                                      "src": "7205:8:6",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                        "typeString": "mapping(uint256 => mapping(address => uint256))"
                                      }
                                    },
                                    "id": 698,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 697,
                                      "name": "id",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 680,
                                      "src": "7214:2:6",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "7205:12:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 700,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 699,
                                    "name": "_from",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 616,
                                    "src": "7218:5:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "7205:19:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 701,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sub",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 1090,
                                "src": "7205:23:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 703,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7205:30:6",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7183:52:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 705,
                          "nodeType": "ExpressionStatement",
                          "src": "7183:52:6"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 719,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 706,
                                  "name": "balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 243,
                                  "src": "7243:8:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(uint256 => mapping(address => uint256))"
                                  }
                                },
                                "id": 709,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 707,
                                  "name": "id",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 680,
                                  "src": "7252:2:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "7243:12:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 710,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 708,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 618,
                                "src": "7256:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "7243:17:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 713,
                                      "name": "balances",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 243,
                                      "src": "7275:8:6",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                        "typeString": "mapping(uint256 => mapping(address => uint256))"
                                      }
                                    },
                                    "id": 715,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 714,
                                      "name": "id",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 680,
                                      "src": "7284:2:6",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "7275:12:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 717,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 716,
                                    "name": "_to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 618,
                                    "src": "7288:3:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "7275:17:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 711,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 686,
                                  "src": "7265:5:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 712,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 1115,
                                "src": "7265:9:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 718,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7265:28:6",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7243:50:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 720,
                          "nodeType": "ExpressionStatement",
                          "src": "7243:50:6"
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 675,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 672,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 669,
                        "src": "6980:1:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 673,
                          "name": "_ids",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 621,
                          "src": "6984:4:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          }
                        },
                        "id": 674,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "6984:11:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6980:15:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 722,
                    "initializationExpression": {
                      "assignments": [
                        669
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 669,
                          "mutability": "mutable",
                          "name": "i",
                          "nodeType": "VariableDeclaration",
                          "overrides": null,
                          "scope": 722,
                          "src": "6965:9:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 668,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6965:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 671,
                      "initialValue": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 670,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6977:1:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "6965:13:6"
                    },
                    "loopExpression": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 677,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": true,
                        "src": "6997:3:6",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 676,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 669,
                          "src": "6999:1:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 678,
                      "nodeType": "ExpressionStatement",
                      "src": "6997:3:6"
                    },
                    "nodeType": "ForStatement",
                    "src": "6960:340:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 724,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "7840:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 725,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "7840:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 726,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 616,
                          "src": "7852:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 727,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 618,
                          "src": "7859:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 728,
                          "name": "_ids",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 621,
                          "src": "7864:4:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 729,
                          "name": "_values",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 624,
                          "src": "7870:7:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          },
                          {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          }
                        ],
                        "id": 723,
                        "name": "TransferBatch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "7826:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                          "typeString": "function (address,address,address,uint256[] memory,uint256[] memory)"
                        }
                      },
                      "id": 730,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7826:52:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 731,
                    "nodeType": "EmitStatement",
                    "src": "7821:57:6"
                  },
                  {
                    "condition": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "argumentTypes": null,
                          "id": 732,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 618,
                          "src": "8027:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 733,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 19,
                        "src": "8027:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$bound_to$_t_address_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 734,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8027:16:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": null,
                    "id": 746,
                    "nodeType": "IfStatement",
                    "src": "8023:118:6",
                    "trueBody": {
                      "id": 745,
                      "nodeType": "Block",
                      "src": "8045:96:6",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 736,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "8089:3:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 737,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "8089:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 738,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 616,
                                "src": "8101:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 739,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 618,
                                "src": "8108:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 740,
                                "name": "_ids",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 621,
                                "src": "8113:4:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 741,
                                "name": "_values",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 624,
                                "src": "8119:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 742,
                                "name": "_data",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 626,
                                "src": "8128:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                  "typeString": "uint256[] calldata"
                                },
                                {
                                  "typeIdentifier": "t_bytes_calldata_ptr",
                                  "typeString": "bytes calldata"
                                }
                              ],
                              "id": 735,
                              "name": "_doSafeBatchTransferAcceptanceCheck",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 941,
                              "src": "8053:35:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                                "typeString": "function (address,address,address,uint256[] memory,uint256[] memory,bytes memory)"
                              }
                            },
                            "id": 743,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8053:81:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 744,
                          "nodeType": "ExpressionStatement",
                          "src": "8053:81:6"
                        }
                      ]
                    }
                  }
                ]
              },
              "documentation": {
                "id": 614,
                "nodeType": "StructuredDocumentation",
                "src": "4874:1589:6",
                "text": "@notice Transfers `_values` amount(s) of `_ids` from the `_from` address to the `_to` address specified (with safety call).\n@dev Caller must be approved to manage the tokens being transferred out of the `_from` account (see \"Approval\" section of the standard).\nMUST revert if `_to` is the zero address.\nMUST revert if length of `_ids` is not the same as length of `_values`.\nMUST revert if any of the balance(s) of the holder(s) for token(s) in `_ids` is lower than the respective amount(s) in `_values` sent to the recipient.\nMUST revert on any other error.\nMUST emit `TransferSingle` or `TransferBatch` event(s) such that all the balance changes are reflected (see \"Safe Transfer Rules\" section of the standard).\nBalance changes and events MUST follow the ordering of the arrays (_ids[0]/_values[0] before _ids[1]/_values[1], etc).\nAfter the above conditions for the transfer(s) in the batch are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call the relevant `ERC1155TokenReceiver` hook(s) on `_to` and act appropriately (see \"Safe Transfer Rules\" section of the standard).\n@param _from    Source address\n@param _to      Target address\n@param _ids     IDs of each token type (order and length must match _values array)\n@param _values  Transfer amounts per token type (order and length must match _ids array)\n@param _data    Additional data with no specified format, MUST be sent unaltered in call to the `ERC1155TokenReceiver` hook(s) on `_to`"
              },
              "functionSelector": "2eb2c2d6",
              "id": 748,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 630,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 629,
                    "name": "ownerOnly",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1004,
                    "src": "6618:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "6618:9:6"
                }
              ],
              "name": "safeBatchTransferFrom",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 628,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "6609:8:6"
              },
              "parameters": {
                "id": 627,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 616,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 748,
                    "src": "6497:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 615,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "6497:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 618,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 748,
                    "src": "6512:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 617,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "6512:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 621,
                    "mutability": "mutable",
                    "name": "_ids",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 748,
                    "src": "6525:23:6",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 619,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6525:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 620,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "6525:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 624,
                    "mutability": "mutable",
                    "name": "_values",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 748,
                    "src": "6550:26:6",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 622,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6550:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 623,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "6550:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 626,
                    "mutability": "mutable",
                    "name": "_data",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 748,
                    "src": "6578:20:6",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 625,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "6578:5:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "6496:103:6"
              },
              "returnParameters": {
                "id": 631,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "6628:0:6"
              },
              "scope": 942,
              "src": "6466:1679:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "baseFunctions": [
                130
              ],
              "body": {
                "id": 765,
                "nodeType": "Block",
                "src": "8464:271:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 759,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 243,
                          "src": "8709:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                          }
                        },
                        "id": 761,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 760,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 753,
                          "src": "8718:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "8709:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 763,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 762,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 751,
                        "src": "8723:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "8709:21:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 758,
                    "id": 764,
                    "nodeType": "Return",
                    "src": "8702:28:6"
                  }
                ]
              },
              "documentation": {
                "id": 749,
                "nodeType": "StructuredDocumentation",
                "src": "8149:223:6",
                "text": "@notice Get the balance of an account's Tokens.\n@param _owner  The address of the token holder\n@param _id     ID of the Token\n@return        The _owner's balance of the Token type requested"
              },
              "functionSelector": "00fdd58e",
              "id": 766,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 755,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "8437:8:6"
              },
              "parameters": {
                "id": 754,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 751,
                    "mutability": "mutable",
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 766,
                    "src": "8394:14:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 750,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "8394:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 753,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 766,
                    "src": "8410:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 752,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8410:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "8393:29:6"
              },
              "returnParameters": {
                "id": 758,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 757,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 766,
                    "src": "8455:7:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 756,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "8455:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "8454:9:6"
              },
              "scope": 942,
              "src": "8375:360:6",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "baseFunctions": [
                143
              ],
              "body": {
                "id": 829,
                "nodeType": "Block",
                "src": "9146:248:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 785,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 781,
                              "name": "_owners",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 770,
                              "src": "9161:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                "typeString": "address[] calldata"
                              }
                            },
                            "id": 782,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "9161:14:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 783,
                              "name": "_ids",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 773,
                              "src": "9179:4:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                "typeString": "uint256[] calldata"
                              }
                            },
                            "id": 784,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "9179:11:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9161:29:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 780,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "9153:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 786,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9153:38:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 787,
                    "nodeType": "ExpressionStatement",
                    "src": "9153:38:6"
                  },
                  {
                    "assignments": [
                      792
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 792,
                        "mutability": "mutable",
                        "name": "balances_",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 829,
                        "src": "9198:26:6",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[]"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 790,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9198:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 791,
                          "length": null,
                          "nodeType": "ArrayTypeName",
                          "src": "9198:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                            "typeString": "uint256[]"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 799,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 796,
                            "name": "_owners",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 770,
                            "src": "9241:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                              "typeString": "address[] calldata"
                            }
                          },
                          "id": 797,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "9241:14:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 795,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "9227:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (uint256[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 793,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9231:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 794,
                          "length": null,
                          "nodeType": "ArrayTypeName",
                          "src": "9231:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                            "typeString": "uint256[]"
                          }
                        }
                      },
                      "id": 798,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9227:29:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "9198:58:6"
                  },
                  {
                    "body": {
                      "id": 825,
                      "nodeType": "Block",
                      "src": "9308:59:6",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 823,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 811,
                                "name": "balances_",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 792,
                                "src": "9316:9:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 813,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 812,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 801,
                                "src": "9326:1:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "9316:12:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 814,
                                  "name": "balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 243,
                                  "src": "9331:8:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(uint256 => mapping(address => uint256))"
                                  }
                                },
                                "id": 818,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 815,
                                    "name": "_ids",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 773,
                                    "src": "9340:4:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                      "typeString": "uint256[] calldata"
                                    }
                                  },
                                  "id": 817,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 816,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 801,
                                    "src": "9345:1:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "9340:7:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "9331:17:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 822,
                              "indexExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 819,
                                  "name": "_owners",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 770,
                                  "src": "9349:7:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                                    "typeString": "address[] calldata"
                                  }
                                },
                                "id": 821,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 820,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 801,
                                  "src": "9357:1:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "9349:10:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "9331:29:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "9316:44:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 824,
                          "nodeType": "ExpressionStatement",
                          "src": "9316:44:6"
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 807,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 804,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 801,
                        "src": "9283:1:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 805,
                          "name": "_owners",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 770,
                          "src": "9287:7:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                            "typeString": "address[] calldata"
                          }
                        },
                        "id": 806,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "9287:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "9283:18:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 826,
                    "initializationExpression": {
                      "assignments": [
                        801
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 801,
                          "mutability": "mutable",
                          "name": "i",
                          "nodeType": "VariableDeclaration",
                          "overrides": null,
                          "scope": 826,
                          "src": "9268:9:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 800,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9268:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 803,
                      "initialValue": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 802,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9280:1:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "9268:13:6"
                    },
                    "loopExpression": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 809,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": true,
                        "src": "9303:3:6",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 808,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 801,
                          "src": "9305:1:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 810,
                      "nodeType": "ExpressionStatement",
                      "src": "9303:3:6"
                    },
                    "nodeType": "ForStatement",
                    "src": "9263:104:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 827,
                      "name": "balances_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 792,
                      "src": "9380:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "functionReturnParameters": 779,
                    "id": 828,
                    "nodeType": "Return",
                    "src": "9373:16:6"
                  }
                ]
              },
              "documentation": {
                "id": 767,
                "nodeType": "StructuredDocumentation",
                "src": "8739:277:6",
                "text": "@notice Get the balance of multiple account/token pairs\n@param _owners The addresses of the token holders\n@param _ids    ID of the Tokens\n@return        The _owner's balance of the Token types requested (i.e. balance for each (owner, id) pair)"
              },
              "functionSelector": "4e1273f4",
              "id": 830,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOfBatch",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 775,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "9110:8:6"
              },
              "parameters": {
                "id": 774,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 770,
                    "mutability": "mutable",
                    "name": "_owners",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 830,
                    "src": "9043:26:6",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                      "typeString": "address[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 768,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "9043:7:6",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 769,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "9043:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                        "typeString": "address[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 773,
                    "mutability": "mutable",
                    "name": "_ids",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 830,
                    "src": "9071:23:6",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 771,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9071:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 772,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "9071:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "9042:53:6"
              },
              "returnParameters": {
                "id": 779,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 778,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 830,
                    "src": "9128:16:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 776,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9128:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 777,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "9128:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "9127:18:6"
              },
              "scope": 942,
              "src": "9019:375:6",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "baseFunctions": [
                151
              ],
              "body": {
                "id": 855,
                "nodeType": "Block",
                "src": "9814:121:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 846,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 839,
                            "name": "operatorApproval",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 249,
                            "src": "9820:16:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                              "typeString": "mapping(address => mapping(address => bool))"
                            }
                          },
                          "id": 843,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 840,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "9837:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 841,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "9837:10:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "9820:28:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 844,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 842,
                          "name": "_operator",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 833,
                          "src": "9849:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "9820:39:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 845,
                        "name": "_approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 835,
                        "src": "9862:9:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "9820:51:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 847,
                    "nodeType": "ExpressionStatement",
                    "src": "9820:51:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 849,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "9897:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 850,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "9897:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 851,
                          "name": "_operator",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 833,
                          "src": "9909:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 852,
                          "name": "_approved",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 835,
                          "src": "9920:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 848,
                        "name": "ApprovalForAll",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 83,
                        "src": "9882:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bool_$returns$__$",
                          "typeString": "function (address,address,bool)"
                        }
                      },
                      "id": 853,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9882:48:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 854,
                    "nodeType": "EmitStatement",
                    "src": "9877:53:6"
                  }
                ]
              },
              "documentation": {
                "id": 831,
                "nodeType": "StructuredDocumentation",
                "src": "9398:333:6",
                "text": "@notice Enable or disable approval for a third party (\"operator\") to manage all of the caller's tokens.\n@dev MUST emit the ApprovalForAll event on success.\n@param _operator  Address to add to the set of authorized operators\n@param _approved  True if the operator is approved, false to revoke approval"
              },
              "functionSelector": "a22cb465",
              "id": 856,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "setApprovalForAll",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 837,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "9805:8:6"
              },
              "parameters": {
                "id": 836,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 833,
                    "mutability": "mutable",
                    "name": "_operator",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 856,
                    "src": "9761:17:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 832,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "9761:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 835,
                    "mutability": "mutable",
                    "name": "_approved",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 856,
                    "src": "9780:14:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 834,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "9780:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "9760:35:6"
              },
              "returnParameters": {
                "id": 838,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "9814:0:6"
              },
              "scope": 942,
              "src": "9734:201:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "baseFunctions": [
                161
              ],
              "body": {
                "id": 873,
                "nodeType": "Block",
                "src": "10299:53:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 867,
                          "name": "operatorApproval",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 249,
                          "src": "10312:16:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 869,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 868,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 859,
                          "src": "10329:6:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "10312:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 871,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 870,
                        "name": "_operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 861,
                        "src": "10337:9:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "10312:35:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 866,
                    "id": 872,
                    "nodeType": "Return",
                    "src": "10305:42:6"
                  }
                ]
              },
              "documentation": {
                "id": 857,
                "nodeType": "StructuredDocumentation",
                "src": "9939:258:6",
                "text": "@notice Queries the approval status of an operator for a given owner.\n@param _owner     The owner of the Tokens\n@param _operator  Address of authorized operator\n@return           True if the operator is approved, false if not"
              },
              "functionSelector": "e985e9c5",
              "id": 874,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "isApprovedForAll",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 863,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "10275:8:6"
              },
              "parameters": {
                "id": 862,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 859,
                    "mutability": "mutable",
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 874,
                    "src": "10226:14:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 858,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10226:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 861,
                    "mutability": "mutable",
                    "name": "_operator",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 874,
                    "src": "10242:17:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 860,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10242:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "10225:35:6"
              },
              "returnParameters": {
                "id": 866,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 865,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 874,
                    "src": "10293:4:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 864,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "10293:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "10292:6:6"
              },
              "scope": 942,
              "src": "10200:152:6",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 906,
                "nodeType": "Block",
                "src": "10604:961:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          },
                          "id": 902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 895,
                                "name": "_operator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 877,
                                "src": "11441:9:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 896,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 879,
                                "src": "11452:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 897,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 883,
                                "src": "11459:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 898,
                                "name": "_value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 885,
                                "src": "11464:6:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 899,
                                "name": "_data",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 887,
                                "src": "11472:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 892,
                                    "name": "_to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 881,
                                    "src": "11418:3:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 891,
                                  "name": "ERC1155TokenReceiver",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 212,
                                  "src": "11397:20:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_ERC1155TokenReceiver_$212_$",
                                    "typeString": "type(contract ERC1155TokenReceiver)"
                                  }
                                },
                                "id": 893,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "11397:25:6",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC1155TokenReceiver_$212",
                                  "typeString": "contract ERC1155TokenReceiver"
                                }
                              },
                              "id": 894,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "onERC1155Received",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 193,
                              "src": "11397:43:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                                "typeString": "function (address,address,uint256,uint256,bytes memory) external returns (bytes4)"
                              }
                            },
                            "id": 900,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11397:81:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 901,
                            "name": "ERC1155_ACCEPTED",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26,
                            "src": "11482:16:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "src": "11397:101:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "636f6e74726163742072657475726e656420616e20756e6b6e6f776e2076616c75652066726f6d206f6e455243313135355265636569766564",
                          "id": 903,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11500:59:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ef98af68c848abc187fba39b58082936b9de327b8b5fd25aacd07d63c4d89e42",
                            "typeString": "literal_string \"contract returned an unknown value from onERC1155Received\""
                          },
                          "value": "contract returned an unknown value from onERC1155Received"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_ef98af68c848abc187fba39b58082936b9de327b8b5fd25aacd07d63c4d89e42",
                            "typeString": "literal_string \"contract returned an unknown value from onERC1155Received\""
                          }
                        ],
                        "id": 890,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "11389:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 904,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11389:171:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 905,
                    "nodeType": "ExpressionStatement",
                    "src": "11389:171:6"
                  }
                ]
              },
              "documentation": {
                "id": 875,
                "nodeType": "StructuredDocumentation",
                "src": "10356:100:6",
                "text": "//////////////////////////////////////// Internal //////////////////////////////////////////////"
              },
              "id": 907,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_doSafeTransferAcceptanceCheck",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 888,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 877,
                    "mutability": "mutable",
                    "name": "_operator",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 907,
                    "src": "10499:17:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 876,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10499:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 879,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 907,
                    "src": "10518:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 878,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10518:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 881,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 907,
                    "src": "10533:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 880,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "10533:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 883,
                    "mutability": "mutable",
                    "name": "_id",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 907,
                    "src": "10546:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 882,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "10546:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 885,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 907,
                    "src": "10559:14:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 884,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "10559:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 887,
                    "mutability": "mutable",
                    "name": "_data",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 907,
                    "src": "10575:18:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 886,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "10575:5:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "10498:96:6"
              },
              "returnParameters": {
                "id": 889,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "10604:0:6"
              },
              "scope": 942,
              "src": "10459:1106:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 940,
                "nodeType": "Block",
                "src": "11739:989:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          },
                          "id": 936,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 929,
                                "name": "_operator",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 909,
                                "src": "12591:9:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 930,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 911,
                                "src": "12602:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 931,
                                "name": "_ids",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 916,
                                "src": "12609:4:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 932,
                                "name": "_values",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 919,
                                "src": "12615:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 933,
                                "name": "_data",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 921,
                                "src": "12624:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 926,
                                    "name": "_to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 913,
                                    "src": "12563:3:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 925,
                                  "name": "ERC1155TokenReceiver",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 212,
                                  "src": "12542:20:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_ERC1155TokenReceiver_$212_$",
                                    "typeString": "type(contract ERC1155TokenReceiver)"
                                  }
                                },
                                "id": 927,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "12542:25:6",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC1155TokenReceiver_$212",
                                  "typeString": "contract ERC1155TokenReceiver"
                                }
                              },
                              "id": 928,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "onERC1155BatchReceived",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 211,
                              "src": "12542:48:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                                "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory) external returns (bytes4)"
                              }
                            },
                            "id": 934,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "12542:88:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 935,
                            "name": "ERC1155_BATCH_ACCEPTED",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29,
                            "src": "12634:22:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          "src": "12542:114:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "636f6e74726163742072657475726e656420616e20756e6b6e6f776e2076616c75652066726f6d206f6e4552433131353542617463685265636569766564",
                          "id": 937,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12658:64:6",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_907b1bc15e21fe4233c673581af2cf868cd5fa614b6015b432ff41fbc0222bad",
                            "typeString": "literal_string \"contract returned an unknown value from onERC1155BatchReceived\""
                          },
                          "value": "contract returned an unknown value from onERC1155BatchReceived"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_907b1bc15e21fe4233c673581af2cf868cd5fa614b6015b432ff41fbc0222bad",
                            "typeString": "literal_string \"contract returned an unknown value from onERC1155BatchReceived\""
                          }
                        ],
                        "id": 924,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "12534:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 938,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12534:189:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 939,
                    "nodeType": "ExpressionStatement",
                    "src": "12534:189:6"
                  }
                ]
              },
              "documentation": null,
              "id": 941,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_doSafeBatchTransferAcceptanceCheck",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 922,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 909,
                    "mutability": "mutable",
                    "name": "_operator",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 941,
                    "src": "11614:17:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 908,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "11614:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 911,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 941,
                    "src": "11633:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 910,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "11633:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 913,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 941,
                    "src": "11648:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 912,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "11648:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 916,
                    "mutability": "mutable",
                    "name": "_ids",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 941,
                    "src": "11661:21:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 914,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11661:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 915,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "11661:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 919,
                    "mutability": "mutable",
                    "name": "_values",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 941,
                    "src": "11684:24:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 917,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11684:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 918,
                      "length": null,
                      "nodeType": "ArrayTypeName",
                      "src": "11684:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 921,
                    "mutability": "mutable",
                    "name": "_data",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 941,
                    "src": "11710:18:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 920,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "11710:5:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "11613:116:6"
              },
              "returnParameters": {
                "id": 923,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "11739:0:6"
              },
              "scope": 942,
              "src": "11569:1159:6",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            }
          ],
          "scope": 943,
          "src": "218:12512:6"
        }
      ],
      "src": "0:12732:6"
    },
    "compiler": {
      "name": "solc",
      "version": "0.6.9+commit.3e3065ac.Emscripten.clang"
    },
    "networks": {
      "4": {
        "events": {
          "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "_owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "_operator",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "_approved",
                "type": "bool"
              }
            ],
            "name": "ApprovalForAll",
            "type": "event"
          },
          "0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "_operator",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "_from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "_to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "_ids",
                "type": "uint256[]"
              },
              {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "_values",
                "type": "uint256[]"
              }
            ],
            "name": "TransferBatch",
            "type": "event"
          },
          "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "_operator",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "_from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "_to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
              }
            ],
            "name": "TransferSingle",
            "type": "event"
          },
          "0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "string",
                "name": "_value",
                "type": "string"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "URI",
            "type": "event"
          }
        },
        "links": {},
        "address": "0xD4f16fd9c647364471D35947b48AC0361C03478b",
        "transactionHash": "0xd081e6e99a29a25c961a6fc480d11a8a9ecf6421ab72591f226dc3d33348e22c"
      }
    },
    "schemaVersion": "3.2.0",
    "updatedAt": "2020-07-09T13:29:53.614Z",
    "networkType": "ethereum",
    "devdoc": {
      "methods": {
        "balanceOf(address,uint256)": {
          "params": {
            "_id": "ID of the Token",
            "_owner": "The address of the token holder"
          },
          "returns": {
            "_0": "The _owner's balance of the Token type requested"
          }
        },
        "balanceOfBatch(address[],uint256[])": {
          "params": {
            "_ids": "ID of the Tokens",
            "_owners": "The addresses of the token holders"
          },
          "returns": {
            "_0": "The _owner's balance of the Token types requested (i.e. balance for each (owner, id) pair)"
          }
        },
        "isApprovedForAll(address,address)": {
          "params": {
            "_operator": "Address of authorized operator",
            "_owner": "The owner of the Tokens"
          },
          "returns": {
            "_0": "True if the operator is approved, false if not"
          }
        },
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": {
          "details": "Caller must be approved to manage the tokens being transferred out of the `_from` account (see \"Approval\" section of the standard). MUST revert if `_to` is the zero address. MUST revert if length of `_ids` is not the same as length of `_values`. MUST revert if any of the balance(s) of the holder(s) for token(s) in `_ids` is lower than the respective amount(s) in `_values` sent to the recipient. MUST revert on any other error. MUST emit `TransferSingle` or `TransferBatch` event(s) such that all the balance changes are reflected (see \"Safe Transfer Rules\" section of the standard). Balance changes and events MUST follow the ordering of the arrays (_ids[0]/_values[0] before _ids[1]/_values[1], etc). After the above conditions for the transfer(s) in the batch are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call the relevant `ERC1155TokenReceiver` hook(s) on `_to` and act appropriately (see \"Safe Transfer Rules\" section of the standard).",
          "params": {
            "_data": "Additional data with no specified format, MUST be sent unaltered in call to the `ERC1155TokenReceiver` hook(s) on `_to`",
            "_from": "Source address",
            "_ids": "IDs of each token type (order and length must match _values array)",
            "_to": "Target address",
            "_values": "Transfer amounts per token type (order and length must match _ids array)"
          }
        },
        "safeTransferFrom(address,address,uint256,uint256,bytes)": {
          "details": "Caller must be approved to manage the tokens being transferred out of the `_from` account (see \"Approval\" section of the standard). MUST revert if `_to` is the zero address. MUST revert if balance of holder for token `_id` is lower than the `_value` sent. MUST revert on any other error. MUST emit the `TransferSingle` event to reflect the balance change (see \"Safe Transfer Rules\" section of the standard). After the above conditions are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call `onERC1155Received` on `_to` and act appropriately (see \"Safe Transfer Rules\" section of the standard).",
          "params": {
            "_data": "Additional data with no specified format, MUST be sent unaltered in call to `onERC1155Received` on `_to`",
            "_from": "Source address",
            "_id": "ID of the token type",
            "_to": "Target address",
            "_value": "Transfer amount"
          }
        },
        "setApprovalForAll(address,bool)": {
          "details": "MUST emit the ApprovalForAll event on success.",
          "params": {
            "_approved": "True if the operator is approved, false to revoke approval",
            "_operator": "Address to add to the set of authorized operators"
          }
        }
      }
    },
    "userdoc": {
      "methods": {
        "balanceOf(address,uint256)": {
          "notice": "Get the balance of an account's Tokens."
        },
        "balanceOfBatch(address[],uint256[])": {
          "notice": "Get the balance of multiple account/token pairs"
        },
        "isApprovedForAll(address,address)": {
          "notice": "Queries the approval status of an operator for a given owner."
        },
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": {
          "notice": "Transfers `_values` amount(s) of `_ids` from the `_from` address to the `_to` address specified (with safety call)."
        },
        "safeTransferFrom(address,address,uint256,uint256,bytes)": {
          "notice": "Transfers `_value` amount of an `_id` from the `_from` address to the `_to` address specified (with safety call)."
        },
        "setApprovalForAll(address,bool)": {
          "notice": "Enable or disable approval for a third party (\"operator\") to manage all of the caller's tokens."
        }
      }
    }
  }