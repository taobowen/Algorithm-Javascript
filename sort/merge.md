### 思想
&emsp;&emsp;这是一种分治算法。将原始数组切分成较小的数组，直到每个小数组只有一项，然后在将小数组归并为排好序的较大数组，直到最后得到一个排好序的最大数组。
### 上代码：
```
function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid, arr.length);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    let answer = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if(leftArr[leftIndex] > rightArr[rightIndex]) {
            answer.push(rightArr[rightIndex]);
            rightIndex++;
        }else {
            answer.push(leftArr[leftIndex]);
            leftIndex++;
        }
    }
    while(leftIndex < leftArr.length) {
        answer.push(leftArr[leftIndex]);
        leftIndex++;
    }
    while(rightIndex < rightArr.length) {
        answer.push(rightArr[rightIndex]);
        rightIndex++;
    }
    return answer;
}
```