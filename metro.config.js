/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require("path");

const extraNodeModules = {
  'react-native-focus-graph': path.resolve(__dirname, "../libraries/react-native-focus-graph"),
};
const watchFolders = [
  path.resolve(__dirname, "../libraries/react-native-focus-graph")
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        //redirects dependencies referenced from external package/ to local node_modules
        name in target ? target[name] : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders,
};
