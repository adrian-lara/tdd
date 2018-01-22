var pry = require('pryjs');

function mergeSort(unsorted) {
  if (unsorted.length > 1) {
    var half = Math.floor(unsorted.length/2)
    var leftSubresult = mergeSort(unsorted.slice(0,half));
    var rightSubresult = mergeSort(unsorted.slice(half));
  } else {
    return unsorted
  }
  return compare(leftSubresult, rightSubresult)
};

function compare(left, right) {
  var result = [];
  for (var i = 0; i=right.length; i) {
    // first compare firsts then compare
    var elementA = left.shift();
    var elementB = right.shift();

    if (elementA < elementB) {
      result.push(elementA);
      result.push(elementB);
    } else if (elementB < elementA) {
      result.push(elementB);
      result.push(elementA);
    } else {
      result.push(elementB);
    };
    // if (result.length > 2) {
    //   eval(pry.it);
    // };
  };
  return result;
};


module.exports = mergeSort
