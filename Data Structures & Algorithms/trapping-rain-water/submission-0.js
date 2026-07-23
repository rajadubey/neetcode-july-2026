class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let lMax = height[0];
        let rMax = height[height.length - 1];

        let i = 0;
        let j = height.length - 1;
        let sum = 0;
        while (i < j) {
            if (lMax<=rMax) {
                const cal = lMax - height[i];
                sum+=cal;
                lMax = Math.max(lMax, height[++i]);
                // ++i;
            } else {
                const cal = rMax - height[j];
                sum+=cal;
                rMax = Math.max(rMax, height[--j]);
                // --j;
            }
        }
        return sum;
    }
}
