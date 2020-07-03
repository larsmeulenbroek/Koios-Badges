var koiosBadge = artifacts.require("KoiosBadges");

module.exports = function(deployer) {
  deployer.deploy(koiosBadge, "https://larsmeulenbroek.github.io/Koios-Badges/admin-tool/tokens/");
};
