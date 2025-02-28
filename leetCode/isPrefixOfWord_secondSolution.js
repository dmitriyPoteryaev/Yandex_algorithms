/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

function isPrefixOfWord_secondSolution(sentence, searchWord) {


    let currentIndex = 0;

    let currentPosition = 1;


    while(
        sentence.length > currentIndex){


        while(sentence.length > currentIndex &&
            sentence[currentIndex] === " "){

            currentIndex++;
            currentPosition++;
        };

        let countEqualLetters = 0;

        while(sentence.length > currentIndex &&
              sentence[currentIndex] === searchWord[countEqualLetters] &&
              searchWord.length > countEqualLetters
        ){

            currentIndex++;
            countEqualLetters++;
        };

        if(countEqualLetters === searchWord.length){

            return currentPosition;
        };

        
        while(sentence.length > currentIndex &&
            sentence[currentIndex] !== " "){

            currentIndex++;
        };

    }
   
   return -1;
   
   };
   
   console.log(isPrefixOfWord_secondSolution("i love eating burger", "burg"));
   
   