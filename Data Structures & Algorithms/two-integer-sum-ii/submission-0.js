class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let store = new Map;
        let j = numbers.length;
        for (let i = 0; i < j;) {
            let curr = numbers[i] + numbers[j];
            console.log(curr);
            if (curr == target) return [i+1,j+1];
            if (curr < target) i++;
            else j--;
        }
    }
}
