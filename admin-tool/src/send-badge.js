function sendBadge(badgeId) {
  contract.methods.mint().send({ from: accounts[0] })
}