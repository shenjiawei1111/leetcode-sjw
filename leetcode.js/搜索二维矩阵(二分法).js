var searchMatrix = function(matrix, target) {
    const n = matrix.flat();
    let left = 0;
    let right = n.length - 1;
    while(left <= right){
        mid = Math.floor((left + right)/2);
        if(n[mid] === target){
            return true;
        }
        else if(n[mid] > target){
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    return false;
};
// 示例用法
const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];
const target1 = 3;
console.log(searchMatrix(matrix, target1)); // 输出: true

const target2 = 13;
console.log(searchMatrix(matrix, target2)); // 输出: false
