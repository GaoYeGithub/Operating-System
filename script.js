function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

const windows = document.querySelectorAll('.window');

windows.forEach(win => {
    const header = win.querySelector('.window-header');
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);

    function startDragging(e) {
        isDragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
    }

    function drag(e) {
        if (isDragging) {
            win.style.left = (e.clientX - offsetX) + 'px';
            win.style.top = (e.clientY - offsetY) + 'px';
        }
    }

    function stopDragging() {
        isDragging = false;
    }
    
    const closeWelcome = document.getElementById('close-welcome');
    closeWelcome.addEventListener('click', () => {
        document.getElementById('welcome-screen').style.display = 'none';
    });
    
    const closeBtn = win.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        win.style.display = 'none';
    });
});

// Date functionality
function updateDate() {
    const now = new Date();
    const dateString = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('date').textContent = dateString;
}

updateDate();
setInterval(updateDate, 1000 * 60 * 60); // Update every hour

// Music player functionality
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Welcome screen animations
const welcomeScreen = document.getElementById('welcome-screen');
const capybaraImg = welcomeScreen.querySelector('img');

capybaraImg.addEventListener('mouseover', () => {
    capybaraImg.style.transform = 'scale(1.1)';
});

capybaraImg.addEventListener('mouseout', () => {
    capybaraImg.style.transform = 'scale(1)';
});

// Randomly position welcome screen
function randomPosition(element) {
    const maxX = window.innerWidth - element.offsetWidth;
    const maxY = window.innerHeight - element.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

randomPosition(welcomeScreen);