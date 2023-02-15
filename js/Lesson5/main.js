
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let square = (a, b) => a*b;
// console.log(square(5,6))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let square = (r) => Math.PI*Math.pow(r,2);
// console.log(square(2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let square = (h,r) => 2*Math.PI*r*(h+r);
// console.log(square(3,2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let iter = (arr) =>{
//     for (const item of arr) {
//         console.log(item)
//     }
// }
// iter([3,4,5,'hello'])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let create = (text) => document.write(`<p>${text}</p>`);
// create('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let create = (text) =>{
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
// </ul>`)
// }
// create('Hello world')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let create = (text, counter) =>{
//     document.write(`<ul>`)
//     for (let i = 0; i < counter; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// create('hello', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let create = (arr) =>{
//     document.write(`<ul>`)
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// create([3,4,5,6, false, 'hello']);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
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
// let out = (arr) =>{
//     for (let i = 0; i < users.length; i++) {
//         const arrElement = users[i];
//         document.write(`<div>${arrElement.name}-${arrElement.age}-${arrElement.status}</div>`)
//     }
// }
// out(users)

// - створити функцію яка повертає найменьше число з масиву
// let arr = [1,4,5,6];
// let minimal = (arr) =>{
//     let min = arr[0];
//     for (let i = 0; i < arr; i++) {
//         min = arr[i];
//     }
//     return min
// }
// console.log(minimal(arr));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let arr= [3,4,5]
// let sum = (arr) =>{
//     let min = 0;
//     for (const item of arr) {
//         min += item;
//     }
//     return min
// }
// console.log(sum(arr));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let arr = [11,22,33,44];
// let swap = (arr, index1, index2) =>{
//     let a1 = arr[index1];
//     let a2 = arr[index2];
//     arr[index1] = a2;
//     arr[index2] = a1;
//     return arr
// }
// console.log(swap(arr,1,2))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let arr = [{currency:'USD',value:40},{currency:'EUR',value:42}];
// let exchange = (sum, arr, exchangeCurrency) =>{
//     for (const sumElement of arr) {
//         if(exchangeCurrency===sumElement.currency){
//             let res = sum/sumElement.value
//             console.log(res)
//         }
//     }
// }
// exchange(10000, arr, 'USD')


