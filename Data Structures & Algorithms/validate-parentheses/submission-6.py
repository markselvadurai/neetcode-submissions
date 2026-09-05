class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closing = {'}',']',')'}
        opening = {'}':'{',']':'[',')':'('}
        if len(s) % 2 > 0:
            return False

        for i in range(len(s)):
            if s[i] in closing:
                if len(stack) > 0:
                    if stack.pop() != opening[s[i]]:
                        return False
                else:
                    return False
            else:
                stack.append(s[i])
        return stack == []
