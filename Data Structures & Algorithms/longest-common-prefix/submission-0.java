class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 1) return strs[0];
        Arrays.sort(strs);
        int n = strs.length;
        int minSize = Math.min(strs[0].length(), strs[n - 1].length());

        for (int i = 0; i < minSize; i++) {
            char c = strs[0].charAt(i);
            char j = strs[n - 1].charAt(i);
            if (c != j) {
                return strs[0].substring(0, i);
            }
        }
        return strs[0];
    }
}