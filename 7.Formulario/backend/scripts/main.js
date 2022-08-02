"use strict"
//crear contenedores
/*
1. var = global
2. let = local - variable y es el mas recomendable
3. const = costante 
*/
const btnValidar= document.getElementById(Validar);
//console.log(btnValidar);
//al addEventlistener debo pasar 2 parametros
btnValidar.addEventListener("click",function(e){
    e.preventDefault();
    let form= document.getElementById("dataform");
    console.log(form[1].value);
});