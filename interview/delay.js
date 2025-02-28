


const delay = (ms, value) => {

return  new Promise((resolve) => {

   setTimeout(() => {

     resolve(value);
   
   }, ms)

})
    
};


console.log(delay(3000, 6));