class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let max = 0;
        let set = new Set(s);

        set.forEach((c) => {
            let count = 0;
            let left = 0;

            for (let right = 0; right < s.length; ++right) {
                if (s[right] === c) count++;

                while(1) {
                    const target = right - left + 1 - count > k;
                    if (!target) break;
                    if (s[left] === c) count --;
                    left++;
                }

                max = Math.max(max, right-left+1);
            }
        });
        return max;
    }
}
