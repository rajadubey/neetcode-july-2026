class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
    const hash = Array(26).fill(0);
    const window = Array(26).fill(0);
    const n1 = s1.length;
    const n2 = s2.length;
    for (let i = 0; i <n1; ++i) {
        const c1 = s1.charCodeAt(i) - 97;
        const c2 = s2.charCodeAt(i) - 97;
        hash[c1]++;
        window[c2]++;
    }

    let i=0;
    let j=n1-1;
    for (let i = 0, j = n1 - 1;j<n2;) {
        let eq = true;
        for (let k = 0;k < 26; ++k) {
            if (hash[k] !== window[k]) {
                eq = false;
                break;
            }
        }
        if (eq) {
            return true;
        } else {
            window[s2.charCodeAt(i) - 97]--;
            i++,j++;
            window[s2.charCodeAt(j) - 97]++;
        }
    }
    return false;
}
}
