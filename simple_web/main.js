const toggleBtn = document.querySelector('.navbar_toogleBtn');
const content = document.querySelector('.navbar_content');
const sns = document.querySelector('.navbar_sns');

toggleBtn.addEventListener('click', () => {
    content.classList.toggle('active');
    sns.classList.toggle('active');
});