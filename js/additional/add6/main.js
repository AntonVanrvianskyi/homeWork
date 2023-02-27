// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString = (str, n)=>{
//     let res = [];
//     for(let i = 0 ; i < str.length; i += n) {
//         res.push(str.substr(i, n));
//     }
//     return res;
// }
// console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let delete_characters = (str, length)=>{
//     let st = str.substring(0, length);
//     return st
// }
// document.writeln(delete_characters('Каждый охотник желает знать', 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let insert_dash = (str)=>{
//     let a = str.toUpperCase()
//     let res = a.replaceAll(' ', '-');
//     return res;
// }
// document.writeln(insert_dash('html JavaScript PHP'));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = (str)=>{
//     let a = str.at(str);
//     let b = str.substring(1);
//     let res = a.toUpperCase()
//     return res + b;
//
// }
// console.log(str('hello'));


// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let validator = (str)=>{
// let res
//     let a = ['.','-','_'];
//     for (const item of str) {
//         for (const value of a) {
//             if (item===value){
//                 res = str.replaceAll(value, ' ').replace(' ','');
//             }
//         }
//
//     }
// return res
// }
// console.log(validator('Hermione__Granger'));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// const generator = ()=>{
//     let arr = [];
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//     }
//     return arr
// }
// let res = generator();
// console.log(res);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// console.log(generator().sort((a, b) => a - b)); // сортує за зростанням

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
// console.log(generator().filter(value => {
//     if (value % 2 === 0 && value !==0) {
//         return value
//     }
// }).sort((a, b) => a - b)); // фільтрує + сортує за зростанням

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str)=>{
//     let res = str.split(' ');
//     let arr = [];
//     for (const elem of res) {
//         for (let i = 0; i < elem.length; i++) {
//             let item  = elem[i];
//             if (i === 0){
//                 arr.push(' ' + item[i].toUpperCase())
//             }else {
//                 arr.push(item)
//             }
//         }
//     }
//     return arr.join('')
// }
// console.log(capitalize('hello my name is anton'));;
// let capitalize = (str)=>{
//     let res = str.split(' ').map(value => value[0].toUpperCase()+value.slice(1));
//     let a = res.join(' ')
//     return a
// }
// console.log(capitalize('hello my name is anton'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// let validator = (str)=>{
//    const idDog = str.indexOf('@');
//    const idPoint = str.indexOf('.')
//
//         if (idDog < 1 || idDog === str.length-1){
//             console.log('ne pravylno @');
//     }else if (idPoint +2 >= idPoint || idPoint === str.length - 1){
//             console.log('ne korektno .');
//     }else {
//             console.log('true')
//     }
//
//
//
// }
// validator('some.email@gmail.com');


// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let res = coursesArray.sort((a, b) => b.modules.length - a.modules.length)
// console.log(res);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let count = (str, stringsearch)=>{
//     let symb = 'о'
//     let count = 0;
//     for (const item of str) {
//     if (item===symb){
//          count ++
//     }
//     }
//     return count
//
//
// }
// console.log(count('Астрономия это наука о небесных объектах'));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let foo = (str,n)=>{
//     let res = str.split(' ').slice(0,n).join(' ');
//     return res
// }
// console.log(foo('Сила тяжести приложена к центру масс тела',5));

let books = [
    {
        title: "Around the world in 350 days",
        pageCount: 538,
        genres: ["adventure"],
         authors: [
        {
            name: "Zhul Vern",
            age: 47
        },
    {
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
        },
            {
                name: "Amanda Waller",
                age: 60
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
            },
            // {
            //     name: "Amanda Waller",
            //     age: 60
            // }
        ]
    }
]
//     -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

// -знайти наібльшу книжку.
// let maxCount = books[0].pageCount;
// for (const item of books) {
//     if (item.pageCount>maxCount){
//         maxCount = item
//     }
// }
// console.log(maxCount);

// - знайти книжку/ки з найбільшою кількістю жанрів
// let maxGenre = books[0].genres;
// for (const item of books) {
//  if (item.genres.length>maxGenre.length){
//   maxGenre= item.genres;
//  }
//
// }
// console.log(maxGenre)

// - знайти книжку/ки з найдовшою назвою
//  let maxTitle = books[0].title;
// for (const item of books) {
//  if (item.title.length>maxTitle.length){
//   maxTitle= item.title;
//  }
//
// }
// console.log(maxTitle)

// - знайти книжку/ки які писали 2 автори
// let foo = ()=> {
//     let maxAuthors = books[0].authors;
//     for (const item of books) {
//         if (item.authors.length > maxAuthors.length) {
//             maxAuthors = item.authors;
//             console.log(maxAuthors)
//
//         }
//         if (item.authors.length === maxAuthors.length) {
//             console.log(item.authors);
//         }
//     }
// }
// foo()

// - знайти книжку/ки які писав 1 автор
// let foo = ()=> {
//     for (const item of books) {
//         if (item.authors.length<2){
//             console.log(item.authors)
//         }
//     }
// }
// foo()

// - вісортувати книжки по кількості сторінок по зростанню
// let res = books.sort((a, b) => a.pageCount-b.pageCount);
// console.log(res);


