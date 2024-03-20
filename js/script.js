/* Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// Cosa serve: 
// # Array vuoto in cui verranno inseriti i numeri casuali;
// # Array vuoto con i numeri inseriti dall'utente;
// # Array con i numeri indovinati;
// # Funzione random numbers;
// # Ciclo for per creare i box;
// # Ciclo While per generare i numeri causali non ripetuti;
// # Metodo includes() per verificare se il numero è presente nella lista;
// # metodo .push() per inseire i numeri dentro l'array;
// # funzione timeout per inserire timer di 30 sec;
// # innerHTML vuoto per svuotare il div con i numeri;
// # prompt o casella input per l'utente;
// # condizione if per stabilire se i numeri utente combaciano con i numeri generati;

let userNumberFirst = document.getElementById("input1");
let userNumberSecond = document.getElementById("input2");
let userNumberThird = document.getElementById("input3");
let userNumberFourth = document.getElementById("input4");
let userNumberFifth = document.getElementById("input5");
let button = document.getElementById ("button-play");

let userchoice = [];

let correctNumbers = []; 

function generateNumbers (){
    let randomNumber = [];
    let counter = 1;
    
    while (randomNumber.length < 5){
        let numbers = getRndInteger(1, 100);
        if (randomNumber.includes(numbers)){
            randomNumber.push(numbers);
        }
        counter++;
        console.log(randomNumber);
        
    }
    return randomNumber;
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}