// XMLHttpRequest를 이용하여 HTTP 요청을 보내고 응답을 처리하는 함수
function getHttpRequest(url, callback) {
    var request = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성
    request.onreadystatechange = function () { // readystatechange 이벤트 핸들러
        if (request.readyState == 4) { // 데이터 전송이 완료되었는지 확인
            if (request.status == 200) { // HTTP 상태 코드가 200(성공)인지 확인
                // 요청이 정상적으로 처리된 경우 콜백 함수 실행
                callback(request.responseText);
            } else {
                // 에러가 발생한 경우 에러 메시지 출력
                console.error("HTTP request failed");
            }
        }
    }
    request.open('GET', url, true); // GET 메서드를 이용해 url로 HTTP 요청을 열기
    request.send(); // HTTP 요청을 보냄
}

// 부동산 데이터를 웹 페이지에 추가하는 함수
function addRealEstateDataToPage() {
    var url = '../assets/json/topRealEstate.json'; // JSON 파일의 URL

    getHttpRequest(url, function (responseText) { // HTTP 요청을 보내고, 응답을 처리
        var realEstates = JSON.parse(responseText); // 응답 텍스트를 JSON으로 파싱
        var container = document.querySelector('#nav-one-eg2 .gridContainer');  // 첫 번째 탭을 선택

        // 모든 부동산 데이터를 순회
        for (var i = 0; i < realEstates.length; i++) {
            var realEstate = realEstates[i]; // 현재 부동산

            // 이미지 엘리먼트 생성 및 속성 설정
            var imageElement = document.createElement('img');
            imageElement.src = realEstate.image;
            imageElement.className = 'img-fluid';
            imageElement.alt = 'Image Description';

            // 이름 엘리먼트 생성 및 속성 설정
            var nameElement = document.createElement('p');
            nameElement.textContent = realEstate.name;

            // 링크 엘리먼트 생성 및 속성 설정
            var linkElement = document.createElement('a');
            linkElement.href = '';
            linkElement.appendChild(imageElement);
            linkElement.appendChild(nameElement);

            // div 엘리먼트 생성 및 속성 설정
            var divElement = document.createElement('div');
            divElement.className = 'square';
            divElement.appendChild(linkElement);

            // div 엘리먼트를 컨테이너에 추가
            container.appendChild(divElement);
        }
    });
}

// 아트 데이터를 웹 페이지에 추가하는 함수
function addArtDataToPage() {
    var url = '../assets/json/topArt.json'; // JSON 파일의 URL

    getHttpRequest(url, function (responseText) { // HTTP 요청을 보내고, 응답을 처리
        var arts = JSON.parse(responseText); // 응답 텍스트를 JSON으로 파싱
        var container = document.querySelector('#nav-two-eg2 .gridContainer');  // 두 번째 탭을 선택

        // 모든 아트 데이터를 순회
        for (var i = 0; i < arts.length; i++) {
            var art = arts[i]; // 현재 아트

            // 이미지 엘리먼트 생성 및 속성 설정
            var imageElement = document.createElement('img');
            imageElement.src = art.image;
            imageElement.className = 'img-fluid';
            imageElement.alt = 'Image Description';

            // 이름 엘리먼트 생성 및 속성 설정
            var nameElement = document.createElement('p');
            nameElement.textContent = art.name;

            // 링크 엘리먼트 생성 및 속성 설정
            var linkElement = document.createElement('a');
            linkElement.href = '';
            linkElement.appendChild(imageElement);
            linkElement.appendChild(nameElement);

            // div 엘리먼트 생성 및 속성 설정
            var divElement = document.createElement('div');
            divElement.className = 'square';
            divElement.appendChild(linkElement);

            // div 엘리먼트를 컨테이너에 추가
            container.appendChild(divElement);
        }
    });
}

// 웹 페이지 로드 완료 시 함수를 실행
window.onload = function () {
    addRealEstateDataToPage();
    addArtDataToPage();
};
