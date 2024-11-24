const { pitCraft } = require('../pitCraft.js');

describe("Check pitCraft", () => {
    
  test("check function. Answer = 7", () => {

    expect(pitCraft([3, 1, 4, 3, 5, 1, 1, 3, 1])).toBe(7);
  });

  test("check function. Answer = 6", () => {

    expect(pitCraft([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });
  test("check function. Answer = 9", () => {

    expect(pitCraft([4, 2, 0, 3, 2, 5])).toBe(9);
  });

});