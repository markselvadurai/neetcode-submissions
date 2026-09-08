class Solution:
    def maxArea(self, heights: List[int]) -> int:
        res = 0
        l, r = 0, len(heights)-1
        while l < r:
            lower = min(heights[l],heights[r])
            res = max(res,lower*(r-l))
            if heights[l] == lower:
                l += 1
            else:
                r -= 1
        return res