/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
  module.exports.TwoSum = function(nums, target) {

    const HashMap = {};

    let ans = [];

    for( let i = 0; nums.length > i ; i++ ) {

        const diff = target - nums[i];

        if( HashMap.hasOwnProperty(diff) ){

          ans  = [HashMap[diff], i];
            
        }

        HashMap[nums[i]] = i;


    }

    return ans;
    
};