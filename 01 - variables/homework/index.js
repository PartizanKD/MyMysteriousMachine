6 > 4 && 10 < 5 //false
(30 + 4) > (7 ** 2) //false

null && true //null
!('hi' + 'hi') && true //false
!('hi' + 'hi') && false //false

//Объясните разницу выполнения данного кода
'Привет' + 'Друг' == !null
'Привет' + 'Друг' === !null
//Разные операторы сравнения

const ten = 10; 
const hundred = 100;
const thousand = 1000;

console.log((ten * ten + hundred) * hundred >= thousand * ten )
//(10*10+100)*100 = 20000
//1000*10=10000
//20000 >= 10000, следовательно, true