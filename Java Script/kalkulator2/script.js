const nilai = document.querySelector("#angka")
const button = document.querySelector("#btn-tombol")

button.addEventListener("click", function () {
    console.log(nilai)
    nilai = nilai.value
    console.log(nilai)
})