// HTML 요소 선택
const canvas = document.getElementById('myChart');

// 차트 객체 생성
const ctx = canvas.getContext('2d');

// 레이블 (예: 월별로 1년 동안)
const labels = Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`);

// 데이터 (예: 임의의 수익률 데이터)
const dataPoints = Array.from({ length: 12 }, () => Math.floor(Math.random() * 40));

// 데이터
const data = {
    labels: labels, // X축 레이블
    datasets: [
        {
            label: '수익률', // 데이터셋 레이블
            data: dataPoints, // 데이터 값
            borderColor: 'blue', // 선 색상
            fill: false, // 선 아래 영역 채우지 않음
        },
    ],
};

// 옵션
const options = {
    responsive: true, // 차트 크기 자동 조정
    scales: {
        y: {
            beginAtZero: true, // Y축 시작 값 0으로 설정
            ticks: {
                callback: function (value, index, values) {
                    return value + '%'; // Y축 값에 '%' 문자 추가
                }
            },
        },
    },
};

// 차트 생성
const myChart = new Chart(ctx, {
    type: 'line', // 차트 유형 설정 (선 그래프)
    data: data,
    options: options,
});