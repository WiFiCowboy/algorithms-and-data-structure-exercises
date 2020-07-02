// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

module.exports = reverse;

// Quick Solution
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// Manul Solution
// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// ES216 solution
// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }
