class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;

        let max = 0;
        const stack = [];
        for (let i = 0; i <= n; ++i) {
            // let tmpHeight = Infinity;
            // for (let j = i; j < n; ++j) {
            //     tmpHeight = Math.min(tmpHeight, heights[j]);

            //     const width = j - i + 1;
            //     const newArea = tmpHeight * width;

            //     max = Math.max(newArea, max);
            // }

            const tmpHeight = i === n ? 0 : heights[i];
            // const sn = stack.length;
            // const isTmpMin = tmpHeight < heights[stack[stack.length - 1]];
            while (stack.length > 0 && tmpHeight < heights[stack[stack.length - 1]]) {
                const height = heights[stack.pop()];
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                max = Math.max(max, height * width);
            }
            stack.push(i);
        }
        return max;
    }
}
