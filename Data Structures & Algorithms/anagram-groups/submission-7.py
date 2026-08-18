class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        store = defaultdict(list)
        for word in strs:
            tmp = [0]*26
            for let in word:
                tmp[ord(let)-ord('a')] += 1
            store[tuple(tmp)].append(word)
        res = []
        for l in store.values():
            res.append(l)
        return res
