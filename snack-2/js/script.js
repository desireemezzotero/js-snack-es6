/* Creare un array di oggetti di squadre di calcio.
   Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
   Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
   Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
   Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. 
*/


/* 1. creo un array con gli oggetti 
   2. ogni oggetto deve contenere: 
        - nome
        - punti fatti (numero random)
        - falli subiti (numero random)
   3. genero 2 numeri random 
   4. assegno i numeri randomi ai punti fatti e falli subiti
   5. creo un array al cui interno ci saranno i nomi delle squadre e i falli subiti 
   6. stampo tutto in pagina
   */
  
const soccerTeam = document.querySelector('soccer-team');

const soccer = [
  {
    nome : 'Juventus',
    puntiFatti : 0 ,
    falliSubiti : 0
  },
  {
    nome : 'Milan',
    puntiFatti : 0 ,
    falliSubiti : 0
  },
  {
    nome : 'Inter',
    puntiFatti : 0 ,
    falliSubiti : 0
  },
  {
    nome : 'Napoli',
    puntiFatti : 0 ,
    falliSubiti : 0
  }
]


/* genero numeri randomici */
/* const numberPointsMade = Math.ceil(Math.random()* 20);
const numberMissedFouls =  Math.ceil(Math.random()* 20); */

/* assegno i numeri andomici alle due proprietà dell'oggetto */
/* soccer[0].puntiFatti = numberMissedFouls
soccer[0].falliSubiti = numberPointsMade */

/* deve ripetere la stessa azione fino a quando non finisce l'array */
newSoccer = []
for (let i = 0; i < soccer.length; i++) {
  const numberPointsMade = Math.ceil(Math.random()* 20);
  const numberMissedFouls =  Math.ceil(Math.random()* 20);

  soccer[i].puntiFatti = numberMissedFouls
  soccer[i].falliSubiti = numberPointsMade
  
  newSoccer.push({
    nome : soccer[i].nome,
    falliSubiti : soccer[i].falliSubiti
  });

}

soccerTeam.innerText = `la squadra ${newSoccer.nome} ha totalizatto ${newSoccer.falliSubiti} falli`

