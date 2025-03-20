document.addEventListener('DOMContentLoaded', () => {
  let balance = 100;
  const balanceDisplay = document.getElementById('balance');
  const betAmountInput = document.getElementById('betAmount');
  const chosenNumberInput = document.getElementById('chosenNumber');
  const rollDiceBtn = document.getElementById('rollDice');
  const resetBalanceBtn = document.getElementById('resetBalance');
  const resultMessage = document.getElementById('resultMessage');

  const dice1 = document.getElementById('dice1');
  const dice2 = document.getElementById('dice2');

  function getMultiplier(number) {
      const probabilities = {
          2: 35, 3: 17, 4: 11, 5: 8,
          6: 7, 7: 6, 8: 7,
          9: 8, 10: 11, 11: 17, 12: 35
      };
      return probabilities[number] || 0;
  }

  function rollDice() {
      const betAmount = parseInt(betAmountInput.value);
      const chosenNumber = parseInt(chosenNumberInput.value);

      if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
          resultMessage.textContent = "❌ Invalid bet amount.";
          return;
      }

      if (isNaN(chosenNumber) || chosenNumber < 2 || chosenNumber > 12) {
          resultMessage.textContent = "❌ Choose a valid number between 2 and 12.";
          return;
      }

      const roll1 = Math.floor(Math.random() * 6) + 1;
      const roll2 = Math.floor(Math.random() * 6) + 1;
      const total = roll1 + roll2;

      dice1.textContent = `🎲 ${roll1}`;
      dice2.textContent = `🎲 ${roll2}`;

      if (total === chosenNumber) {
          const multiplier = getMultiplier(chosenNumber);
          const winnings = betAmount * multiplier;
          balance += winnings;
          resultMessage.textContent = `🎯 You won! Total rolled: ${total}. You earned ${winnings} DiceCoins!`;
      } else {
          balance -= betAmount;
          resultMessage.textContent = `❌ You lost! Total rolled: ${total}.`;
      }

      balanceDisplay.textContent = balance;
  }

  function resetBalance() {
      balance = 100;
      balanceDisplay.textContent = balance;
      resultMessage.textContent = "🔄 Balance reset to 100 DiceCoins.";
  }

  rollDiceBtn.addEventListener('click', rollDice);
  resetBalanceBtn.addEventListener('click', resetBalance);
});
