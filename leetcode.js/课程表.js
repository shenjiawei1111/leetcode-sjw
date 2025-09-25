var canFinish = function(numCourses, prerequisites) {
    const adj = Array.from({length:numCourses},()=>[]);
    const inDegree = new Array(numCourses).fill(0);
    for(const[course,precourse] of prerequisites){
        adj[precourse].push(course);
        inDegree[course]++;
    }

    const queue = [];
    for(let i = 0; i < numCourses; i++){
        if(inDegree[i] === 0){
            queue.push(i);
        }
    }

    let processedCount = 0;
    while(queue.length > 0){
        const current = queue.shift();
        processedCount++;

        for(const nextCourse of adj[current]){
            inDegree[nextCourse]--;
            if(inDegree[nextCourse] === 0){
                queue.push(nextCourse);
            }
        }
    }
    return numCourses === processedCount;
};
// 示例用法
const numCourses = 2;
const prerequisites = [[1, 0]];
console.log(canFinish(numCourses, prerequisites)); // 输出: true

const numCourses2 = 2;
const prerequisites2 = [[1, 0], [0, 1]];
console.log(canFinish(numCourses2, prerequisites2)); // 输出: false
