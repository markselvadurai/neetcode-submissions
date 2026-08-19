class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        store = defaultdict(list)
        for s in strs:
            tmp = [0]*26
            for l in s:
                tmp[ord(l)-ord('a')] += 1
            store[tuple(tmp)].append(s)
        res = []
        for key in store.keys():
            tmp = []
            for word in store[key]:
                tmp.append(word)
            res.append(tmp)
        return res