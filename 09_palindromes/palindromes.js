const palindromes = function (str) {
  copy = str
    .split("")
    .filter(
      (char) =>
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        (char >= "0" && char <= "9")
    );
  console.log(copy);

  for (let i = 0; i < Math.floor(copy.length / 2); i++) {
    if (copy[i].toLowerCase() != copy[copy.length - 1 - i].toLowerCase())
      return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
