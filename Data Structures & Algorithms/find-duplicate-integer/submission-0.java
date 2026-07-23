class Solution {
    public int findDuplicate(int[] nums) {
        Set<Integer> visited = new HashSet<>();
        for (int n : nums) {
            if (visited.contains(n)) return n;
            visited.add(n);
        }
        return -1;
    }
}
