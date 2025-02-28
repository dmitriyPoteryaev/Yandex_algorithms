const { fuzzyString_secondSolution } = require('../fuzzyString_secondSolution.js');

describe("Check first solution", () => {
    
  test("check fuzzyString_secondSolution", () => {

    expect(fuzzyString_secondSolution(["book", "code", "task", "note"], ["ook", "boke", "ask", "not", "task"]))
    .toEqual(["ook", "ask", "not", "task"]);
  });

  test("check fuzzyString_secondSolution", () => {

    expect(fuzzyString_secondSolution(["plane", "train", "car", "bike"], ["pane", "trai", "air", "bike", "ik"]))
    .toEqual(["pane", "trai", "bike"]);
  });

});