var generate = function(numRows) {
    const triangle = new Array(numRows);

    for(let i = 0; i < numRows; i++){
        const row = new Array(i+1);
        row[0] = 1;
        row[i] = 1;
        for(let j = 1; j < i; j++){
            row[j] = triangle[i-1][j-1] + triangle[i-1][j];
        }
        triangle[i] = row;
    }
    return triangle;

};
// 以下是使用 generate 函数生成 5 行杨辉三角的示例
const numRows = 5;
const result = generate(numRows);
console.log(result);
