//Frasi celebri GENERE - FRASE - FORTUNA

/*
MATRIMONIO
“Sposarsi per il sesso è come comprare un Boeing 747 per le noccioline gratis.” 
“Se una scrivania in disordine è segno di una mente disordinata, di cosa, allora, è segno una scrivania vuota?”
“Nessun bene senza un compagno ci dà gioia.”

SENTENZE
“In ogni iniziativa pensa bene a dove vuoi arrivare.” 
“Un animo onesto quando viene offeso si irrita più del normale.”
“È del saggio arrabbiarsi tardi ma una volta per tutte.”

CORPO UMANO
“L'espressione che portiamo può cambiare una circostanza.” 
"Per le donne il miglior afrodisiaco sono le parole. Il punto "G" è nelle loro orecchie. Chi lo cerca più in basso sta sprecando il suo tempo."
“Per avere degli occhi belli, cerca la bontà negli altri; per delle labbra belle, pronuncia solo parole gentili; per una figura snella, dividi il tuo cibo con le personeaffamate; per dei capelli belli lascia che un bambino vi passi le sue dita una volta al giorno; e per l'atteggiamento, cammina con la consapevolezza che non sei mai sola.”

INGLESI
“La cultura inglese è fortemente basata sulla letteratura.” 
“Un inglese non scherza mai quando si tratta di una cosa importante come una scommessa.”
“Chi non ha visto piovere a Londra, non ha visto Londra.”

PROVERBI CINESI
“Il tempo cattivo è sempre peggiore se lo si guarda da una piccola finestra.” 
“Quando un padre e un figlio vanno d'accordo la famiglia non si sgretola, quando i fratelli vanno d'accordo la famiglia non si separa.”
“Ogni problema ha tre soluzioni: la mia soluzione, la tua soluzione e la soluzione giusta.”
*/
function getRandomNumber(maxNum){
    return Math.floor(Math.random() * maxNum);
}

const phrases = [['MATRIMONIO', ['Sposarsi per il sesso è come comprare un Boeing 747 per le noccioline gratis.',
'Se una scrivania in disordine è segno di una mente disordinata, di cosa, allora, è segno una scrivania vuota?',
'Nessun bene senza un compagno ci dà gioia.']],
['SENTENZE', ['In ogni iniziativa pensa bene a dove vuoi arrivare.',
'Un animo onesto quando viene offeso si irrita più del normale.',
'È del saggio arrabbiarsi tardi ma una volta per tutte.']],
['CORPO UMANO', ["L'espressione che portiamo può cambiare una circostanza.",
'Per le donne il miglior afrodisiaco sono le parole. Il punto "G" è nelle loro orecchie. Chi lo cerca più in basso sta sprecando il suo tempo.',
"Per avere degli occhi belli, cerca la bontà negli altri; per delle labbra belle, pronuncia solo parole gentili; per una figura snella, dividi il tuo cibo con le personeaffamate; per dei capelli belli lascia che un bambino vi passi le sue dita una volta al giorno; e per l'atteggiamento, cammina con la consapevolezza che non sei mai sola."]],
['INGLESI', ['La cultura inglese è fortemente basata sulla letteratura.',
'Un inglese non scherza mai quando si tratta di una cosa importante come una scommessa.',
'Chi non ha visto piovere a Londra, non ha visto Londra.']],
['PROVERBI CINESI', ['Il tempo cattivo è sempre peggiore se lo si guarda da una piccola finestra.',
"Quando un padre e un figlio vanno d'accordo la famiglia non si sgretola, quando i fratelli vanno d'accordo la famiglia non si separa.",
'Ogni problema ha tre soluzioni: la mia soluzione, la tua soluzione e la soluzione giusta.']]]

function getRandomPhrase(){
    let topic = getRandomNumber(5);
    let phrase = getRandomNumber(3);
    let fortune = getRandomNumber(100);
    console.log(`Topic of the day: ${phrases[topic][0]}`);
    console.log(`Phrase of the day: "${phrases[topic][1][phrase]}"`);
    console.log(`Fortune of the day: ${fortune}`);
}

getRandomPhrase();
