class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return t;

        let hash = {};
        let window = {};
        for (const c of t) {
            hash[c] = (hash[c] || 0) + 1;
        }

        let foundCount = 0;
        let expectedCount = Object.keys(hash).length;

        let index = [-1, -1];
        let len = Infinity;

        let left = 0;
        for (let right = 0; right < s.length; ++right) {
            let char = s[right];
            window[char] = (window[char] || 0)+1;

            if (hash[char] && hash[char] === window[char]) {
                foundCount++;
            }

            while (foundCount === expectedCount) {
                if (right - left + 1 < len) {
                    len = right - left + 1;
                    index = [left, right];
                }

                window[s[left]]--;

                if (hash[s[left]] && window[s[left]] < hash[s[left]]) {
                    foundCount--;
                }

                left++;
            }
        }
        if (len === Infinity) return '';
        return s.slice(index[0], index[1] + 1);
    }
}
