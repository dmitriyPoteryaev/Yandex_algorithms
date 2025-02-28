function histogram(str){

    function makeString(){

        let additional_string = "";
    
        for(const key in dictionary){
    
            if( max_row - n <= dictionary[key]){
    
                additional_string = additional_string + "#";
            } else {
    
                additional_string = additional_string + " ";
            }
    
        }
    
        additional_string = additional_string + " \n";
    
        return additional_string;
    }

const dictionary = {};

let  result_string = "";

for(let i = 0; str.length - 1 >= i; i++){

    const letter = str[i];

    if(dictionary.hasOwnProperty(letter)){

        dictionary[letter] += 1;
    }else {

        dictionary[letter] = 1;
    }
}

const max_row = Math.max(...Object.values(dictionary));

let n = 0;

while( n <= max_row){

    if( n === max_row) {

        for(const key in dictionary){

            result_string = result_string + key;

        }

        return result_string
    } else {

        result_string = result_string + makeString();
    }

n++;

}


}

console.log(histogram("Hello, world!"));