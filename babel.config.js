module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = [
    'macros',
    '@babel/plugin-proposal-private-property-in-object' 
  ];

  return {
    presets,
    plugins
  };
};
