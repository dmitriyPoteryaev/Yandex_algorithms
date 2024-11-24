const RLE = (string) => {

const arrayUniqeSymbols = [];

let current_symbol = string[0];

let current_quantity = 0;

for( let i = 1; string.length - 1 >= i; i++ ) {

    if(current_symbol !== string[i]) {

        current_quantity < 1 ? arrayUniqeSymbols.push(current_symbol, i - current_quantity) : arrayUniqeSymbols.push(current_symbol);

        current_symbol = string[i];

        current_quantity = i;

    }
   
}

arrayUniqeSymbols.push(current_symbol, string.length - current_quantity)

return arrayUniqeSymbols.join("");

}

console.log(RLE("aaabbcddd"));

console.log(RLE("xxxxyyyzwwwww"));

console.log(RLE("aaabcdddeeeffggg"));