const btn = document.querySelector('#clickButton');
let clickCount = 0;
btn.addEventListener('click', function() {
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
});

document.getElementById('HideClickCounter').addEventListener('click', () => {
      document.getElementById('counter').classList.toggle('hidden');
  });

