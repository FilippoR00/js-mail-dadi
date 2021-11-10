const email = ["example@gmail.com", "pippo@gmail.com", "putin@gmail.com", "cristina@boolean.it"];

const userMail = prompt("Inserisci la tua email:");

//variabile di controllo
let check = 0;

//ciclo per scorrere l'array
for(let i = 0; i < email.length; i++){
    if(userMail == email[i]){
        check = 1;
    }
}

//controllo e redirect
if(check == 1){
    alert("congratulazioni puoi accedere al gioco");
} else {
    alert("accesso non autorizzato");
    window.location.replace('https://trollface.dk/');
}

//variabili gioco dadi
let computer;
let user;

const roll = document.getElementById("roll");

roll.addEventListener("click", function(){
    //genero dei numeri randoma da 1 a sei e li arrotondo
    computer = (Math.random() * 6)
    computer = Math.ceil(computer);
    console.log(computer);
    user = (Math.random() * 6);
    user = Math.ceil(user);
    console.log(user);

    //stampo il dado dell'utente
    switch (user) {
        case 1:
            document.getElementById("dado-user").innerHTML = `<i class="fas fa-dice-one"></i>`
            break;
        case 2:
            document.getElementById("dado-user").innerHTML = `<i class="fas fa-dice-two"></i>`
            break;
        case 3:
            document.getElementById("dado-user").innerHTML = `<i class="fas fa-dice-three"></i>`
            break;
        case 4:
            document.getElementById("dado-user").innerHTML = `<i class="fas fa-dice-four"></i>`
            break;
        case 5:
            document.getElementById("dado-user").innerHTML = `<i class="fas fa-dice-five"></i>`
            break;
        case 6:
            document.getElementById("dado-user").innerHTML = `<i class="fas fa-dice-six"></i>`
            break;
    }

    //stampo il dado dell'computer
    switch (computer) {
        case 1:
            document.getElementById("dado-computer").innerHTML = `<i class="fas fa-dice-one"></i>`
            break;
        case 2:
            document.getElementById("dado-computer").innerHTML = `<i class="fas fa-dice-two"></i>`
            break;
        case 3:
            document.getElementById("dado-computer").innerHTML = `<i class="fas fa-dice-three"></i>`
            break;
        case 4:
            document.getElementById("dado-computer").innerHTML = `<i class="fas fa-dice-four"></i>`
            break;
        case 5:
            document.getElementById("dado-computer").innerHTML = `<i class="fas fa-dice-five"></i>`
            break;
        case 6:
            document.getElementById("dado-computer").innerHTML = `<i class="fas fa-dice-six"></i>`
            break;
    }

    //stampo se l'utente ha vinto o perso
    if(user > computer){
        document.getElementById("result").innerHTML = "Hai vinto!!!! Congratulazioni."
    } else if(user < computer) {
        document.getElementById("result").innerHTML = "Hai Perso. Ritenta e sarai più fortunato."
    } else {
        document.getElementById("result").innerHTML = "Pareggio. Premi il pulsante e ritira il dado"
    }

});



