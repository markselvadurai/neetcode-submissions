class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        store = defaultdict(list)
        for s in strs:
            count = [0]*26
            for l in s:
                count[ord(l)-ord('a')] += 1
            store[tuple(count)].append(s)
        res = []
        for key, string in store.items():
            res.append(string)
        return res
        