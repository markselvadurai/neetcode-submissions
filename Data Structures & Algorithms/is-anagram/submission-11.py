class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        storeS = defaultdict(int)
        storeT = defaultdict(int)    
        for i in range(len(s)):
            storeS[s[i]] = storeS.get(s[i],0) + 1
            storeT[t[i]] = storeT.get(t[i],0) + 1
        return storeS == storeT
