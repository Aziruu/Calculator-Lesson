const nama = document.querySelector('.txt-nama')
const kelas = document.querySelector('.txt-kelas')
const butt = document.querySelector('.btn-cek')
const hello = document.querySelector('#input')
const result = document.querySelector('#res')

butt.addEventListener('click', () => {
    hello.textContent = nama.value
    result.textContent = kelas.value
})