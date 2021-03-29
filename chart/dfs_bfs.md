**�������**
DFS����ǰ���ĺ���ȫ�������������ڱ���ͬһ���Ľڵ�
�ݹ�汾�Ƚϼ򵥣��ǵݹ���ջ��ʵ��
�ϴ��룺
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
**�������**
BFS�������α����ֵܽڵ㣬Ȼ������ֵܽڵ��µ��ӽڵ�
����������Ʋ�α������ǵݹ�����ö�����ʵ��
�ϴ��룺
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