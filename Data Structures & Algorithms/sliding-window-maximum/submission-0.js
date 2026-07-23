class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = [];

        for (let i = 0; i <= nums.length - k; i++) {
            let localMax = nums[i];

            for (let j = i; j < i + k; ++j) {
                localMax = Math.max(localMax,nums[j]);
            }
            res.push(localMax);
        }
        return res;
    }
}
