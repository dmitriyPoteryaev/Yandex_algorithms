const { findTwoMaxNumbers } = require('../findTwoMaxNumbers.js');

describe("Check findTwoMaxNumbers", () => {
    
  test("check function", () => {

    expect(findTwoMaxNumbers( [
        12, 45, 78, 45, 89, 23, 89, 56, 34, 78, 101, 67, 101, 89, 45, 23, 45, 
        56, 101, 67, 34, 89, 23, 12, 101, 89, 78, 45, 23, 67, 101, 89, 56, 
        78, 34, 23, 12, 67, 89, 101, 56, 78, 45, 23, 34, 12, 101, 89, 67, 
        45, 23, 89, 101, 56, 78, 34, 12, 45, 89, 101
      ])).toEqual([101, 101]);
  });

});