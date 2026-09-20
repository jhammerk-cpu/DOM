const btn = document.querySelector('#clickButton');
let clickCount = 0;
btn.addEventListener('click', function() {
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
});