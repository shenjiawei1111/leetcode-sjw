var canJump = function (nums) {
    const n = nums.length;
    if (n === 1) return true;
    let maxReach = 0;
    for (let i = 0; i < n; i++) {
        if (maxReach < i) {
            return false;
        }
        maxReach = Math.max(maxReach, nums[i] + i);

        if (maxReach >= n - 1) {
            return true;
        }
    }
    return false;
};