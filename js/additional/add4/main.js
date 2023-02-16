// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function number (a,b,c){
//     if (a<b && a<c){
//         console.log();
//     }else if (b<a && b<c){
//         console.log(b)
//     }else if(c<a&&c<b){
//         console.log(c)
//     }
// }
// number(34,43,23);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max (a,b,c){
//     if (a>b&&a>c){
//         console.log(a)
//     }else if(b>a&&b>c){
//         console.log(b);
//     }else if(c>a&&c>b){
//         console.log(c)
//     }
// }
// max(34,32,21)

// - створити функцію яка повертає найбільше число з масиву
// let arr = [4,5,6,9,39];
// function bigNumber (arr){
//     let max = arr[0];
//     for (const item of arr) {
//         if (item>max){
//             max = item;
//         }
//     }
//     return max
// }
// console.log(bigNumber(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function number (arr){
//     let max=0;
//     let result
//     for (let item of arr) {
//         result = (max += item)/arr.length
//     }
//     return result
// }
// console.log(number([4, 12, 19, 15]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function max (...x){
//     let max = x[0];
//     let min = x[0]
//     for (let i = 0; i < x.length; i++) {
//         const minElement = x[i];
//              max = minElement;
//     }
//     console.log(max)
//     for (let i = 0; i > x.length; i++) {
//         const minElement = x[i];
//         min = minElement;
//     }
//     return min
// }
//
// let res = max(3,4,5,6);
// console.log(res)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function generetor (){
//     let arr = [];
//     for (let i = 0; i < 100; i++) {
//         arr[arr.length]=Math.round(Math.random()*100)
//     }
//     return arr
// }
//
// console.log(generetor());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function generator (limit){
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         arr[arr.length]=Math.round(Math.random()*limit);
//     }
//     return arr
// }
//
// console.log(generator(20));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(arr){
//     let newArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         const newArrayElement = arr[i];
//         newArray[newArray.length]=newArrayElement
//     }
// console.log(newArray)
// }
// reverse([1,2,3])

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function foo (...x){
//         if(x.length>1 && x.length<3){
//             console.log(`${x[0]}${x[1]}`)
//         }else {
//             console.log(x[0])
//         }
// }
// foo('hello', 'my name is Anton')

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// function combineArrays(first, second) {
//     let newArray = [];
//     for(let i = 0; i < first.length; i++){
//         newArray.push(first[i] = first[i] + second[i])
//     }
//     return newArray;
// }
//
// console.log(combineArrays([1, 2, 3, 4], [2, 3, 4, 5]));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function convert (object){
//     let newArray = [];
//     for (const item of object) {
//         for (const itemKey in item) {
//            newArray[newArray.length]=itemKey
//         }
//     }
//         return newArray
// }
//
// console.log(convert([{name: 'Dima', age: 13}, {model: 'Camry'}]));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function convert (object){
//     let newArray = [];
//     for (const item of object) {
//         for (const itemKey in item) {
//             newArray[newArray.length]=item[itemKey]
//         }
//     }
// return newArray
// }
// console.log(convert([{name: 'Dima', age: 13}, {model: 'Camry'}]));