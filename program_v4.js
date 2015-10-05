module.exports = function average(...numbers) {
  return numbers.reduce((memo, number) => memo + number, 0) / numbers.length;
};