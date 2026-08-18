class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = [[] for i in range(len(nums)+1)]
        tmp = {}
        for n in nums:
            tmp[n] = 1 + tmp.get(n,0)
        for n, c in tmp.items():
            count[c].append(n)
        res = []
        for i in range(len(count)-1,0,-1):
            for n in count[i]:
                res.append(n)
            if len(res) == k:
                return res
