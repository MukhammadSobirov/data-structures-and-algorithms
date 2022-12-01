/*
 ! We’re given an array of daily stock prices (integers for simplicity). Return the buying and selling prices for making the maximum profit.
*/

const input = [1, 2, 3, 4, 3, 2, 1, 2, 5];

function buySellStock(prices: number[]) {
  if (!prices.length) {
    return;
  }

  let currentProfit = 0;
  let currentBuy = prices[0];
  let globalSell = prices[1];
  let globalProfit = globalSell - currentBuy;

  for (let i = 0; i < prices.length; i++) {
    currentProfit = prices[i] - currentBuy;

    if (currentProfit > globalProfit) {
      globalSell = prices[i];
      globalProfit = currentProfit;
    }

    if (prices[i] < currentBuy) {
      currentBuy = prices[i];
    }
  }

  return [globalSell - globalProfit, globalSell];
}

const result = buySellStock(input);

console.log(result);
