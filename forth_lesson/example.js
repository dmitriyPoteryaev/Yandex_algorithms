
function example(arr){

    const max = Math.max(...arr);

    const min = Math.min(...arr);

    const k = max - min + 1;

    const new_arr = Array(k + 1).fill(0);

    for(let i = 0; arr.length - 1 >= i ; i++){

        const position = arr[i];

        new_arr[position] = new_arr[position] + 1;
    }

    let new_pos = 0;

    for( let i = 1; k >= i; i++ ){

        const count  = new_arr[i];

        for(let j = 1; count >= j; j++ ){

            arr[new_pos] = i;
            new_pos++;
        }
    }


    return arr;

}

console.log(example([5, 4, 5, 3, 2, 1, 1, 5, 4]));