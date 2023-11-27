var result1 = 'number' + 3 + 3;
console.log(result1)
/* 
результат - строка number33 (произвелась автоконвертация в строку, т.к.
один из элементов строка и с оператором плюс так работает)
*/

var result2 = null + 3;
console.log(result2)
/* 
результат - цифра 3, объект null без свойств и значения
*/

var result3 = 5 && "qwerty";
console.log(result3) //результат - строка qwerty
/* Логическое И ( && ) вычисляет операнды слева направо,
возвращая сразу значение первого попавшего ложноподобного операнда
если все значения истиноподобны, возвращается значение последнего операнда
*/

var result4 = +'40' + +'2' + "hillel";
console.log(result4)
/* результат строка 42hillel
Унарный плюс преобразует строки в числа,
затем происходит склеивание чисел и строки
*/

var result5 = '10' - 5 === 6;
console.log(result5)
/* результат false
Оператор строгого равенства === проверяет равенство без приведения типов.
тут сравниваемые типы различны и соответственно будет false
*/

var result6 = true + false;
console.log(result6)
// результат - цифра 1, т.к. true имеет значение 1, а false 0

var result7 = '4px' - 3;
console.log(result7) // результат NaN - не число, т.к. от строки (не числа) отнимаем число

var result8 = '4' - 3;
console.log(result8) // результат 1, т.к. строка явл. числом

var result9 = '6' + 3 ** 0;
console.log(result9)
/* результат 61
сначала 3 возвелось в 0 и получилось 1
затем произвелось склеивание строки 6 и числа 1
*/

var result10 = 12 / '6';
console.log(result10) // результат 2 (строка тут является числом)

var result11 = '10' + (5 === 6);
console.log(result11) // результат строка 10fasle 5 не равно 6 (т.е. false), затем склеивание

var result12 = null == '';
console.log(result12) // результат false т.к. это два разных типа

var result13 = 3 ** (9 / 3);
console.log(result13) // результат 27 (результат в скобках = 3, а 3 в степени 3 = 27)

var result14 = !!'false' == !!'true';
console.log(result14) // результат true тк оба типа данных - строки

var result15 = 0 || '0' && 1;
console.log(result15) // результат 1 - присвоение в результате сравнения

var result16 = (+null == false) < 1;
console.log(result16) // результат false тк результат в скобках = true, а true = 1

var result17 = false && true || true;
console.log(result17) // результат true (результат false && = false и сравнени с true будет true)

var result18 = false && (false || true);
console.log(result18) // результат false (т.к. результат в скобках = true и при сравнении с false будет false)

var result19 = (+null == false) < 1 ** 5;
console.log(result19) // результат false тк значение в скобках true (1) и 1 в 5 степени тоже 1 