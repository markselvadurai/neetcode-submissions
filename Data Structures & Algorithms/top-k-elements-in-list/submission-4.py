class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        l = [[] for i in range(len(nums)+1)]
        count = {}
        for num in nums:
            count[num] = 1 + count.get(num,0)
        for n, c in count.items():
            l[c].append(n)
        res = []
        for i in range(len(l)-1,0,-1):
            for n in l[i]:
                res.append(n)
            if len(res) == k:
                return res
