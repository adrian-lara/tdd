var pry = require('pryjs');

function singlePass(unsortedArray) {
  return unsortedArray.map( function(num,i,nums) {
    if (nums[i + 1] === undefined) {
      return num;
    } else if (num < nums[i + 1]) {
      return num;
    } else {
      var a = num;
      var b = nums[i + 1];
      nums[i + 1] = a;
      return b;
    };
  });
};

function bubbleSort(unsortedArray) {
  return unsortedArray.reduce( function(midSort) {
    return singlePass(midSort);
  }, unsortedArray);
};

module.exports = bubbleSort
