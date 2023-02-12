// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a,b){
//     return a*b;
// }
// let res = area(10,20);
// console.log(res)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function area(r){
//     let sum = Math.PI * Math.pow(r,2);
//     return sum;
// }
// let res = area(5);
// console.log(res)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function area (h,r){
//     let sum = 2*Math.PI *r*(h+r);
//     return sum;
// }
// let res = area(3,4);
// console.log(res)
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr= [3,45,56,242,43,346];
// function foo (arr){
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// foo(arr)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text (p){
//     document.write(`<p>${p}</p>`);
// }
// text('lorem ipsum');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list (text){
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
// </ul>`)
// }
// list('hello okten')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list (text, number){
//     document.write(`<ul>`)
// for (let i = 0; i<number; i++){
//     document.write(`<li>${text}</li>`)
// }
//     document.write(`</ul>`)
// }
// list('hello okten', 7)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let myArr = [2,4,45,56,'hello', true];
// function list (arr){
//     document.write(`<ul>`)
//     for (const arrElement of myArr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list(myArr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// function user (arr){
//
//     for (let i = 0; i < users.length; i++) {
//         const arrElement = users[i];
//         document.write(`<div>${arrElement.name}-${arrElement.age}-${arrElement.status}</div>`)
//
//     }
//
// }
// user(users)
// - створити функцію яка повертає найменьше число з масиву
// let arr = [32,35,56,67,567];
// function minNumber (arr){
//     let min = arr[0];
//     for (let i = 0; i>arr[i]; i++){
//         min = arr[i];
//
//     }
//     console.log(min);
// }
// minNumber(arr)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let arr = [32,35,56,67,567];
// function sum (arr){
//     let min = 0
//     for (let i = 0; i<arr.length; i++){
//         min += arr[i]
//
//         console.log(min)
//      }
//   Не виводить суму в чому помилка? Не можу знайти проблему
//
// }
// sum(arr)
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let arr = [11,22,33,44];
// function change (arr, index1, index2){
//     if (index1==0){
//         arr[0]=22;
//     } if (index2===1){
//         arr[1]=11;
//     }
//     console.log(arr)
// }
// change(arr, 0,1)
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//  let arr = [{currency:'USD',value:40},{currency:'EUR',value:42}];
// function exchange (sum,currencyValues,exchangeCurrency ){
//     // let arr = [{currency:'USD',value:40},{currency:'EUR',value:42}];
//     if(currencyValues === "USD"){
//         let res = sum/arr[0].value;
//         return res;
//     }
//     if (currencyValues === "EUR"){
//         let num = sum/arr[1].value;
//         return num;
//     }
// }
// let foo = exchange(1000, 'EUR');
// console.log(foo);