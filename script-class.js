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




function init(){
  bicycle();
}


$(init);
