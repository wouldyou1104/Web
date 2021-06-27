const toggleBtn = document.querySelector('.toogleBtn');
const content = document.querySelector('.content');

toggleBtn.addEventListener('click', () => {
    content.classList.toggle('active');
});