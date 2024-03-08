const tombol = document.querySelector('#btn-id')
const min = document.querySelector('#btn-min')
const angka = document.querySelector('#value')

tombol.addEventListener('click', () => {
    angka.textContent = parseInt(angka.textContent) + 1; 
})
min.addEventListener('click', () =>  {
    angka.textContent = parseInt(angka.textContent) - 1;
})