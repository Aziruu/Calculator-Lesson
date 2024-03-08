const counter_txt = document.querySelector('.label-counter')
let counter = parseInt(counter_txt.textContent)
let limit = counter_txt.value

let timer = setInterval(() => {
    counter_txt.textContent = ++counter;

    console.log(counter_txt.textContent)

    //counter = counter == 5 ? 0 : +counter
    counter_txt.textContent = counter;
    if(counter == 10) clearInterval(timer)
},1000)


//alert(counter_txt.textContent)
//confirm(counter_txt.textContent)