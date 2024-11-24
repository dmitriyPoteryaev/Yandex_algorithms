const { findShortWordsInList } = require('../findShortWordsInList.js');

describe("Check findShortWordsInList", () => {
    
  test("check function. Answer = b d", () => {

    expect(findShortWordsInList(["aa", "b", "cc", "d"])).toBe("b d");
  });

  test("check findShortWordsInList. Answer = a z", () => {

    expect(findShortWordsInList(["apple", "bat", "cat", "a", "dog", "z"])).toBe("a z");
  });

});