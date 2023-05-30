// 잔고 데이터
let balance = 1000.00;

// 잔고 HTML 요소 선택
const balanceElement = document.getElementById('balance');

// 잔고 표시
balanceElement.textContent = `$${balance.toFixed(2)}`;