// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // helpers parsInt = convert to number, toString = converto to string, Math.sign returns - or + only
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
  // const reversed = parseInt(
  //   Math.sign(n.toString().split("").reverse().join(""))
  // );
  // return reversed;
}

module.exports = reverseInt;
