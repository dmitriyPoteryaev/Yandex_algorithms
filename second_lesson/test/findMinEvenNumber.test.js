const { findMinEvenNumber } = require('../findMinEvenNumber.js');

describe("Check findTwoMaxNumbers", () => {
    
  test("check function. Answer = 8", () => {

    expect(findMinEvenNumber([15, 8, 23, 42, 7, 16])).toBe(8);
  });

  test("check function.There is no even number in array. Answer = -1", () => {

    expect(findMinEvenNumber([15, 23, 7, 33, 9])).toBe(-1);
  });

});