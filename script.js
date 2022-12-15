const listItens = document.querySelectorAll('.list__item');
const arrows = document.querySelectorAll('span');

for(let item of listItens) {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
}