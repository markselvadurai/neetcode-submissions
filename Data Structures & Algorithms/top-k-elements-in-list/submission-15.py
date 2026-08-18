class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        store = [[] for i in range(len(nums))]
        tmp = defaultdict(int)
        for num in nums:
            tmp[num] += 1
        for num, count in tmp.items():
            store[count-1].append(num)
        i = len(nums)-1
        d = 0
        res = []
        while i >= 0:
            if store[i]:
                for num in store[i]:
                    res.append(num)
                    d += 1
                    if d == k:
                        return res
            # print(store,i,res)
            i -= 1

        return res