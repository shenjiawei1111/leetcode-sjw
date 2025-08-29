var merge = function(intervals) {
    if(!intervals){
        return [];
    }
    intervals.sort((a,b) => a[0] - b [0]);
    let merged = [intervals[0]];

    for(let i = 1;i < intervals.length ; i++){
        const lastMerged = merged[merged.length - 1];
        const current = intervals[i];
        if (lastMerged[1] >= current[0]){
            lastMerged[1] = Math.max(lastMerged[1],current[1]);
        }
        else{
            merged.push(current);
        }
    }
    return merged;
};
// 示例用法
const intervals = [[1,3],[2,6],[8,10],[15,18]];
const result = merge(intervals);
console.log(result); // 输出: [[1,6],[8,10],[15,18]]
