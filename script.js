
// const tooltip = document.querySelector('.card__tooltip');
// const userInfo = document.querySelector('.card__user-info');
const shareBtn = document.querySelector('.share-button');
const card = document.querySelector('.card');

shareBtn.addEventListener('click', (e) => {
    card.classList.toggle('card--share-active')
});