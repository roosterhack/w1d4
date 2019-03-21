// Goal: Extract from a two dimensional array (with the same height and width), concat all the elements from the "second diagonal", starting from the top right corner to the bottom left corner
// function concatSecondDiagonal(twoDimArray) {
//   let word = [];
//   for (let i = 0; i < twoDimArray.length; i++) {
//     word.push(`${twoDimArray[i][twoDimArray.length - 1 - i]}`);
//   }
//   return word.join("");
// }

//Map solution
//Map solution
function concatSecondDiagonal(twoDimArray) {
  const charArray = twoDimArray.map((el, index, array) => {
    return el[array.length - 1 - index];
  });
  return charArray.join("");
}

console.log(
  concatSecondDiagonal([
    ["a", "z", "x", "C", "v", "B"],
    ["t", "w", "I", "p", "e", "7"],
    ["w", "y", "o", "r", "m", "x"],
    ["q", "U", "l", "s", "k", "H"],
    ["A", "i", "G", "Y", "h", "L"],
    ["n", "f", "d", "W", "z", "a"]
  ])
);
// ==> "Berlin"
