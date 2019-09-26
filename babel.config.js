module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@stores": "./src/stores",
            "@utils": "./src/utils",
            "@services": "./src/services",
            "@assets": "./assets",
            "@constants": "./src/constants",
            "@navigations": "./src/navigations",
            "@containers": "./src/containers"
          },
          extensions: [".js", ".ios.js", ".android.js", ".web.js"]
        }
      ]
    ]
  };
};
