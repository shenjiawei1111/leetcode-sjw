var partitionLabels = function(s) {
    const lastPos = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++){
        const charIndex = s.charCodeAt(i) - 'a'.charCodeAt(0);
        lastPos[charIndex] = i; 
    }

    let start = 0;
    let end = 0;
    const result = [];

    for(let i = 0; i < s.length; i++){
        const currentCharLast = lastPos[s.charCodeAt(i) - 'a'.charCodeAt(0)];
        end = Math.max(end, currentCharLast);
        if(i === end){
            result.push(end - start + 1);
            start = end + 1;
        }
    }
    return result;
};
// 实例：输入字符串 "ababcbacadefegdehijhklij"
// 预期输出：[9,7,8]
console.log(partitionLabels("ababcbacadefegdehijhklij"));
