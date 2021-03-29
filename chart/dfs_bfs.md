**深度优先**
DFS：当前结点的孩子全部遍历结束，在遍历同一级的节点
递归版本比较简单，非递归用栈来实现
上代码：
```
function deepSearch(node) {
    let stack = [];
    let answer = [];
    if(node) {
        stack.push(node);
        while(stack.length !== 0) {
            let outNode = stack.pop();
            answer.push(outNode);
            let childrenNode = outNode.children;
            for(i in childrenNode) {
                if(!childrenNode[i].search) {
                    childrenNode.search = true;
                    stack.push(childrenNode[i]);
                }
            }    
        }
    }
    return answer;
}
```
**广度优先**
BFS：先依次遍历兄弟节点，然后遍历兄弟节点下的子节点
广度优先类似层次遍历，非递归可以用队列来实现
上代码：
```
function broadSearch(node) {
    let queue = [];
    let answer = [];
    if(node) {
        queue.push(node);
        while(queue.length !== 0) {
            let outNode = queue.shift();
            answer.push(outNode);
            if(outNode.children) {
                 queue.concat(outNode.children);
            }
        }
    }
    return answer;
}
```
