const removeFromArray = function(arr) {
  for(i = 1; i < arguments.length; i++){
    let removedIndex = arr.indexOf(arguments[i]);
    if (removedIndex < 0) continue;
    arr.splice(removedIndex, 1);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
