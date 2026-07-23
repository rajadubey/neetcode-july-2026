class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;

        let max = 0;

        for (let i = 0; i < n; ++i) {
            let tmpHeight = Infinity;
            for (let j = i; j < n; ++j) {
                tmpHeight = Math.min(tmpHeight, heights[j]);

                const width = j - i + 1;
                const newArea = tmpHeight * width;

                max = Math.max(newArea, max);
            }
        }
        return max;
    }
}
