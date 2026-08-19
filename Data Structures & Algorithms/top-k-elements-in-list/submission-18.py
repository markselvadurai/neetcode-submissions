class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        store = [[] for i in range(len(nums))]
        count = defaultdict(int)
        for num in nums:
            count[num] = count.get(num, 0)+1
        for num, count in count.items():
            store[count-1].append(num)
        res = []
        for i in range(len(store) -1, -1, -1):
            if store[i] == []:
                continue
            for item in store[i]:
                res.append(item)
                k -= 1
            if k == 0:
                return res

