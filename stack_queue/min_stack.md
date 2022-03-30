定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

示例:

MinStack minStack = new MinStack();

minStack.push(-2);

minStack.push(0);

minStack.push(-3);

minStack.min();   --> 返回 -3.

minStack.pop();

minStack.top();      --> 返回 0.

minStack.min();   --> 返回 -2.

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.auxiliaryStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let popAuxiliaryStack = this.auxiliaryStack[this.auxiliaryStack.length - 1];
    if (this.auxiliaryStack.length === 0 || popAuxiliaryStack > x) {
        this.auxiliaryStack.push(x);
    } else {
        this.auxiliaryStack.push(popAuxiliaryStack);
    }

    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.auxiliaryStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.auxiliaryStack[this.auxiliaryStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```
