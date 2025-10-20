var maxProfit = function (prices) {
    if (prices.length <= 1) return 0;
    let minprice = prices[0];
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (minprice > prices[i]) {
            minprice = prices[i];
        } else {
            maxprofit = Math.max(maxprofit, prices[i] - minprice);
        }
    }
    return maxprofit;
};