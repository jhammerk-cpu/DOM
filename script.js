const btn = document.querySelector('#clickButton');
let clickCount = 0;
btn.addEventListener('click', function() {
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
});

document.getElementById('HideClickCounter').addEventListener('click', () => {
      document.getElementById('counter').classList.toggle('hidden');
      document.getElementById('HideClickCounter').textContent = document.getElementById('counter').classList.contains('hidden') ? 'Show Click Counter' : 'Hide Click Counter';
  });

document.getElementById('input').addEventListener('input', function() {
    const typedText = document.getElementById('typedText');
    typedText.textContent = this.value;
});

document.getElementById('input').addEventListener('input', function() {
    const typedText = document.getElementById('typedText');
    typedText.textContent = this.value;
}   );

document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList').querySelector('ul');
    const newItem = document.createElement('li');
    newItem.textContent = itemInput.value;
    itemList.appendChild(newItem);
    itemInput.value = '';
});