var exist = function(board, word) {
    const n = board.length;
    const m = board[0].length;
    const len = word.length;

    const direction = [[1,0], [-1,0], [0,1], [0,-1]];

    const dfs = (i, j, index) => {
        if(index === len) return true;

        if(i<0 || i>=n || j<0 || j>=m || board[i][j] !== word[index]){
            return false;
        }

        const temp = board[i][j];
        board[i][j] = "#";
        for(const [di,dj] of direction){
            const newI = i + di;
            const newJ = j + dj;
            if(dfs(newI, newJ, index+1)){
                return true;
            } 
        }
        board[i][j] = temp;
        return false;
    }
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(board[i][j] === word[0]){
                if(dfs(i, j, 0)){
                    return true;
                }
            }
        }
    }
    return false;
};
// 示例用法
const board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
];
const word = "ABCCED";
console.log(exist(board, word)); // 输出: true

const word2 = "SEE";
console.log(exist(board, word2)); // 输出: true

const word3 = "ABCB";
console.log(exist(board, word3)); // 输出: false
