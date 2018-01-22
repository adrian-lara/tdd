const expect = require('chai').expect
const bubbleSort = require('../lib/bubbleSort')

describe("BubbleSort", function() {
  it("can return a sorted array", function() {
    unsortedArray = [1,3,4,5,2]
    sortedArray = [1,2,3,4,5]

    expect(bubbleSort(unsortedArray)).to.deep.equal(sortedArray);
  });
});
