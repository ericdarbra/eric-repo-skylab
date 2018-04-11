var sign = prompt("¿Cuál es tu nombre?");
console.log("Hola, " + sign);

var bingoCard = [
    {number: 5, matched: false},
    {number: 3, matched: false},
    {number: 1, matched: false},
    {number: 2, matched: false},
    {number: 4, matched: false}
];
Bingo();
function Bingo(){


    
    for(var i=0; i<bingoCard.length; i++){
    var carton = "";
    carton = bingoCard[i].number;
    console.log(carton);
  }
    var numero = randomNum();
    function randomNum(){
            var numero = Math.floor((Math.random()* 5)+1);
            return numero;
    }
    console.log("El numero random es: " + numero);
    
    var newTurn = function newTurn(){
        console.log(bingoCard);
            for (var i=0;i<bingoCard.length;i++){
                
             if(bingoCard[i].matched){
                    bingoCard[i].number = "x";  
                  }
                else{
                  //console.log(bingoCard[i].number);
              }
              console.log(bingoCard[i].number);
            }
    }


    var checkCard = function checkCard() {
   
        for (var i = 0; i < bingoCard.length; i++){
            console.log("hola");
            if(bingoCard[i].number == numero){
              bingoCard[i].matched = true;
            }
        }
    }

    checkCard();
    newTurn();
}