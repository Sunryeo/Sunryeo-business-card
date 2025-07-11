let isFlipped = false;

function flipCard() {
    const cardFlipper = document.getElementById('cardFlipper');
    const buttonText = document.getElementById('buttonText');
    
    if (isFlipped) {
        cardFlipper.classList.remove('flipped');
        buttonText.textContent = '뒤집기 ↻';
    } else {
        cardFlipper.classList.add('flipped');
        buttonText.textContent = '앞면 보기 ↺';
    }
    
    isFlipped = !isFlipped;
}

// 페이지 로드 완료 후 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
    // 키보드 스페이스바로도 뒤집기 가능
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            event.preventDefault();
            flipCard();
        }
    });

    // 명함을 클릭해도 뒤집기 가능
    document.getElementById('cardFlipper').addEventListener('click', flipCard);
    
    // 이미지 로드 에러 처리
    const images = document.querySelectorAll('.card-image');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.backgroundColor = '#f0f0f0';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.alt = '이미지를 불러올 수 없습니다';
        });
    });
});