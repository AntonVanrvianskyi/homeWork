//Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let a = 'hello';
let b = 'owu';
let c = true;
let d = false;
let e = 4;
let f = 5;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Anton';
let middleName = 'Olegovych';
let lastName = 'Varvianskyi';
let con = `${firstName} ${middleName} ${lastName}`;
console.log(con);
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let g = 100; let k = '100'; let m = true;
console.log(typeof g, typeof k, typeof m)

//Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt("Ваше імя'я:")
let nameF = prompt("Ваше прізвище:")
let age = +prompt("Ваш вік:")
console.log(name, nameF, age)
console.log(typeof age)









