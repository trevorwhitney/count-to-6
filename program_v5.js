module.exports = function makeImportant(string, count = string.length ) {
  return string + '!'.repeat(count);
};