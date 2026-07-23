class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.floor((left+right) / 2);
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        const tmpLeft = left;

        const res = this.searchCustom(nums, target, 0, tmpLeft - 1);
        if (res !== -1) {
            return res;
        }
        return this.searchCustom(nums, target, tmpLeft, nums.length - 1);
    }

    searchCustom(nums, target, left, right) {
        while (left <= right) {
            const mid = Math.floor((left+right) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}
