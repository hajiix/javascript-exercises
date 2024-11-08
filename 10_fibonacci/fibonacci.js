const fibonacci = function(num) {
  if( num < 0) return "OOPS"
  else if(num == 0) return 0
  else if(num <= 2) return 1
  prev = current = 1
  for(i = 2; i < num; i++){
    current = prev + current
    prev = current - prev
  }
  return current
};

// Do not edit below this line
module.exports = fibonacci;
