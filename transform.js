const {transformSync} = require('@babel/core');

const code = `
  const obj = {
    privateProp: 'value',
  };

  obj.privateProp = 'new value';
`;

const options = {
    configFile: true,
    plugins: ['@babel/plugin-transform-private-property-in-object'],
};

const transformedCode = transformSync(code, options);

console.log(transformedCode);
