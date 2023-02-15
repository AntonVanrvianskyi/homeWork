// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let arr = [1,2,3,4,5,'hell','okten', 'web', true, false, null];
// let i = 0;
// while (i<arr.length){
//     console.log(arr[i])
//     i++;
// }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr =[];
// arr[0]='hello';
// arr[1]=34;
// arr[2]=46;
// arr[3]=67;
// arr[4]=456;
// arr[5]=3546;
// console.log(arr)
// - є масив [2,17,13,6,22,31,45,66,100,-18] :

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
// let i = 0;
// while (i<arr.length){
//     console.log(arr[i])
//     i++;
// }
//     2. перебрати його циклом for
// for (let u = 0; u<arr.length; u++){
//     console.log(arr[u])
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 1;
// while(i<arr.length){
//     console.log(arr[i])
//     i+=2;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i<arr.length; i+=2){
//     console.log(arr[i])
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i<arr.length){
//    if(i%2===0){
//        console.log(arr[i])
//    }
//     i++;
//
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i<arr.length; i++){
//   if(i%2===0){
//    console.log(arr[i])
//   }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i<arr.length; i++){
//  if(i%3===0){
//   arr[i] = 'okten';
//
//  }
//  console.log(arr[i])
// }
// 8. вивести масив в зворотньому порядку.
// for (let i = arr.length - 1; i >= 0; i--) {
//  const arrElement = arr[i];
//  console.log(arr[i])
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = 0; i<arr.length; i++){
//  console.log(arr[i])
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [2,17,13,6,false,31,'hello',true,100,-18];
// for(let i = 0; i<arr.length; i++){
//  if(typeof arr[i] == "boolean"){
//   console.log(arr[i])
//  }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for(let i = 0; i<arr.length; i++){
//  if(typeof arr[i] == "number"){
//   console.log(arr[i])
//  }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for(let i = 0; i<arr.length; i++){
//  if(typeof arr[i] == "string"){
//   console.log(arr[i])
//  }
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let myArr = [];
// myArr[0]=1;
// myArr[1]=76;
// myArr[2]=false;
// myArr[3]=3211;
// myArr[4]=5564;
// myArr[5]='string';
// myArr[6]=true;
// myArr[7]=35;
// myArr[8]=546;
// myArr[9]='string';
// for (let i = 0; i<myArr.length; i++){
//  console.log(myArr[i])
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 1; i<11; i++){
//  document.write(i);
//  console.log(i)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 1; i<101; i++){
//  document.write(`<h4>${i}</h4>`);
//  console.log(i)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(let i = 1; i<101; i+=2){
//  document.write(`<h4>${i}</h4>`);
//  console.log(i)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i = 2; i<101; i+=2){
//  document.write(`<h4>${i}</h4>`);
//  console.log(i)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i = 1; i<101; i+=2) {
//  document.write(`<h4>${i}</h4>`);
//  console.log(i)
// }


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор


let arrBook = [
 {
  title: "Around the world in 350 days",
  pageCount: 538,
  genres: ["adventure"],
  authors: [{
   name: "Zhul Vern",
   age: 47
  }, {
   name: "Felisity Smoak",
   age: 22
  }]

 },
 {
  title: "Harry Potter",
  pageCount: 680,
  genres: ["fantasy", "horror"],
  authors: [{

   name: "Joan Roalling",
   age: 38
  }]
 },
 {
  title: "Angel Empire",
  pageCount:340,
  genres: ["detective", "romantic", "drama"],
  authors: [
   {
    name: "Bernar Verber",
    age: 60
   }, {
    name: "Amanda Waller",
    age: 60
   }

  ]
 }
]

// let maxPage = arrBook[0].pageCount;
// for (const book of arrBook) {
//     if (book.pageCount>maxPage){
//         maxPage = book.pageCount;
//
//     }
//
// }
// console.log(maxPage)

// let maxGenre = arrBook[0].genres;
// for (const string of arrBook) {
//  if (string.genres.length>maxGenre.length){
//   maxGenre= string.genres;
//  }
//
// }
// console.log(maxGenre)

// let maxTitle = arrBook[0].title;
// for (const string of arrBook) {
//  if (string.title.length>maxTitle.length){
//   maxTitle= string.title;
//  }
//
// }
// console.log(maxTitle)

// let maxAuthors = arrBook[0].authors;
// for (const string of arrBook) {
//  if (string.authors.length >= maxAuthors.length){
//   maxAuthors= string.authors;
//  }
//
// }
// console.log(maxAuthors)


// let maxAuthors
// for (const string of arrBook) {
//  if (string.authors.length > 0 && string.authors.length < 2){
//   maxAuthors= string.authors;
//  }
//
// }
// console.log(maxAuthors)














