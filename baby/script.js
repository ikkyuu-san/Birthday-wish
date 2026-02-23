let currentSection = 0;
const sections = ['welcome', 'album', 'letter', 'present'];

function openGift() {
    nextSection();
}

function sayNo() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('retry').style.display = 'block';
}

function showQuestion() {
    document.getElementById('retry').style.display = 'none';
    document.getElementById('question').style.display = 'block';
}

function nextSection() {
    document.getElementById(sections[currentSection]).classList.remove('active');
    currentSection++;
    if (currentSection < sections.length) {
        document.getElementById(sections[currentSection]).classList.add('active');
    }
}

function restart() {
    document.getElementById(sections[currentSection]).classList.remove('active');
    currentSection = 0;
    document.getElementById(sections[currentSection]).classList.add('active');
}

// Create floating hearts dynamically
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '✨', '🌟'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.animation = `float ${Math.random() * 3 + 4}s linear`;
        heart.style.opacity = '0';
        heart.style.filter = 'drop-shadow(0 0 10px rgba(255, 107, 157, 0.8))';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 600);
}

// Initialize
window.addEventListener('load', () => {
    createFloatingHearts();
});
