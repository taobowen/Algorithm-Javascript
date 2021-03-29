给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]
![image](https://user-images.githubusercontent.com/46807600/58612589-b35f4e00-82e5-11e9-80ba-0a8dc011d2cb.png)
**示例 1:**
```
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
```
**示例 2:**
```
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
```
 

**说明:**

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。

**解答：**

&emsp;&emsp;最近树的遍历写的比较多，当初想通过某种遍历巧妙的接触，想了半天没有思路，这里还是列出递归、非递归两种方法。
- 递归：递归当然是检测左右子树，返回条件一个是特殊情况，即原根节点为空或者为p、q两节点之一；另一个是普通情况，即左右子树中均找到p、q，返回当前子树对应的根节点，左右子树中仅一个找到p、q，返回找到目标节点的孩子节点，若均未找到，返回null。
**上代码：**
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root==p||root==q||!root){
        return root;
    }
    var left=lowestCommonAncestor(root.left,p,q);
    var right=lowestCommonAncestor(root.right,p,q);
    if(!left&&!right){
        return null;
    }
    else if(left&&!right){
        return left;
    }
    else if(right&&!left){
        return right;
    }else if(right&&left){
        return root;    
    }
};
```
- 非递归：非递归还是借助栈来分别保存两条从根节点到p和q的路径，然后比较路径中的公共节点，返回即可。
**上代码：**
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root||root==p||root==q){
        return root;
    }
    var roadOfq=[];
    var roadOfp=[];
    roadOfq.push(root);
    roadOfp.push(root);
    while(roadOfp.length!=0){
        let lastnode=roadOfp[roadOfp.length-1];
        if(lastnode.flag_p==1){
            roadOfp.pop();
            continue;
        }else if((!lastnode.left||lastnode.left.flag_p==1)&&(!lastnode.right||lastnode.right.flag_p==1)){
            lastnode.flag_p=1;
        }
        if(lastnode==p){
            break;
        }else if(lastnode.right&&lastnode.right.flag_p==undefined){
            roadOfp.push(lastnode.right);
        }else if(lastnode.left&&lastnode.left.flag_p==undefined){
            roadOfp.push(lastnode.left);
        }
    }
    while(roadOfq.length!=0){
        let lastnode=roadOfq[roadOfq.length-1];
        if(lastnode.flag_q==1){
            roadOfq.pop();
            continue;
        }else if((!lastnode.left||lastnode.left.flag_q==1)&&(!lastnode.right||lastnode.right.flag_q==1)){
            lastnode.flag_q=1;
        }
        if(lastnode==q){
            break;
        }else if(lastnode.right&&lastnode.right.flag_q==undefined){
            roadOfq.push(lastnode.right);
        }else if(lastnode.left&&lastnode.left.flag_q==undefined){
            roadOfq.push(lastnode.left)
        }
    }
    for(let i=roadOfp.length-1;i>=0;i--){
        if(roadOfq.indexOf(roadOfp[i])!=-1){
            return roadOfp[i];
        }
    }
};
```