class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hSet = new Set(nums);
        let max = 0;
        for (let num of hSet) {
            if (hSet.has(num - 1)) continue;
            
            let length = 1;
            while (hSet.has(num + length)) {
                length++;
            }
            max = Math.max(max, length);
        }
        return max;
    }
}
