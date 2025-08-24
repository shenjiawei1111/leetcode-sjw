/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max_water = 0;

    while (left < right) {
        const water_width = right - left;
        const water_height = Math.min(height[left], height[right]);
        const water = water_width * water_height;

        if (height[left] <= height[right]) {
            left += 1;
        } else {
            right -= 1;
        }

        max_water = Math.max(max_water, water);
    }

    return max_water;
};