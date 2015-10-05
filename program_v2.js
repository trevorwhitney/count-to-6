var inputs = process.argv.slice(2);
var result = inputs.map(input => input.slice(0, 1))
  .reduce((memo, char) => memo + char);

console.log(`[${inputs}] becomes "${result}"`);