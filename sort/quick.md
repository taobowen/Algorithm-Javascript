## 思想
&emsp;&emsp;快速排序算法的思想类似于二分法，每次都是在数组中选择一个基数（可以是任意一个位置的数，不过一般选择中间的数字或者最左边的数字），每一轮结束后，比该基数小的数都位于该基数的左边，比该基数大的数都位于该基数的右边。然后再分别对基数左边和右边的数组进行相同的操作，直到数组中只有一个元素时，返回该数组。
## 上代码：
### 取最左元素作为基数：
```
function quickSort(arr, i, j) {
    if(i > j)
        return;
    let pivotIndex = i;
    let leftIndex = i;
    let rightIndex = j;
    while(leftIndex < rightIndex) {
        while(arr[rightIndex] >= arr[pivotIndex] && leftIndex < rightIndex) {
            rightIndex--;
        }
        while(arr[leftIndex] <= arr[pivotIndex] && leftIndex < rightIndex) {
            leftIndex++;
        }
        [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
    }
    [arr[leftIndex], arr[pivotIndex]] = [arr[pivotIndex], arr[leftIndex]];
    quickSort(arr, i, leftIndex - 1);
    quickSort(arr, leftIndex + 1, j);
    return arr;
}
```
