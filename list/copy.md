请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

O(n)复杂度，不使用map的解法：

```
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

var copyRandomList = function(head) {
    let auxiliaryNode = new Node();

    auxiliaryNode.next = head;
    while (head) {
        let copyNode = new Node (head.val);
        copyNode.next = head.next;
        head.next = copyNode;
        head = copyNode.next;
    }

    let copyHead = auxiliaryNode.next;

    while (copyHead) {
        copyHead.next.random = copyHead.random ? copyHead.random.next : null;
        copyHead = copyHead.next.next;
    }

    copyHead = auxiliaryNode.next;

    if (!copyHead) {
        return null;
    }

    let answer = copyHead.next;

    while (copyHead.next) {
        let copyNode = copyHead.next;
        copyHead.next = copyHead.next.next;
        copyHead = copyNode;
    }

    return answer;
};
```