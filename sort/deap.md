![image](https://user-images.githubusercontent.com/46807600/58639185-09a1b080-8329-11e9-8c36-a1870ca3fb57.png)
![image](https://user-images.githubusercontent.com/46807600/58639239-2342f800-8329-11e9-9d51-3b3118d2e33d.png)

**关于堆：** 如上图，堆是一个完全二叉树，存储成数组的形式，这时就相当于对树做层序遍历。另外，我们在做堆排序时，**根据升序降序我们分别把堆分成小顶堆和大顶堆**，小顶堆就是把较小的元素放在堆的顶部，反之，大顶堆就是把较大的元素放在堆的顶部。最后，要提到的一点是，当我们以数组形式存储堆时，**下标为i的结点的左右子节点的下标分别为2i+1和2i+2**。

**算法详解：** 

现在需要对如上二叉树做升序排序，总共分为三步：

1. 将初始二叉树转化为大顶堆（heapify）（实质是从第一个非叶子结点开始，**其下标 i = Math.floor(arr.length/2 - 1)** ，从下至上，从右至左，对每一个非叶子结点做shiftDown操作），此时根结点为最大值，将其与最后一个结点交换。
2. 除开最后一个结点，将其余节点组成的新堆转化为大顶堆（这里直接对根节点做shiftDown操作，并跟踪根节点的位置即可），此时根结点为次最大值，将其与最后一个结点交换。
3. 重复步骤2，直到堆中元素个数为1（或其对应数组的长度为1），排序完成。

**上代码：**
```
function shiftDown(arr, i, length) {
    for(let j = i * 2 + 1; j < length; j = 2 * j + 1) {
        if(j + 1 < length && arr[j + 1] > arr[j]) {
            j++;
        }
        if(arr[i] < arr[j]) {
            swap(arr, i, j);
            i = j;
        }else {
            break;
        }
    }
}

function dip(arr) {
    for(let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
        shiftDown(arr, i, arr.length - i);
    }
    for(let j = 0; j < arr.length; j++) {
        [arr[0], arr[arr.length - 1- j]] = [arr[arr.length - 1 - j], arr[0]];
        shiftDown(arr, 0, arr.length - j);
    }
}
```
