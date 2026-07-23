class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxVal = 0;
        while (left < right) {
            const cal = right - left;
            const minHold = Math.min(heights[left], heights[right]);
            const cur = cal * minHold;

            maxVal = Math.max(cur, maxVal);

            if (heights[left] < heights[right]) left++;
            else right--;
        }
        return maxVal;
    }
}
