var words = ["ground", "control", "to", "major", "tom"];

function map(item, call){
  newArray = []
  for(var i = 0; i < item.length; i++) {
    newArray.push(call(item[i]));   //****
  }
  // console.log(newArray);
  return newArray;
}
//console.log map????

var len = map(words, function(word) {
  return word.length;
});
console.log(len);


var upperCase = map(words, function(word) {
  return word.toUpperCase();
});
console.log(upperCase);

var splitReverseJoin = map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(splitReverseJoin);
// [6, 7, 2, 5, 3]
// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
