import Reward from './Reward';
import BonusNumberReward from './BonusReward';
import WinningLotto from './WinningLotto';

class LottoResult {
  static NEED_BONUS_NUMBER = (hasBonusNumber) => hasBonusNumber;

  static NO_NEED_BONUS_NUMBER = () => true;

  static REWARDS = [
    new Reward(6, 2_000_000_000),
    new BonusNumberReward(5, 30_000_000),
    new Reward(5, 1_500_000),
    new Reward(4, 50_000),
    new Reward(3, 5_000),
  ];

  constructor(winningNumbers, bonusNumber) {
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  findReward(lotto) {
    return (
      LottoResult.REWARDS.find((reward) => {
        const winningLotto = new WinningLotto(this.winningNumbers, this.bonusNumber);
        return reward.canReceive(lotto, winningLotto);
      }) ?? null
    );
  }

}

export default LottoResult;
