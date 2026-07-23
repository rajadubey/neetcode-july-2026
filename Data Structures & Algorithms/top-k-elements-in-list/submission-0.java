class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> mp = new HashMap<>();
        for (int n : nums) {
            mp.put(n, mp.getOrDefault(n, 0) + 1);
        }
        // top k values -> return keys list
        return mp.entrySet().stream()
        .sorted((a, b) -> b.getValue() - a.getValue())
        .mapToInt(Map.Entry::getKey)
        .limit(k)
        .toArray();
    }
}
