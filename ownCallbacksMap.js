var words = ["ground", "control", "to", "major", "tom"];

function map(input_array, callback_function){
  newArray = []
  for(var i = 0, i < input_array; i++) {
    callback_function(input_array[i]);
    newArray.push(input_array[i]);
  }
  console.log(newArray)
  return newArray
}
// console.log(map());

// map(words, function(word) {
//  return word.length;
// });

// map(words, function(word) {
//  return word.toUpperCase();
// });

// map(words, function(word) {
//  return word.split('').reverse().join('');
// });

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

// var words = ["ground", "control", "to", "major", "tom"];

// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });