
let count = 10;

let countDownElement = setInterval (function (){


    count--;
    if (count === 0) {
        console.log("Sei arrivato a 0");
        clearInterval(countDownElement);
    }
    countElementValue = document.getElementById("countdown").innerHTML = `${count}`;



}, 1000);