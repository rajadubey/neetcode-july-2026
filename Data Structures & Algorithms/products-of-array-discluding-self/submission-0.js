class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const ltrMul = nums.map(() => 1);
        const rtlMul = nums.map(() => 1);
        const n = nums.length;
        
        for (let i = 1; i < n; ++i) {
            ltrMul[i] = ltrMul[i - 1] * nums[i - 1];
        }

        for (let i = n - 2; i >= 0; --i) {
            rtlMul[i] = rtlMul[i + 1] * nums[i + 1];
        }

        const res = [];
        for (let i = 0; i < n; ++i) {
            res[i] = ltrMul[i] * rtlMul[i];
        }
        return res;
    }
}
