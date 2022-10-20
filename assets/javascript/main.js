/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

Sottoproblemi
{
    -n° km
    -età
    -costante prezzo 0.21 €/km
    -Minorenni
    {
        20% Sconto
    }
    -Maggiorenni
    {
        Nessuno sconto :'(
    }
    -Over 65
    {
        40% Sconto
    }
}
    
*/

// function calcoloPagamento()
// {

//     let nChilometri = parseFloat(document.getElementById('numeroChilometri').value);
//     let etaPasseggero = parseFloat(document.getElementById('etaPasseggero').value);
//     let prezzoBiglietto = parseFloat(0.21) * nChilometri;
//     let sconto;
//     let prezzoTotale;

//     // ________________ IF Minorenne ________________
//     if(etaPasseggero < 18)
//     {
//         sconto = prezzoBiglietto * 0.20;
//         prezzoTotale = prezzoBiglietto - sconto;
//     }
//     // ________________ IF Maggiorenne ________________
//     else if(etaPasseggero >= 65)
//     {
//         sconto = prezzoBiglietto * 0.40;
//         prezzoTotale = prezzoBiglietto - sconto;
//     }
//     // ________________ IF Over65 ________________
//     else
//     {
//         prezzoTotale = prezzoBiglietto;
//     }

//     prezzoTotale = parseFloat(prezzoTotale).toFixed(2);
//     sconto = parseFloat(sconto).toFixed(2);

//     if(etaPasseggero < 18 || etaPasseggero >= 65)
//     {
//         document.getElementById('risultatoSconto').innerHTML = `Hai risparmiato ben: ${sconto} &euro;`;
//     }


//     // console.log('prezzoTotale')
//     document.getElementById('risultatoPrezzo').innerHTML = `Prezzo Totale: ${prezzoTotale} &euro;`;

// }

// var x = document.getElementById("risultatoSconto");
//     x.style.display = "none";

// function displayswitch()
// {


//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
// }

// ---------------------------------------------------------------------------


// Scrivere un programma che chieda all’utente:
// - Nome e cognome
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
function generaBiglietto() {
    console.log('Ciao');

    let inputUtente = document.getElementById('inputUtente').value;
    let inputKm = document.getElementById('inputKm').value;
    let inputEta = document.getElementById('inputEta').value;
    console.log(inputUtente, inputKm, inputEta);

    let prezzoBiglietto = 0.21 * parseInt(inputKm);
    let sconto;
    let prezzoTotale;

    // ________________ IF Minorenne ________________
    if (inputEta == 'Minorenne') {
        sconto = prezzoBiglietto * 0.20;
        prezzoTotale = prezzoBiglietto - sconto;
    }
    // ________________ IF Maggiorenne ________________
    else if (inputEta == 'Over 65') {
        sconto = prezzoBiglietto * 0.40;
        prezzoTotale = prezzoBiglietto - sconto;
    }
    // ________________ IF Over65 ________________
    else {
        prezzoTotale = prezzoBiglietto;
        sconto = 0;
    }

    // Conversione String > Float (2 decimali)
    prezzoTotale = parseFloat(prezzoTotale).toFixed(2);
    sconto = parseFloat(sconto).toFixed(2);

    //Stampa Risultato Finale
    document.getElementById('risultatoNome').innerHTML = `Nome: ${inputUtente}`;
    document.getElementById('risultatoBiglietto').innerHTML = `Prezzo Biglietto: ${prezzoBiglietto}`;
    document.getElementById('risultatoSconto').innerHTML = `Sconto: ${sconto} &euro;`;
    document.getElementById('risultatoPrezzo').innerHTML = `Prezzo Totale: ${prezzoTotale} &euro;`;
    
    



}



















////////////////// FINE //////////////////