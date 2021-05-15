/**
 * @param {number[]} nums
 * @return {number[]}
 */

 function mergeArr (arr1, arr2) {
    let output = [],
        index1 = 0,
        index2 = 0;

    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            output.push(arr1[index1]);
            index1 ++;
        } else {
            output.push(arr2[index2]);
            index2 ++;
        }
    }

    if (index1 < arr1.length) {
        output.push(...arr1.slice(index1));
    } else if (index2 < arr2.length) {
        output.push(...arr2.slice(index2));
    }

    console.log(arr1, arr2)

    return output;
}

var sortArray = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }

    let midIndex = Math.floor(nums.length / 2);
        leftArr = sortArray(nums.slice(0, midIndex)),
        rightArr = sortArray(nums.slice(midIndex));
    
    console.log(leftArr, rightArr)

    return mergeArr(leftArr, rightArr);
};