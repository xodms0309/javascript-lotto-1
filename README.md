<h1 align="middle">🎱</h1>
<h2 align="middle">level1 - 행운의 로또</h2>
<p align="middle">자바스크립트로 구현 하는 로또 어플리케이션</p>

### 결과물: [행운의 로또 게임](https://xodms0309.github.io/javascript-lotto-1/dist/index.html/)


### 🚀 학습 목표
> 1. API 통신을 통한 비동기 통신
> 2. UX 개선
> 3. 관심사 분리


### 📝 1단계 기능 목록
콘솔 기반 로또 게임을 개발한다.
- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
  - 로또 번호는 오름차순으로 정렬하여 보여준다.
  - 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력한다.
- 당첨 통계를 출력한 뒤에는 재시작/종료 여부를 입력받는다.
  - 재시작할 경우 구입 금액 입력부터 게임을 다시 시작하고, 종료하는 경우 그대로 프로그램을 종료시킨다.
- 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.


### 📝 2단계 기능 목록
위의 기능을 웹으로 마이그레이션 한다.
  

### 💻 페어프로그래밍
|<img src="https://avatars.githubusercontent.com/u/55427367?v=4" width=150px> |<img src="https://avatars.githubusercontent.com/u/20203944?v=4" width=150px>|
|:---:|:---:|
|[타미](http://github.com/xodms0309)|[패트릭](http://github.com/solo5star)|

### 🌲 파일 구조
```
📦src
 ┣ 📂domain
 ┃ ┣ 📜BonusReward.js
 ┃ ┣ 📜Buyer.js
 ┃ ┣ 📜Lotto.js
 ┃ ┣ 📜LottoFactory.js
 ┃ ┣ 📜LottoResult.js
 ┃ ┣ 📜Reward.js
 ┃ ┗ 📜WinningLotto.js
 ┣ 📂styles
 ┃ ┗ 📜index.css
 ┣ 📂utils
 ┃ ┣ 📜Random.js
 ┃ ┗ 📜dom.js
 ┣ 📂view
 ┃ ┣ 📜LottoResultModal.js
 ┃ ┣ 📜MoneyInputView.js
 ┃ ┣ 📜PurchasedLottoView.js
 ┃ ┗ 📜WinningLottoInputView.js
 ┣ 📜LottoController.js
 ┣ 📜Validation.js
 ┣ 📜constants.js
 ┣ 📜step1-index.js
 ┗ 📜step2-index.js
```

