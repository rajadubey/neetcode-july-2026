class Solution {
    public int[] productExceptSelf(int[] nums) {
        int product = 1;
        int zero = 0;

        for (int num : nums) {
            if (num != 0) {
                product *= num;
            } else {
                zero++;
            }
        }

        int[] result = new int[nums.length];
        if (zero > 1) {
            return result;
        }
        for (int i = 0; i< nums.length;++i) {
            if (zero > 0) {
                result[i] = (nums[i] == 0) ? product : 0;
            } else {
                result[i] = product / nums[i];
            }
        }

        return result;
    }
}  
