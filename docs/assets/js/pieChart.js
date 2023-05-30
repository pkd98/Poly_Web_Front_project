// HTML 요소 선택
const pieCanvas = document.getElementById('myPieChart');

// 차트 객체 생성
const pieCtx = pieCanvas.getContext('2d');

// 데이터
const pieData = {
    labels: ['주식', '채권', '현금', '부동산', '금'], // 각 섹션 레이블
    datasets: [
        {
            label: '자산 분포', // 데이터셋 레이블
            data: [30, 20, 10, 25, 15], // 각 섹션 값
            backgroundColor: [ // 각 섹션 색상
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ]
        },
    ],
};

// 옵션
const pieOptions = {
    responsive: true, // 차트 크기 자동 조정
};

// 차트 생성
const myPieChart = new Chart(pieCtx, {
    type: 'pie', // 차트 유형 설정 (파이 차트)
    data: pieData,
    options: pieOptions,
});