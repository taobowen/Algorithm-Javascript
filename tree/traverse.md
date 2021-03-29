&emsp;&emsp;二叉树的遍历是一个比较经典的问题，通过递归的方式可以很容易的写出来，但是递归会出现堆栈溢出的问题，面试过程中通常要我们写的也是非递归的算法。非递归的实现无非就是通过栈、队列的形式。
**前序遍历**
给定一个二叉树，返回它的 前序 遍历。

 示例:

```
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,2,3]
```
这里只需注意在入栈时先放出栈结点的右孩子结点再放左孩子结点。
上代码：
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root){
    let answer = [];
    let stack = [];
    while(root || stack.length !== 0) {
        while(root) {
            answer.push(root.val);
            stack.push(root);
            root = root.left;
        }
        root = stack.pop().right;
    }
    return answer;
}
```
**中序遍历**
给定一个二叉树，返回它的中序 遍历。

示例:

```
输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
```
上代码：
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const stack = [];
    const answer = [];
    while(root || stack.length != 0){
        while(root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        answer.push(root.val);
        root = root.right;
    }
    return answer;
};
```
**后序遍历**
给定一个二叉树，返回它的 后序 遍历。

示例:

```
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]
```
这个问题有两种方法解决，第一个就是取一个pre记录上次出栈的结点，如果当前节点左右子树为空或者当前节点左右子树其中之一为pre，则出栈，更新pre，否则先后把当前节点右左子树入栈；第二个方法是我看到别人的一个取巧的做法，就是把前序遍历的根左右改为根右左，然后把遍历结果取反。第二种方法比较简单，下面我只给出第一种方法的代码。
上代码：
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root){
    let stack = [];
    let answer = [];
    let pre = null;
    stack.push(root);
    while(root && stack.length !== 0){
        root = stack[stack.length - 1];
        if(!root.left && !root.right || pre && (root.right === pre || root.left === pre)){
            pre = root;
            answer.push(stack.pop().val);
        }else{
            if(root.right){
                stack.push(root.right);
            }
            if(root.left){
                stack.push(root.left);
            }
        }
    }
    return answer;
}
```