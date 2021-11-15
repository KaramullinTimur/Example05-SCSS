const items = document.querySelectorAll('.services__item');
const texts = document.querySelectorAll('.services__text');

for(let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        items.forEach(item => {
            item.classList.remove('services__item--active');
        })
        items[i].classList.add('services__item--active');

        texts.forEach(item => {
            item.classList.remove('services__text--active');
        })
        texts[i].classList.add('services__text--active');
    })
}
