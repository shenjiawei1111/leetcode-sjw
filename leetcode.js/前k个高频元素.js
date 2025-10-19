var topKFrequent = function(nums, k) {
    const freq = new Map();
    for(const num of nums){
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    class MinHeap {
        constructor() {
            this.heap = []; 
        }

        push(val) {
            this.heap.push(val);
            this.bubbleUp(this.heap.length - 1);
        }

        pop() {
            if (this.heap.length === 0) return null;
            const min = this.heap[0];
            const last = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = last;
                this.bubbleDown(0);
            }
            return min;
        }

        bubbleUp(index) {
            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                if (freq.get(this.heap[index]) < freq.get(this.heap[parentIndex])) {
                    [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                    index = parentIndex;
                } else {
                    break;
                }
            }
        }

        bubbleDown(index) {
            const length = this.heap.length;
            while (true) {
                let leftChildIndex = 2 * index + 1;
                let rightChildIndex = 2 * index + 2;
                let smallest = index;
                if (leftChildIndex < length && freq.get(this.heap[leftChildIndex]) < freq.get(this.heap[smallest])) {
                    smallest = leftChildIndex;
                }
                if (rightChildIndex < length && freq.get(this.heap[rightChildIndex]) < freq.get(this.heap[smallest])) {
                    smallest = rightChildIndex;
                }

                if (smallest !== index) {
                    [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                    index = smallest;
                } else {
                    break;
                }
            }
        }

        peek() {
            return this.heap[0];
        }

        size() {
            return this.heap.length;
        }
    }

    const heap = new MinHeap();
    for(const num of freq.keys()){
        heap.push(num);
        if(heap.size() > k){
            heap.pop();
        }
    }
    return heap.heap;
};
// 示例用法
const nums = [1,1,1,2,2,3];
const k = 2;
const result = topKFrequent(nums, k);
console.log(result); // 输出: [2, 1] （顺序可能不同）
