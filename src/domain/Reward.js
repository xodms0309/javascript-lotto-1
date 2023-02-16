class Reward {
  constructor(matchingNumbers, money) {
    this.matchingNumbers = matchingNumbers;
    this.money = money;
  }

  getMatchingNumber() {
    return this.matchingNumbers;
  }

  getMoney() {
    return this.money;
  }

  canReceive(lotto, winningLotto) {
    const winningNumbers = winningLotto.getLottoNumbers();
    return lotto.countMatchingNumbers(winningNumbers) === this.matchingNumbers;
  }

  getTitle() {
    return `${this.matchingNumbers}개 (${this.money}원)`;
  }
}

export default Reward;
