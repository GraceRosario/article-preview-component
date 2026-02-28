const shareBtn = document.querySelector(".share-button");
const card = document.querySelector(".card");
const cardFooter = document.querySelector(".card__footer");

shareBtn.addEventListener("click", (e) => {
  card.classList.toggle("card--share-active");
});

document.addEventListener("click", (e) => {
  if (!cardFooter.contains(e.target)) {
    card.classList.remove("card--share-active");
  } 
});

shareBtn.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        card.classList.remove('card--share-active')
    }
})
