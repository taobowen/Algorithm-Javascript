����һ����СΪ n �����飬�ҵ����е�������������ָ�������г��ִ������� n/2 ��Ԫ�ء�

����Լ��������Ƿǿյģ����Ҹ������������Ǵ���������

ʾ�� 1:

```
����: [3,2,3]
���: 3
```
ʾ�� 2:

```
����: [2,2,1,1,1,2,2]
���: 2
```
������������ַ�����
- ͨ���ֵ乹�����������ֳ��ִ�����һ��ӳ�䣬���ַ���ʱ�临�ӶȱȽ�С��������һ���Ŀռ临�Ӷȣ������ʼ�뵽�ķ���
- ���������飬Ȼ��ȡ�м��Ԫ�أ����ַ���ʱ�临�Ӷ��Դ󣬿ռ临�ӶȱȽ�С
- ���һ�ַ����Ƚ�����ռ�ʱ�临�Ӷȶ���С��ֱ���ϴ��룺
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var number=nums[0];
    var count=1;
    for(var i=1;i<nums.length;i++){
        if (number == nums[i])
		count++;
        else {
            count--;
            if (count == 0) {
                number = nums[i + 1];
            }
        }
    }
    return number;
};
```