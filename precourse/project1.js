function calculator(a,b){
    var num1 = a;
    var num2 = b;
    
    if (a == undefined ){
            console.log(Math.sqrt(b));
        }
    else if (b == undefined){
            console.log(Math.sqrt(a));
        }
    else if (isNaN(a) || isNaN(b)){
        console.log("No es un número.");
    }
    else if(isNaN(a) && isNaN(b)){
        console.log("No es un número.");
    }
    else{
    
    function sum(){
        return num1 + num2;
    }
    function rest(){
        return num1 - num2;
    }
    function multi(){
        return num1 * num2;
    }
    function div(){
        return num1 / num2;
    }
    var resultados = [sum(), rest(), multi(), div()];
    return resultados;
}
}
calculator(4);