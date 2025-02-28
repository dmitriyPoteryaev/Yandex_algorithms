function topKFrequent(nums, k){

    const hashMap = {};

    for(let i = 0; nums.length - 1 >= i; i++){

        const specific_number = nums[i];

        if(!hashMap.hasOwnProperty(specific_number)){

            hashMap[specific_number] = 1;
        } else {

            hashMap[specific_number] += 1;
        }

    };

    const sortedArray = Object.entries(hashMap).sort(( [cur_number, cur_count], [next_number, next_count]) => 

        next_count - cur_count
    );

    const appropriate_array = sortedArray.map((value) => {

      const  [next_number, next_count] = value;
      
        return +next_number;
    })

    const array = appropriate_array.slice(0, k);


  return array;

}


console.log(topKFrequent([1,2,2,3,3,3], 2));