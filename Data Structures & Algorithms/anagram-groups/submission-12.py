class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        store = defaultdict(list)
        for word in strs:
            count = [0] * 26
            for letter in word:
                count[ord(letter)-ord("a")] += 1
            store[tuple(count)].append(word)
        res = []
        for key in store.keys():
            tmp = []
            for word in store[key]:
                tmp.append(word)
            res.append(tmp)
        return res