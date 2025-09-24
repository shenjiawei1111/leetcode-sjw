var orangesRotting = function(grid) {
    const rows = grid.length;
    if(rows === 0) return 0;
    const cols = grid[0].length;
    const queue = [];
    let freshCount = 0;
    let time = 0;
    
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if (grid[i][j] === 2){
                queue.push([i,j]);
            }
            if(grid[i][j] === 1){
                freshCount++;
            }
        }
    }
    if(freshCount === 0) return 0;
    if(queue.length === 0) return -1;

    while(queue.length > 0){
        const levelSize = queue.length;

        for(let k = 0; k < levelSize; k++){
            const [i,j] = queue.shift();
            for(const[di,dj] of directions){
                const newI = i + di;
                const newJ = j + dj; 
                if(newI >= 0 && newI <rows && newJ >= 0 && newJ < cols && grid[newI][newJ] === 1){
                    grid[newI][newJ] = 2;
                    freshCount--;
                    queue.push([newI,newJ]);
                }
            }
        }
        if(queue.length > 0) time++;
    }
    return freshCount === 0 ? time : -1;

};
// 示例用法
const grid = [
    [2,1,1],
    [1,1,0],
    [0,1,1]
];
console.log(orangesRotting(grid)); // 输出: 4
const grid2 = [
    [2,1,1],
    [0,1,1],
    [1,0,1]
];
console.log(orangesRotting(grid2)); // 输出: -1
const grid3 = [
    [0,2]
];
console.log(orangesRotting(grid3)); // 输出: 0