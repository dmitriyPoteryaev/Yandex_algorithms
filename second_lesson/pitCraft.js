
// You are given an array of integers representing the heights of terrain at different positions. 
// Your task is to calculate the total volume of water that can be trapped between the terrain after a rainfall. 
// Water can only be trapped if there is a depression (or "pit") between higher terrain on both sides.



// Given an array of integers, find the two largest numbers. First, identify the largest number in the array. 
// Then, find the second-largest number while keeping the largest number in the array 
// (i.e., duplicates are allowed, and the largest number can appear twice).

module.exports.pitCraft =  function(arr) {

    let maxPos = 0;

    for(let i = 0; arr.length > i ; i++){

       if(arr[i] > arr[maxPos]){

        maxPos = i;

       }
    }


    let current_maxPos = 0;

    let ans = 0;
 
    for(let i = 0; maxPos > i ; i++){

        if(arr[i] > arr[current_maxPos]){
 
            current_maxPos = i;
 
        }

        ans = ans + ( arr[current_maxPos] - arr[i] );
     }

     current_maxPos = arr.length - 1;
  
     for(let i = arr.length - 1; maxPos < i ; i--){
 
         if(arr[i] > arr[current_maxPos]){
  
             current_maxPos = i;
  
         }
 
         ans = ans + ( arr[current_maxPos] - arr[i] );
 
      }

      return ans
}