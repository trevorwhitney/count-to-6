console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(stringPieces, ...replacements) {
  let escapedArgs = replacements.map((arg) => {
    return arg
      .replace(/&/g, "&amp;")
      .replace(/'/g, "&apos;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  });

  let string = stringPieces[0];
  for (var i = 0; i < replacements.length; i++) {
    string += escapedArgs[i] +stringPieces[i + 1];
  }

  return string;
}
