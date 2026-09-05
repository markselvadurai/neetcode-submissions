class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # i,j max(top,j-i) if i > j, move i to j and j + 1. 10,1 -> 1,5
        # i < j, move j up - keep i. and loop. makes sure i is always at the lowest number.
        i = 0
        j = 1
        top = 0
        while (j < len(prices)):
            iVal = prices[i]
            jVal = prices[j]
            top = max(top,prices[j]-prices[i])
            if iVal > jVal:
                i = j
            j += 1
        return top
