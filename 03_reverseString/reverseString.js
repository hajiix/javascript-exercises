const reverseString = function(str) {
  let reversedStr = ""
  for(i = 0; i < str.length; i++){
    reversedStr = str[i] + reversedStr
  }
  return reversedStr
};

// Do not edit below this line
module.exports = reverseString;
