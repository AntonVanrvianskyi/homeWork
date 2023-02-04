// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr = [1,2,3,4,5,'road'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bookFirst = {
    title: 'Factor Cherchulya',
    pageCount: 240.,
    genre: 'roman'
}
let bookSecond = {
    title: 'Osobusta Vendeta',
    pageCount: 400,
    genre: 'detektuv',
}
let bookThrid = {
    title: 'Shepit Vodu',
    pageCount: 350,
    genre: 'Fantastic'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bookF = {
    title: 'Factor Cherchulya',
    pageCount: 240.,
    genre: 'roman',
    authors: [{name: 'lesya naidenko', age: 45},{name:'olesya lus', age: 43}]
};
let bookS = {
    title: 'Osobusta Vendeta',
    pageCount: 400,
    genre: 'detektuv',
    authors: [{name: 'lesya naidenko', age: 45},{name:'olesya lus', age: 43}]
};
let bookT = {
    title: 'Shepit Vodu',
    pageCount: 350,
    genre: 'Fantastic',
    authors: [{name: 'lesya naidenko', age: 45},
        {name:'olesya lus', age: 43}]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'anton', username: 'antoxa', password:110},
    {name: 'petro', username: 'red', password:111},
    {name: 'helen', username: 'green', password:112},
    {name: 'vlad', username: 'blue', password:333},
    {name: 'yura', username: 'number', password:354},
    {name: 'andriy', username: 'boolean', password:3465},
    {name: 'lesya', username: 'not a number', password:4366},
    {name: 'sasha', username: 'undefined', password:436},
    {name: 'artem', username: 'string', password:4563},
    {name: 'vika', username: 'false', password:4646}
]
// console.log(users[0].password)
// console.log(users[1].password)
// console.log(users[2].password)
// console.log(users[3].password)
// console.log(users[4].password)
// console.log(users[5].password)
// console.log(users[6].password)
// console.log(users[7].password)
// console.log(users[8].password)
// console.log(users[9].password)



// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.



// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let y = 3;
if (y!==0){
    console.log('Virno')
}else{
    console.log('Ne virno')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 2;
if (time>0 && time<=15){
    console.log('1 ch')
}else if (time>15 && time<=30){
    console.log('2 ch')
}else if (time>30 && time<=45) {
    console.log('3 ch')
}else if (time>45 && time<=59) {
    console.log('4 ch')
}else {
    console.log('undefined')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 11;

  if (day>0 && day<=10) {
      console.log('1 dekada');
  }
     else if (day>10 && day<=20) {
      console.log('2 dekada');
  }
    else if (day>20 && day<=31) {
      console.log('3 dekada');
  }else {
        console.log('undefined')
  }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let dayS = +prompt('Enter number');
//     switch (dayS){
//         case 1: alert('monday')
//             break;
//         case 2: alert('tuesday')
//             break;
//         case 3: alert('wendsday')
//             break;
//         case 4: alert('thursday')
//             break;
//         case 5: alert('friday')
//             break;
//         case 6: alert('saturday')
//             break;
//         case 7: alert('sunday')
//             break;
//         default: alert('nothing found')
//     }



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let c = +prompt('Введіть перше число');
let f = +prompt('Введіть друге число');

if ( c>f ){
    alert('Максимальне число:' + c)
}else if(f>c){
    alert('Максимальне число:' + f)
}else if(f===c) {
    alert('Числа рівні')
}else{
    alert('Введіть числа!')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = undefined;
x = x || 'default';
console.log(x)


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration>5){
    console.log('Super > ' + coursesAndDurationArray[0].title)
} if (coursesAndDurationArray[1].monthDuration>5){
    console.log('Super > ' + coursesAndDurationArray[1].title)
} if (coursesAndDurationArray[2].monthDuration>5){
    console.log('Super > ' + coursesAndDurationArray[2].title)
} if (coursesAndDurationArray[3].monthDuration>5){
    console.log('Super > ' + coursesAndDurationArray[3].title)
} if (coursesAndDurationArray[4].monthDuration>5){
    console.log('Super > ' + coursesAndDurationArray[4].title)
} if (coursesAndDurationArray[5].monthDuration>5){
    console.log('Super > ' + coursesAndDurationArray[5].title)
}










