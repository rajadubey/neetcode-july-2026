class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        //if (arr.length % 2 !== 0) return false;

        let i = 0;
        let j = arr.length - 1;
        while (j > i) {
            if (arr[i] !== arr[j]) return false;
            j--;
            i++;
        }
        return true;
    }
}
