class Solution:
    def isPalindrome(self, s: str) -> bool:
        j = len(s)-1
        i = 0
        while i < j:
            if (s[i].isalnum() == False):
                i += 1
                continue
            if (s[j].isalnum() == False):
                j -= 1
                continue
            if s[i].upper() == s[j].upper():
                i += 1
                j -= 1
            else:
                print(s[i],s[j])
                return False
        return True