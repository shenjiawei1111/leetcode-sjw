/**
 * 初始化MinStack对象
 */
var MinStack = function() {
    // 主栈：存储所有元素
    this.mainStack = [];
    // 辅助栈：存储当前最小值（栈顶为当前最小值）
    this.minStack = [];
};

/**
 * 将元素val推入堆栈
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // 推入主栈
    this.mainStack.push(val);
    // 辅助栈为空，或当前值<=辅助栈顶（当前最小值），则推入辅助栈
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
 * 删除堆栈顶部的元素
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // 弹出主栈顶元素
    const topVal = this.mainStack.pop();
    // 若弹出的是当前最小值（辅助栈顶），则同步弹出辅助栈顶
    if (topVal === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * 获取堆栈顶部的元素
 * @return {number}
 */
MinStack.prototype.top = function() {
    // 返回主栈顶元素
    return this.mainStack[this.mainStack.length - 1];
};

/**
 * 获取堆栈中的最小元素
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // 返回辅助栈顶元素（当前最小值）
    return this.minStack[this.minStack.length - 1];
};

/**
 * 示例用法：
 * const obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * const param_3 = obj.top();
 * const param_4 = obj.getMin();
 */
// 示例用法
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log("当前最小值: ", minStack.getMin()); // 输出: -3
minStack.pop();
console.log("栈顶元素: ", minStack.top());      // 输出: 0
console.log("当前最小值: ", minStack.getMin()); // 输出: -2
