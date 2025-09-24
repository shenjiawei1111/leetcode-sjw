/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid || grid.length === 0) return 0;

    const row = grid.length;
    const col = grid[0].length;
    let islandCount = 0;

    const dfs = (i,j) => {
        if(i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === '0') return;

        grid[i][j] = '0';
        dfs(i+1,j);
        dfs(i-1,j);
        dfs(i,j+1);
        dfs(i,j-1);
    }

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === '1'){
                islandCount++;
                dfs(i,j);
            }
        }
    }
    return islandCount;
};
// 示例用法
const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];
console.log(numIslands(grid)); // 输出: 1

const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];
console.log(numIslands(grid2)); // 输出: 3
