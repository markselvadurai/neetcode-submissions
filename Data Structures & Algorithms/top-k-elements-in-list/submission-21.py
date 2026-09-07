class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        store = [[] for i in range(len(nums)+1)]
        count = defaultdict(int)
        for num in nums:
            count[num] = count.get(num,0)+1
        for num, count in count.items():
            store[count].append(num)
        res = []
        for i in range(len(nums), 0, -1):
            if not store[i]:
                continue
            for n in store[i]:
                res.append(n)
                if len(res) == k:
                    return res
