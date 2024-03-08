const nama = document.querySelector('.txt-nama')
const butt = document.querySelector('.btn-cek')
const hello = document.querySelector('#input')

butt.addEventListener('click', () => {
    hello.textContent = nama.value
})