/*
Operadores de comparação

> Maior que
>= Maior ou igual a
< Menor que
<= menor ou igual a
== igualdade **********
=== igualdade estrita (valor e tipo)
!= diferente (valor) **********
!== diferente estrito (valor e tipo)

*/

//Exemplo "maior que"
console.log(10 > 5); //Retorna true (boolean) porque obviamente 10 > 5

//Exemplo "maior ou igual a"
const comp1 = 10 >= 5; //Retorna true, porque ele checa primeiro se é maior. Se fosse igual a "10" também retornaria true
console.log(comp1);

//Exemplo "Menor que"
const comp2 = 10 < 11; //Retorna true porque obviamente 10 é menor que 11
console.log(comp2);

//Exemplo "menor ou igual a"
const comp3 = 10 <= 11; //Retorna true, porque ele checa primeiro se é menor. Se fosse igual a "10" também retornaria true
console.log(comp3);

//Exemplo de "igualdade"
const num1 = 10; //Tomar cuidado ao usar!!!, Ele compara tipos
const num2 = 10;
const comp4 = num1 == num2; //Retorna true porque 10 é igual a 10
console.log(comp4);

//Exemplo de "igualdade estrita"
const num3 = 10; 
const num4 = 10;
const comp5 = num1 === num2; //Retorna true porque 10 é igual a 10 e nesse caso ele checa o tipo também se fosse comparar "number" e "string"
console.log(comp5);

//Exemplo de "diferente"
const num5 = 10; 
const num6 = 11;
const comp6 = num5 != num6; //Retorna true porque 10 é um valor diferente de 11, porém ele não compara tipos "CUIDADO AO USAR"
console.log(comp6);

//Exemplo de "diferente"
const num7 = 10; 
const num8 = "11";
const comp7 = num7 !== num8; //Retorna true porque 10 é um valor diferente de 11, ESTE COMPARA O TIPO
console.log(comp7);

