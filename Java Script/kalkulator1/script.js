let sisi = parseFloat(txt_sisi.value)
    luas.innerHTML = sisi*sisi
});const btn = document.querySelector('#btn-hitung')
const txt_sisi = document.querySelector('#line')
const luas = document.querySelector('.luas')

btn.addEventListener('click', function() {
    