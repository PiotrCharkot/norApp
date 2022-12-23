const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig("./node_modules/metro-config")

defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;