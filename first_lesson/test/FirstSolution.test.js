const { FirstSolution } = require('../string_firstSolution.js');

describe("Check first solution", () => {
    
  test("check function width arg - @@@aB3@aB3@#zY9*zY@@9!%99@9bva@", () => {

    expect(FirstSolution("@@@aB3@aB3@#zY9*zY@@9!%99@9bva@")).toBe("@");
  });

});