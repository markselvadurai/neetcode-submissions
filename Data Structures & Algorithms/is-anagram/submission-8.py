class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        i = 0
        store = defaultdict(int)
        storeB = defaultdict(int)
        print(store)
        for i in range(len(s)):
            store[s[i]] = store.get(s[i],0) + 1
            storeB[t[i]] = storeB.get(t[i],0) + 1
        return(store == storeB)