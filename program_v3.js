let input = process.argv.splice(2);
let result = Math.min(... input);

console.log(`The minimum of [${input}] is ${result}`);