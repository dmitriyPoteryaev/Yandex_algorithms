

function isPalindrom(s){

    const result = s.replace(/[^a-zA-Zа-яА-ЯёЁ0-9]/g, '');

    console.log(result);

    for( let i = 0; result.length - 1 >= i; i++ ){

        const pointer1 = i;

        const pointer2 = result.length - 1 - pointer1;

        const left_symbol = result[pointer1].toLowerCase();

        const right_symbol = result[pointer2].toLowerCase();

        console.log(left_symbol, right_symbol, result.length);

        if(left_symbol !== right_symbol){

            return false;
        }

    }

    return true


}

console.log(isPalindrom("0P"));