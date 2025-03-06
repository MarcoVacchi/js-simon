// funzione contatore;
let count = 10;
const formElement = document.getElementById("answers-form");


let countDownElement = setInterval (function (){

    count--;
    if (count === 0) {
        console.log("Sei arrivato a 0");
        numbersListElement.className = "d-none";
        formElement.className = "d-block";
        clearInterval(countDownElement);
    }
    countElementValue = document.getElementById("countdown").innerHTML = `${count}`;

}, 1000);


// funzione mathrandom che mi restituisce 5 numeri random (numeri da 1 a 50);

    const numbersListElement = document.getElementById("numbers-list");

    let myNumber1 = randomNumber ();
    let myNumber2 = randomNumber ();
    let myNumber3 = randomNumber ();
    let myNumber4 = randomNumber ();
    let myNumber5 = randomNumber ();
    
    numbersListElement.innerHTML = 
    `<li>${myNumber1}<li>
     <li>${myNumber2}<li>
     <li>${myNumber3}<li>
     <li>${myNumber4}<li>
     <li>${myNumber5}<li>`;

  //  numbersListElement.innerHTML = `<li>${myNumbermath}`;

  function randomNumber (){
    return Math.floor(Math.random() * 50) + 1;
 }

 // funzione per inserire i dati quando il contatore arriva a 0 e cambia schermata

// funzione per inserire i dati quando il contatore arriva a 0 e cambia schermata
const saveNumberElements = document.querySelectorAll(".form-control");
const messageElement = document.getElementById("message");
//console.log(messageElement);

formElement.addEventListener('submit', function (e) {
    e.preventDefault();

    const checkNumbers = [myNumber1, myNumber2, myNumber3, myNumber4, myNumber5];

    let newCheckNumbers = [];

    // Ciclo for per iterare sugli elementi
    for (let i = 0; i < saveNumberElements.length; i++) {

        let resultNumber = parseInt(saveNumberElements[i].value);

        
        if (checkNumbers.includes(resultNumber)) {
            newCheckNumbers.push(resultNumber); 
        }
    }

    // Aggiorna il messaggio
    if (newCheckNumbers.length > 0) {
        messageElement.innerHTML = `Hai indovinato ${newCheckNumbers.length} numeri! (${newCheckNumbers})`;
    } else {
        messageElement.innerHTML = "Hai indovinato 0 numeri!";
    }
});
    
   
   
