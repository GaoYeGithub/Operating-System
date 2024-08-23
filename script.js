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