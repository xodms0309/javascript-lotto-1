import BonusNumberReward from '../domain/BonusReward';

class LottoResultModal {
  constructor(receivedRewards, profitRate) {
    this.receivedRewards = receivedRewards;
    this.profitRate = profitRate;

    this.modal = document.getElementsByClassName('modal')[0];
    this.modalContainer = document.getElementsByClassName('modal-container')[0];
    this.closeButton = document.getElementById('close-button');
    this.closeButton.addEventListener('click', this.closeButtonHandler.bind(this));

    this.table = document.getElementById('result-table');
  }

  toggleModal() {
    this.modalContainer.classList.toggle('hidden');
  }

  render() {
    this.toggleModal();
    this.modalContainer.style.backgroundColor = `rgba(0, 0, 0, 0.5)`;
    this.renderTable();
    this.renderProfit();
  }

  renderTable() {
    this.table.insertAdjacentHTML(
      'afterbegin',
      `<thead>
    <tr>
      <th>일치 개수</th>
      <th>당첨금</th>
      <th>당첨 개수</th>
    </tr>
  </thead>`,
    );

    const resultTable = `<tbody>
    ${this.receivedRewards
      .reverse()
      .map(
        ({ reward, count }) => `
    <tr>
      <td>${reward.getMatchingNumber()}개 ${reward instanceof BonusNumberReward ? `+보너스볼` : ''}
      </td>
      <td>${reward.getMoney().toLocaleString()}</td>
      <td>${count}개</td>
    </tr>
    `,
      )
      .join('')}
      </tbody>`;

    this.table.insertAdjacentHTML('beforeend', resultTable);
  }

  renderProfit() {
    this.modal.insertAdjacentHTML(
      'beforeend',
      `<p id="profit-message">당신의 총 수익률은 ${this.profitRate}%입니다.</p>
      <button class="result-button">다시 시작하기</button>
      `,
    );
  }

  closeButtonHandler() {
    this.toggleModal();
  }
}

export default LottoResultModal;
