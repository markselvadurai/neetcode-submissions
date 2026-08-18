class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        lis = [[] for i in range(len(nums) + 1)]
        dic = {}
        for num in nums:
            dic[num] = 1 + dic.get(num,0)
        for num, count in dic.items():
            lis[count].append(num)
        print(lis)
        res = []
        for i in range(len(lis)-1,0,-1):
            for n in lis[i]:
                res.append(n)
            if len(res) == k:
                return res
        