/* Creare un array di oggetti
   Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
   Stampare a schermo la bici con peso minore. 
*/

/* 
   1. creo un array contenente gli oggetti;
   2. ogni oggetto descriverà una bici e avrà come proprietà: 
       - nome;
       - peso;
   3. creo una costante uguale al primo elemento dell'array
   4. creo un ciclo for che si ripeterà per tutta la lunghezza dell'array;
   5. creo una variabile il cui valore sarà uguale all'array[i]
   5. creo un if dove 
*/

const bici = [
   {
      nome : 'Scott',
      peso : '770'
   },
   {
      nome : 'Cannodale',
      peso : '120'
   },
   {
      nome : 'Genesis',
      peso : '150'
   }
]

let biciLight = bici[0];

for (let i = 0; i < bici.length; i++) {
  const bike = bici[i];
  
  if (bike.peso < biciLight.peso) {
    biciLight = bike;
  }
}
console.log(biciLight) 
