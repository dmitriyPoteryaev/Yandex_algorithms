const { TwoSum } = require('../TwoSum.js');

describe("Check first solution", () => {
    
  test("check function width args = [2,7,11,15], target = 9", () => {

    expect(TwoSum([2,7,11,15], 9)).toEqual([0, 1]);
  });

  test("check function width args = [3,2,4], target = 6", () => {

    expect(TwoSum([3,2,4], 6)).toEqual([1,2]);
  });

  test("check function width args = [3,3], target = 6", () => {

    expect(TwoSum([3,3], 6)).toEqual([0,1]);
  });


});