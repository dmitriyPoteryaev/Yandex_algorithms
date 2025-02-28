
/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */

function TakeGiftsFromTheRichestPile(gifts, k) {

        if( k === 0 ){

            const sum = gifts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            return sum;
        }

        let pile_number = 0;

        for(let i = 0 ; i <= gifts.length; i++){
    
            if(gifts[pile_number] < gifts[i]){
    
                pile_number = i;
    
            }

    }

    gifts[pile_number] = Math.sqrt(gifts[pile_number]) | 0;

   return  TakeGiftsFromTheRichestPile(gifts, k - 1);
   
   };

   console.log(TakeGiftsFromTheRichestPile([ 25, 64, 9, 4, 100 ], 4))

   gifts.sort((a, b) => a - b);
   const n = gifts.length;
   const newGiftIndex = (gift) => {
       let left = 0; right = n - 1;
       while(left < right) {
           const mid = Math.floor((right + left) / 2);
           if(gifts[mid] < gift) {
               left = mid + 1;
           } else {
               right = mid;
           }
       }

       return left;
   }

   for(let i = 0; i < k; i++) {
       const maxGift = gifts.pop();
       const half = Math.floor(Math.sqrt(maxGift));
       gifts.splice(newGiftIndex(half), 0, half);
   }

   const total = gifts.reduce((s, c) => s + c, 0);
   return total;
   