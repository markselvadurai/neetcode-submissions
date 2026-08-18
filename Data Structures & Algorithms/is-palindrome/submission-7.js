class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.replace(/[^a-z0-9]/gi, "");
        let j = str.length-1;
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i].toLowerCase() != str[j].toLowerCase()) {
                return false;
            }
            j--;
        }
        return true;
    }
}
