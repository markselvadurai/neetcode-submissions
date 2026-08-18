class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        store = defaultdict(list)
        for word in strs:
            count = [0]*26
            for letter in word:
                count[ord(letter)-ord('a')] += 1
            store[tuple(count)].append(word)
        res = []
        print(store)
        for v in store.values():
            tmp = []
            for i in v:
                tmp.append(i)
            res.append(tmp)
        return res
        