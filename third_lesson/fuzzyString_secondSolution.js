

function fuzzyString_secondSolution(dictionary, text){

const all_words = new Set();

    for(let count_words = 0; count_words <= dictionary.length - 1; count_words++){

        const current_word = dictionary[count_words];

      for(let delpos = 0; delpos <= current_word.length - 1; delpos++){

        const new_word = current_word.slice(0, delpos) + current_word.slice(delpos + 1);

        all_words.add(new_word);
      }

      all_words.add(dictionary[count_words]);
    }
    
    const fit_words = [];

    for(let i = 0; i <= text.length - 1; i++){

        if(all_words.has(text[i])){

            fit_words.push(text[i]);
        }
    }

      return fit_words;

    }

    cons