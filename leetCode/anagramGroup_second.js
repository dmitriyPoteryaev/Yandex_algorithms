function anagramGroup_second(strs){

    const HashMap = new Map();

    for( let i = 0; strs.length - 1 >= i; i++ ){

        const dic = Array(26).fill(0);

        const word = strs[i];

        for( let j = 0; word.length - 1 >= j; j++ ){

            const letter = word[j];

            dic[ letter.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }

        const key = dic.join(" ");

        if(!HashMap.has(key)){

            HashMap.set(key, [word]);
        }

        HashMap.get(key).push(word);
    }


       return Array.from(HashMap.values())
}

console.log(anagramGroup_second(["act","pots","tops","cat","stop","hat"]));