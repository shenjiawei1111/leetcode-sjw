var twoSum = function(nums, target) {
    const hashMap = {};
    for(i = 0; i < nums.length; i++){
        const com = target - nums[i];
        if(com in hashMap){
            return [hashMap[com], i];
        }
        hashMap[nums[i]] = i
    }

};
const nums = [2,2,2,15];
const target = 17;
console.log(twoSum(nums, target));
