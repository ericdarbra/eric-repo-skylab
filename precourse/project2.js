var sign = prompt("¿Cuál es tu nombre?");
console.log("Hola " + sign);
function funcFlights(){
var flights = [
  {id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
  {id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
  {id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
  {id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
  {id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
  {id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
  {id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
  {id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
  {id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
  {id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
  ]
  for (var i =0 ; i<flights.length; i++){
  var strScale = "";
  if(flights[i].scale){
    strScale = "Tiene escalas";
  }
  else{
    strScale = "No tiene escalas";
  }
  var showFlights = "El vuelo nº " + flights[i].id + " con origen: " + flights[i].from + " y destino: " + flights[i].to + ", tiene un coste de " + flights[i].cost + "€ y " + strScale;
  
  console.log(showFlights);
  }
  // calcular media de coste
  function mediaFlights(){
    var suma= 0;
    var result = 0;
    for (var i=0;i<10;i++){
     
      suma += flights[i].cost;
      result = suma/10;
    }
   return result;
  }
console.log("El precio medio de nuestros vuelos es " + mediaFlights() + " €");
// Sumar vuelos con escala
var sumaVuelos = 0;
function manyScales(){
  for (var i =0 ; i<flights.length; i++){
    if(flights[i].scale){
        sumaVuelos++;
    }
  }
return "Hay un total de " + sumaVuelos + " vuelos que hacen escala";
}
console.log(manyScales());
console.log("Los últimos destinos son: ");
function lastFlights(){
  for(var i=0; i<flights.length; i++){
    if(i>4){
      console.log(flights[i].to);
    }
  }
}
lastFlights();
}
funcFlights();

