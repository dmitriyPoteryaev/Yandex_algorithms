
function  Solution(s, t){
 

        if(s.length !== t.length){

            return false;
        }

        const obj_s = {};

        for(let i = 0; s.length - 1 >= i; i++){

            const letter = s[i];

            console.log(s[i], obj_s.hasOwnProperty(letter));

            if(obj_s.hasOwnProperty(letter)) {

                obj_s[letter] = obj_s[letter] + 1;

            } else {

                obj_s[letter] = 1;
            }

        }


           for(let i = 0; t.length - 1 >= i ; i++){

            const letter = t[i];

            if(obj_s.hasOwnProperty(letter)) {

                obj_s[letter] = obj_s[letter] - 1;
            }
        }

        for(let i = 0; Object.values(obj_s).length - 1 >= i ; i++){

            if(Object.values(obj_s)[i] !== 0) {

                return false;
            }
        }

        return true;
}

console.log(Solution("bbcc", "ccbc"));