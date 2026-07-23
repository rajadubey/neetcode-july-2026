class Solution {
    String getKey(String str) {
        char[] arr = str.toCharArray();
        Arrays.sort(arr);
        return String.valueOf(arr);
    }
    boolean isAnagram(String s, String t) {
        return getKey(s).equalsIgnoreCase(getKey(t));
    }
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> map = new HashMap<>();

        /***
         *
         [act]: [act,cat]
         [opst]: [pots,tops,]   
        */

        for (String s : strs) {
            String key = getKey(s);
            // if (map.containsKey(key)) {
            //     map.get(key).add(s);
            // } else {
            //     map.put(key, List.of(s));
            // }
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }

        return new ArrayList<>(map.values());
    }
}
