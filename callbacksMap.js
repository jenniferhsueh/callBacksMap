// var words = ["ground", "control", "to", "major", "tom"];
// function map(words, callback) { //word callback is just a variable)
//  var output = [];

// } 

var words = ["ground", "control", "to", "major", "tom"];

const Len = words.map(function(word) {
  // console.log(cb.length);    //to test
  return word.length;
});
console.log(Len);

const Upper = words.map(function(word) {
  // console.log(word.toUpperCase());    //to test
  return word.toUpperCase();
});
console.log(Upper);

const splitReverseJoin = words.map(function(word) {
  // console.log(word.split('').reverse().join(''));    //to test
  return word.split('').reverse().join('');
});
console.log(splitReverseJoin);

// [6, 7, 2, 5, 3]
// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
