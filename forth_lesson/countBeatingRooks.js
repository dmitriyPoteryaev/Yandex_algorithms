function countbeatingrooks(rookcoords){

    const dic_row = {};

    const dic_col = {};

    function makedictionary(roworcol, key){

        if(roworcol.hasOwnProperty(key)){

            roworcol[key] += 1;
        } else {

            roworcol[key] = 0;
        }
    }

    for( let i = 0; rookcoords.length - 1 >= i; i++){

        const [ row, col ] = rookcoords[i];

        makedictionary(dic_row, row);
        makedictionary(dic_col, col);
    }

    function countPairs(roworcol){

        let pairs = 0;

        for (const key in roworcol) {

            pairs += roworcol[key];

        }

        return pairs
    }


    return countPairs(dic_row) + countPairs(dic_col)  - 1;

}

console.log(countbeatingrooks([[9, 0], [0, 0], [0, 9], [9, 9], [5, 5], [5, 0]]))