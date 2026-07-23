class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        PriorityQueue<int[]> queHeap = new PriorityQueue<>((a, b) -> b[0] - a[0]);

        int[] result = new int[nums.length - k + 1];
        int index = 0;

        for (int i = 0; i < nums.length; ++i) {
            queHeap.offer(new int[]{nums[i], i});
            if (i >= k - 1) {
                while (queHeap.peek()[1] <= i - k) {
                    queHeap.poll();
                }
                result[index] = queHeap.peek()[0];
                index++;
            }
        }
        return result;
    }
}
