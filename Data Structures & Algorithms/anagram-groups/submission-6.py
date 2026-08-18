class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        store = defaultdict(list)
        for string in strs:
            count = [0]*26
            for letter in string:
                count[ord(letter)-ord('a')] += 1
            store[tuple(count)].append(string)
        res = []
        for item in store.values():
            tmp = []
            for word in item:
                tmp.append(word)
            res.append(tmp)
        print(store)
        return(res)