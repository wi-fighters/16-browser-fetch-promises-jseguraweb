// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

let modal = new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 60000);
});

modal.then(() => {
    let myModal = document.querySelector('#myModal');
    let closeModal = document.querySelector('.close');
    myModal.style.display = 'block';
    closeModal.addEventListener('click', () => myModal.style.display = 'none');
})

