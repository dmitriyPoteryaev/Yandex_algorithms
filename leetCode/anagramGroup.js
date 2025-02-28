class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
      IsAnagramma(s, t){

        if(s.length !== t.length){

            return false;
        }
    
        const obj_s = {};
    
        for(let i = 0; s.length - 1 >= i; i++){
    
            const letter = s[i];
    
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


    groupAnagrams(strs) {
    

    if(strs.length === 0){

        return [];
    }

    const new_strs = [];

    const new_arr = [];

    const charCount = strs[0];


      for(let i = 0; strs.length - 1 >= i ; i++){

        const specific_word = strs[i];


        this.IsAnagramma(charCount, specific_word) ? new_arr.push(specific_word) : new_strs.push(specific_word);

      }
      

      return [new_arr, ...this.groupAnagrams(new_strs)]
    }
}
