var rotate = function(matrix) {
    const n = matrix.length;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            [matrix[i][j], matrix[j][i]]=[matrix[j][i], matrix[i][j]];
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < Math.floor(n/2); j++){
            [matrix[i][j], matrix[i][n-1-j]] = [matrix[i][n-1-j], matrix[i][j]];
        }
    }
    return matrix;
};
// 示例用法
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("旋转前的矩阵:");
console.log(matrix);
const rotatedMatrix = rotate(matrix);
console.log("旋转后的矩阵:");
console.log(rotatedMatrix);
