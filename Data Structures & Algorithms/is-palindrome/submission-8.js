class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.replace(/[^a-z0-9]/gi, "");
        let i = 0;
        let j = str.length-1;
        while (i < j) {
            console.log(str[i],str[j]);
            if (str[i].toLowerCase() != str[j].toLowerCase()) {
                return false;
            }

            i++;
            j--;
        }
        return true;
    }
}
