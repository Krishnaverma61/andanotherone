const button = document.querySelector('button');
const text = document.querySelector('h1');

button.addEventListener('click', () => {
    text.textContent = 'Alright , goodbye';
})