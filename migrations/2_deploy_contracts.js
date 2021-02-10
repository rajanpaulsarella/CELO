// var HelloWorld = artifacts.require('HelloWorld')
//
// module.exports = function(deployer) {
//   deployer.deploy(HelloWorld)
// }

const PepitoDisguise = artifacts.require("PepitoDisguise");
const Pepito = artifacts.require("Pepito");

const path = require("path");

const Web3 = require('web3')
const ContractKit = require('@celo/contractkit')
const web3 = new Web3('https://alfajores-forno.celo-testnet.org')
const kit = ContractKit.newKitFromWeb3(web3)
//const getAccount = require('../utils/getAccount').getAccount

// async function awaitWrapper(){
//     let account_details = await getAccount()
//     console.log(account_details)
//     let account = account_details.address
//     //console.log(account)
//     console.log(`Account address: ${account}`)
//     kit.addAccount(account.privateKey)
// }
// awaitWrapper().then(module.exports).
// console.log("before export");

module.exports = function (deployer, network, account) {
  const userAddress = account;
  //console.log("Here" + userAddress);
  deployer.deploy(Pepito);
  deployer.deploy(PepitoDisguise,'0x5b3C649a533A7Fe0AcBc67De3D0CD8cde08eF808');
  //deployer.deploy(PepitoDisguise, userAddress);
};
