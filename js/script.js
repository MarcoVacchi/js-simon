// funzione contatore;
let count = 10;

let countDownElement = setInterval (function (){


    count--;
    if (count === 0) {
        console.log("Sei arrivato a 0");
        numbersListElement.className = "d-none";
        clearInterval(countDownElement);
    }
    countElementValue = document.getElementById("countdown").innerHTML = `${count}`;


}, 1000);


// funzione mathrandom che mi restituisce 5 numeri random (numeri da 1 a 50);

    const numbersListElement = document.getElementById ("numbers-list");
    
    
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
    return Math.floor(Math.random() * 50) + 1
 }
  
