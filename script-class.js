function bicycle(){
// Creare un array di oggetti: ogni oggetto descriverà una bici
// da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso MAGGIORE.
// Usiamo il forEach
  let bicycles = [
    {
      name: "cinzia",
      peso: 99
    },
    {
      name: "maria",
      peso: 90
    },
    {
      name: "paola",
      peso: 9000
    },
    {
      name: "elisa",
      peso: 900
    }
  ];

  let heaviest = {
    name: "check",
    peso: 0
  }

  bicycles.forEach(bicycle => {
    if(bicycle["peso"]>heaviest["peso"]){
      heaviest = bicycle;
    }
  });
  console.log(heaviest);

}



function es2(){
  // Si scriva una funzione che accetti tre argomenti, un array e
  // due numeri (a più piccolo di b).
  // La funzione ritornerà un nuovo array con i valori che hanno
  // la posizione compresa tra i due numeri

let array = [1,2,3,4,5,6,7,8,9];
let little = 2;
let big = 5;
// 3,4,5,6

myFunctionEs2(little,big,array);

}

function myFunctionEs2(indMin,indMax,arr){

  let res = arr.filter((elem,i) =>{
    if(i>=indMin && i<=indMax){
      return elem;
    }
  })

  console.log(res);
  return res;
}



function init(){
  // bicycle();
  es2();
}


$(init);
