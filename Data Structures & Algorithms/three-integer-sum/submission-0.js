class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const len = nums.length;

        const res = [];
        for (let i = 0;i<len - 2; ++i) {
            if (i > 0 && nums[i] === nums[i-1]) continue;

            let j = i + 1;
            let k = len -1;

            while (j<k) {
                const sum = nums[i] + nums[j] + nums[k];

                if (sum > 0) k--;
                else if (sum < 0) j++;
                else {
                    res.push([nums[i], nums[j], nums[k]]);
                    j++;

                    while (j < k && nums[j] === nums[j-1]) {
                        j++;
                    }

                }
            }
        }
        return res;
    }
}
