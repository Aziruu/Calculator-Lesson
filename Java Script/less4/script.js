const txt_nama = document.querySelector('#nam')
const txt_nilai = document.querySelector('#value')
const btn_ceki = document.querySelector('#btn-cek')
const result = document.querySelector('#final')

btn_ceki.addEventListener('click', () => {
    let nama = txt_nama.value
    let nilai = txt_nilai.value

    if(nilai > 75 ) {
        result.innerHTML = (`selamat ${nama} kamu lulus ujian silahkan ujian`)
    }

    else{
        result.innerHTML = (`yahh maaf ${nama} kamu tidak lulus`)
    }
})