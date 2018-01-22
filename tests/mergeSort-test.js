const mergeSort = require('../lib/mergeSort')
const expect = require('chai').expect

describe("mergeSort", function() {
  context("given a simple case of 2 numbers", function() {
    it("can return a sorted array", function() {
      var unsortedArray = [2,1]
      var sortedArray = [1,2]

      expect(mergeSort(unsortedArray)).to.deep.equal(sortedArray)
    });
  });

  context("given the case of 3 numbers", function() {
    it("can return a sorted array", function() {
      var unsortedArray = [2,1,3]
      var sortedArray = [1,2,3]

      expect(mergeSort(unsortedArray)).to.deep.equal(sortedArray)
    });
  });

  context("given the case of 4 numbers", function() {
    it("can return a sorted array", function() {
      var unsortedArray = [3,2,1,4]
      var sortedArray = [1,2,3,4]

      expect(mergeSort(unsortedArray)).to.deep.equal(sortedArray)
    });
  });

  context("given the case of 5 numbers", function() {
    it("can return a sorted array", function() {
      var unsortedArray = [3,2,5,1,4]
      var sortedArray = [1,2,3,4,5]

      expect(mergeSort(unsortedArray)).to.deep.equal(sortedArray)
    });
  });

  // context("given the case of 6 numbers", function() {
  //   it.only("can return a sorted array", function() {
  //     var unsortedArray = [3,2,6,5,1,4]
  //     var sortedArray = [1,2,3,4,5,6]
  //
  //     expect(mergeSort(unsortedArray)).to.deep.equal(sortedArray)
  //   });
  // });
});
