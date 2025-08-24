var groupAnagrams = function(strs) {
    const map = new Map();
    for(const s of strs){
        const key = s.split('').sort().join('');
        if(!map.has(key)) map.set(key,[]);
        map.get(key).push(s);
    }
    return Array.from(map.values());
};
const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));
