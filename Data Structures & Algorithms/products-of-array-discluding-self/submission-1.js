class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        /*
            [1,2,4,6]
            [48,24,6,1] -> multiplying each number to the right
            [1,2,4,6]
            [1,1,2,8] -> multiplying numbers to the left based off original
            [48,24,12,8] -> result: multiplying the two arrays.
         */
        let toRight = []
        for(let i in nums) {
            let j = i;
            let product = 1;
            while (j < nums.length) {
                if (j == i) {j++; continue};
                product *= nums[j];
                j ++;
            }
            toRight.push(product);
            product = 1;
        }
        let x = nums.length-1;
        while ( x > -1 ) {
            let y = x;
            let product = 1;
            while (y > -1) {
                if (x == y) {y--; continue};
                product *= nums[y];
                y --;
            }
            nums[x] = product;
            product = 1;
            x --;
        }
        return nums.map((n, i) => n * toRight[i]);
    }
}
