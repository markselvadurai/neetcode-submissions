class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        matches = {'}':'{',']':'[',')':'('}
        
        for b in s:
            if b in matches:
                if stack and stack[-1] == matches[b]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(b)
        return stack == []
