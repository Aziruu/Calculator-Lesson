const btn = document.querySelector('#btn-hitung')
const txt_alas = document.querySelector('#als')
const txt_tinggi = document.querySelector('#tg')
const luas = document.querySelector('.luas')

btn.addEventListener('click', function() {
    let alas = parseFloat(txt_alas.value)
    let tinggi = parseFloat(txt_tinggi.value)
    luas.innerHTML = 1/2*alas*tinggi
});

const bte = document.querySelector('#btn-cont')
const txt_sisi = document.querySelector('#ss')
const luad = document.querySelector('.luad')

bte.addEventListener('click', function() {
    let sisi = parseFloat(txt_sisi.value)
    luad.innerHTML = sisi*sisi
});