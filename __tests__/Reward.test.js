import Lotto from '../src/domain/Lotto';
import Reward from '../src/domain/Reward';
import WinningLotto from '../src/domain/WinningLotto';

describe('Reward 클래스에 대한 테스트 작성', () => {
  test('로또가 주어졌을 때 Reward에 자격이 있는 지 검사한다.', () => {
    // given
    const lotto = new Lotto([1, 2, 3, 4, 7, 45]);
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);

    const matchingNumbers = 4;
    const money = 30_000;
    const reward = new Reward(matchingNumbers, money);

    // when
    const canReceiveReward = reward.canReceive(lotto, winningLotto);

    // then
    expect(canReceiveReward).toBeTruthy();
  });
});