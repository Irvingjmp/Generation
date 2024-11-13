var add = function(a, b) {
    return a + b;
}
var subtract = function(a, b) {
  return a - b;
}

var divide = function(a, b){
  if (b===0){
    return "Indefinido";
  }else{
    return a / b;
  }
}

function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide:divide, multiply:multiply};
