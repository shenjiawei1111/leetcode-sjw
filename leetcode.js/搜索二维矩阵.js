var searchMatrix = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0) return false;
    const m = matrix.length;
    const n = matrix[0].length;
    row = 0;
    col = n-1;
    while(row < m && col >= 0){
        const current = matrix[row][col];
        if(current === target){
            return true;
        }
        else if(current < target){
            row++;
        }
        else{
            col--;
        }
    }
    return false;
};
// 示例用法
const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
const target = 5;
console.log(searchMatrix(matrix, target)); // 输出: true

const target2 = 20;
console.log(searchMatrix(matrix, target2)); // 输出: false
