//логический тип данных
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN)); //NAN - Not A Number
console.log(Boolean("")); //string
//number
console.log(50);//целое
console.log(50.5); //дробное
console.log(.5);// дробное без цел части
console.log(5e5); //экспоненц форма
console.log(0b1111); //двоичная
console.log(0o11); //восьмиричная
console.log(0xC000007B); //шестнадцатиричная
console.log(Infinity);//бесконечность, как она есть
console.log(NaN);//выводится, если математическое выражение выполнить не получается
//инкремент декремент так же как и везде
console.log(5=="5");//сравнение значений
console.log(5==="5");//жесткое сравнение типов данных значений
console.log(Math.sqrt(25)); //квадратный корень
console.log(Math.pow(5,3)); //степень
console.log(Number.isInteger(5));//проверка на инт
// console.log(Math.round(2.1));
// console.log(Math.log(2));
// console.log(Math.abs(-5));
// console.log(Math.PI);
// console.log(Math.log1p(8));
// console.log(Number.parseInt(2.1));
// console.log(Number.parseFloat(0xA));
let str = "Hello my dudes";
console.log(str.length); //длина стр
console.log(str.toUpperCase()); // Все залавные
console.log(str.toLowerCase()); //Все низкие
console.log(str.substring(6));//возвращает новую строку, с указанного символа
console.log(str.slice(-8)); //с конца
console.log(str.substr(6,2)); //6 - с чего начали, 2 - сколько штуков надо трезать
//эти методы не меняют исходную строку
console.log(str.indexOf('dude'));
console.log(str.startsWith("my",6));
console.log(str.endsWith("s"));
console.log(str.startsWith('hello'));//регистр роляет
console.log(str.replace('Hello','This is wednesday'));
console.log(str.includes("dude"));
console.log(str.repeat(2));
console.log(str.split(' '));

