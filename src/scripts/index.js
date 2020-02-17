// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const modal = document.querySelector('#myModal');
const closeModal = document.querySelector('.close');

let promiseOfModal = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(modal);
    }, 60000);
});

promiseOfModal.then(value => {
    value.style.display = 'block';
})

closeModal.addEventListener('click', () => myModal.style.display = 'none');
