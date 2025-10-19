// 最小栈
var findKthLargest = function(nums, k) {
    class Minheap {
        constructor() {
            this.heap = [];
        }

        push(val){
            this.heap.push(val);
            this.bubbleUp(this.heap.length - 1);
        }

        pop(){
            if(this.heap.length === 0) return null;
            const min = this.heap[0];
            const last = this.heap.pop();
            if(this.heap.length > 0){
                this.heap[0] = last;
                this.bubbleDown(0);
            }
            return min;
        }

        bubbleUp(index){
            while(index > 0){
                const parentIndex = Math.floor((index - 1) / 2);
                if(this.heap[index] < this.heap[parentIndex]){
                    [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                    index = parentIndex;
                }else{
                    break;
                }
            }
        }

        bubbleDown(index){
            const length = this.heap.length;
            while(true){
                let leftChildIndex = 2 * index + 1;
                let rightChildIndex = 2 * index + 2;
                let smallest = index;
                if(leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]){
                    smallest = leftChildIndex;
                }
                if(rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]){
                    smallest = rightChildIndex;
                }
                if(smallest !== index){
                    [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                    index = smallest;
                }else{
                    break;
                }

            }
        }
        
        peek(){
            return this.heap[0];
        }
        size(){
            return this.heap.length;
        }

    }

    const heap = new Minheap();
    for(const num of nums){
        heap.push(num);
        if(heap.size() > k){
            heap.pop();
        }
    }

    return heap.peek();
};

//快速选择算法
var findKthLargest = function(nums, k) {
    const n = nums.length;
    const target = n - k; // 第k个最大元素在升序数组中的索引
    
    // 分区函数：返回pivot的最终索引（左边≥pivot，右边≤pivot）
    const partition = (left, right) => {
        // 选择最右边的元素作为pivot
        const pivot = nums[right];
        let i = left; // i是pivot的最终位置（初始为left）
        
        // 遍历[left, right-1]，将大于等于pivot的元素移到左边
        for (let j = left; j < right; j++) {
            if (nums[j] >= pivot) {
                [nums[i], nums[j]] = [nums[j], nums[i]]; // 交换
                i++;
            }
        }
        
        // 将pivot放到最终位置i
        [nums[i], nums[right]] = [nums[right], nums[i]];
        return i;
    };
    
    // 快速选择递归函数
    const quickSelect = (left, right) => {
        const pivotIndex = partition(left, right);
        
        if (pivotIndex === target) {
            return nums[pivotIndex]; // 找到目标
        } else if (pivotIndex < target) {
            return quickSelect(pivotIndex + 1, right); // 目标在右半部分
        } else {
            return quickSelect(left, pivotIndex - 1); // 目标在左半部分
        }
    };
    
    return quickSelect(0, n - 1);
};