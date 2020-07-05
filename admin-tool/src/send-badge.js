function sendBadge() {
  contract.methods.mint().send({ from: accounts[0] })
}