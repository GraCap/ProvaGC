// JavaScript source code


function BackToHome() {
    window.location.href = "Home.html";     //ritorno alla home
}

function Change() {     //dovrebbe abilitare e disabilitare il button all'occorrenza
    
    let inputs = document.querySelectorAll(".input");
    let button = document.querySelector(".buttonSub");
    button.disabled = "";
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            button.disabled = false;   //lo abilito dopo aver riempito i campi
            break;
        }
    }
}

function SubscribeCompleted() {
    alert("Sottoscrizione effettuata correttamente!");
}

function Subscribe() {  //salva il nome utente effettuando la sottoscrizione

    let storageLocale = ("localStorage" in window && window["localStorage"] != null) ? window["localStorage"] : null;
    let utente = document.getElementById("utente").value;
    storageLocale.setItem('Account', utente);
}

function UnsubscribeSuccedeed() {
    alert("Sottoscrizione annullata correttamente!");
    
}

function Unsubscribe() {        //rimuove utente dal local storage
    localStorage.removeItem('Account');
}

function Welcome() {
    let storage = window["localStorage"];
    let utente = storage.getItem("Account");   //recupero l'utente dal localstorage
    if (utente == null) {
        alert("Benvenuto nuovo utente!");
    } else {
        alert("Benvenuto " + utente);
    }
}