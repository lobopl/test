// import { getOptions } from 'loader-utils';
// import validateOptions from 'schema-utils';

function test(source) {
  //const options = getOptions(this);
  console.log('aaaaaaaaaaaaaaaaaaaaa');
  console.log(arguments);
  //validateOptions(schema, options, 'Example Loader');

  return source;
}

module.exports = test;
