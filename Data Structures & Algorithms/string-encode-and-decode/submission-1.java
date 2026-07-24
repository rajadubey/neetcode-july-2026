class Solution {

    public String encode(List<String> strs) {
        StringBuilder encoded = new StringBuilder();
        for (String str : strs) {
            encoded.append(str.length()).append('#').append(str);
        }
        return encoded.toString();
    }

    public List<String> decode(String s) {
        List<String> decoded = new ArrayList<>();
        int i = 0;

        while (i < s.length()) {
            int delimiterIndex = s.indexOf('#', i);

            int length = Integer.parseInt(s.substring(i, delimiterIndex));

            int start = delimiterIndex + 1;
            String str = s.substring(start, start + length);

            decoded.add(str);

            i = start + length;
        }
        return decoded;
    }
}
