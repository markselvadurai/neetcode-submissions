class Solution:

    def encode(self, strs: List[str]) -> str:
        res = ""
        for s in strs:
            res += str(len(s))
            res += "$"
            res += s
        return res

    def decode(self, s: str) -> List[str]:
        # $5Hello$5World
        i = 0
        res = []
        while i < len(s):
            j = i
            while s[j] != "$":
                j += 1
            length = int(s[i:j])
            i = j+1
            j += length
            res.append(s[i:j+1])
            i = j+1
        return res
            


            