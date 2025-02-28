function XandY(number1, number2){

    const obj= {


    };

    while(number1 > 0) {

        const new_number = number1 / 10;

        const integerPart = Math.trunc(new_number);

        const fractionalPart = Math.round((new_number % 1) * 10);

        if(obj.hasOwnProperty(fractionalPart)){

            obj[fractionalPart] = obj[fractionalPart] + 1;
        } else {

            obj[fractionalPart] = 1;
        }
        

        number1 = integerPart;

    }

    while(number2 > 0) {

        const new_number = number2 / 10;

        const integerPart = Math.trunc(new_number);

        const fractionalPart = Math.round((new_number % 1) * 10);

        if(obj.hasOwnProperty(fractionalPart)){

            obj[fractionalPart] = obj[fractionalPart] - 1;
        } 
        

        number2 = integerPart;

    }

    console.log(obj);

    for(let i = 0; Object.values(obj).length - 1 >= i ; i++){

        if(Object.values(obj)[i] !== 0) {

            return false;
        }
    }

    return true;


}

console.log(XandY(221310, 113220));

console.log(XandY(22131088, 11882230));