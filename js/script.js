// Rendo le funzionalità disponibili al solo completo caricamento della pagina
$(document).ready(
  function () {
    // Popolo l'array con la funzione generante numeri casuali
    var arrayCasuale = numeriCasuali(5,100)
    alert('Memorizza questi numeri >  ' + arrayCasuale)
    setTimeout(function () {
      var arrayUtente = []
      // Imposto ciclo per chiedere all'utente di inserire i numeri che ricorda dell'array iniziale
      for (var i = 0; i < 5; i++) {
        var numeroUtente = parseInt(prompt((i+1) + '° numero da inserire. Scrivi un numero'))
        // In caso di non numeri mostro alert di errore
        while (isNaN(numeroUtente)) {
          alert('ATTENZIONE! Inserire un numero valido!')
          var numeroUtente = parseInt(prompt((i+1) + '° numero da inserire. Scrivi un numero'))
        }
        // In caso di match tra l'array iniziale e il valore dato dall'utente,
        // metto il valore dell'utente nell'array di numeri indovinati dall'utente
        if (arrayCasuale.includes(numeroUtente)) {
          arrayUtente.push(numeroUtente)
        }
      }
      // Calcolo quanti numeri sono stati indovinati dall'utente
      var numeriIndovinati = arrayUtente.length
      // Mostro il risultato a seconda del punteggio ottenuto
      if (numeriIndovinati === 0) {
        alert('PESSIMO. Hai indovinato ' + numeriIndovinati + ' numeri, i numeri da indovinare erano: ' + arrayCasuale)
      } else if (numeriIndovinati === 5) {
        alert('COMPLIMENTI! Hai indovinato ' + numeriIndovinati + ' numeri, vale a dire: ' + arrayUtente + ', i numeri da indovinare erano: ' + arrayCasuale)
      } else {
        alert('Hai indovinato ' + numeriIndovinati + ' numeri, vale a dire: ' + arrayUtente + ', i numeri da indovinare erano: ' + arrayCasuale)
      }
    // Imposto quanti millisecondi devono passare tra la chiusura del primo alert e il primo prompt
    }, 30000)

// Sezione relativa alla funzione generante numeri casuali-----------------------------------------
    function numeriCasuali(quantita,range) {
      var arrayCasuale = []
      for (var i = 0; i < quantita; i++) {
        var numeroCasuale = Math.floor(Math.random() * range) + 1;
        arrayCasuale.push(numeroCasuale)
      }
      return arrayCasuale
    }
  }
)
