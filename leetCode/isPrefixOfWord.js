/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

 function isPrefixOfWord(sentence, searchWord) {

 const arraySentenceWords = sentence.split(" ");

 const quality_symbols = searchWord.length;

 for( let i = 0; arraySentenceWords.length > i; i++ ){

    const word = arraySentenceWords[i];

    if(word.slice(0, quality_symbols) === searchWord) {

        return i + 1;
    }

}

return -1;

};

console.log(isPrefixOfWord("i am tired", "you"));

