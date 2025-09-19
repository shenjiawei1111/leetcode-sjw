var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowHasZero = false;
    let firstColHasZero = false;
    for(let i = 0; i < n; i++){
        if(matrix[0][i] === 0){
            firstRowHasZero = true;
            break;
        }
    }
    for (let j = 0; j < m; j++){
        if(matrix[j][0] === 0){
            firstColHasZero = true;
            break;
        }
    }
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for(let i = 1; i < m; i++){
        if(matrix[i][0] === 0){
            for(let j = 1; j < n; j++){
                matrix[i][j] = 0;
            }
        }
    }
    for(let j = 1; j < n; j++){
        if(matrix[0][j] === 0){
            for(let i = 0; i < m; i++){
                matrix[i][j] = 0;
            }
        }
    }
    if(firstRowHasZero){
        for(let j = 0; j < n; j++){
            matrix[0][j] = 0;
        }
    }
    if(firstColHasZero){
        for(let i = 0; i < m; i++){
            matrix[i][0] = 0;
        }
    }
};
// 示例使用
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
console.log("原始矩阵:");
console.log(matrix.map(row => [...row]));
setZeroes(matrix);
console.log("置零后的矩阵:");
console.log(matrix.map(row => [...row]));
