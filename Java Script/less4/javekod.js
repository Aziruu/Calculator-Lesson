const sisi = document.querySelector('#sixi')
const btn = document.querySelector('#btn-tst')
const final = document.querySelector('#res')

btn.addEventListener('click',() => {
    let txt_sisi = sisi.value
    let hasil  = txt_sisi * 11
    
    final.innerHTML = (`Hasil kali 11 adalah ${hasil}`)
})