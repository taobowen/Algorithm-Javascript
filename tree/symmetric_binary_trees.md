给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

```
     1
   /   \
  2    2
 / \   / \
3  4 4  3
```
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

```
    1
   / \
  2   2
   \   \
   3    3
```

首先拿到这一题我想到的是通过中序遍历二叉树然后检验回文串，后来写出来提交发现有一些例子是通过这种方式检查不了的，比如
   ```
  5
   /   \
  4    1
    \    \
     1    4
    /     /
  2    2
```
然后最终我通过层序遍历二叉树然后每遍历完一层就检查是否是回文串的方式解出了这道题，代码如下：
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root){
        return true;
    }
    var node=[];
    var answer=[];
    var indexOfnode=0;
    node.push(root);
    while(node.length!=0){
        answer[indexOfnode]=[];
        let next=[];
        for(i in node){
            if(!node[i]){
                answer[indexOfnode].push("n");
                continue;
            }
            answer[indexOfnode].push(node[i].val);
            next.push(node[i].left);
            next.push(node[i].right);
        }
        node=next.concat();
        let arr=answer[indexOfnode].concat();
        let str1=arr.join("");
        let str2=arr.reverse().join("");
        if(str1!=str2){
            return false;
        } 
        indexOfnode++;
    }
    return true;
};
```