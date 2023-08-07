module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react'
  ];
  const plugins = [
    'macros',
    '@babel/plugin-proposal-private-property-in-object'
  ];

  if (process.env.ENV === 'prod') {
    plugins.push('@babel/plugin-transform-remove-console');
  }

  return {
    presets,
    plugins,
  };
};
