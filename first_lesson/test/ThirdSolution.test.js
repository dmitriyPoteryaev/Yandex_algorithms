const { ThirdSolution } = require('../string_thirdSolution.js');

describe("Check third solution", () => {
  
  test("check function width arg - @@@aB3@aB3@#zY9*zY@@9!%99@9bva@", () => {

    expect(ThirdSolution("@@@aB3@aB3@#zY9*zY@@9!%99@9bva@")).toBe("@");
  });

  test("check function with the empty string argument", () => {

    expect(() => ThirdSolution("          ")).toThrow("It's empty string");
  });

  test("check function with the not string argument", () => {

    expect(() => ThirdSolution(1)).toThrow("It's not a string");
  });

  test("check function with the not string argument", () => {

    expect(() => ThirdSolution({})).toThrow("It's not a string");
  });

  test("check function with the not string argument", () => {

    expect(() => ThirdSolution([])).toThrow("It's not a string");
  });

  test("check function with the not string argument", () => {

    expect(() => ThirdSolution(null)).toThrow("It's not a string");
  });

  test("check function without argument", () => {

    expect(() => ThirdSolution()).toThrow("You did not put arguments");
  });

  test("check function with a few arguments", () => {

    expect(() => ThirdSolution("@@@aB3@aB3@#zY9*zY@@9!%99@9bva@", "@@@aB3@aB3@#zY9*zY@@9!%99@9bva@")).toThrow("Yot put more then one argument");
  });

});