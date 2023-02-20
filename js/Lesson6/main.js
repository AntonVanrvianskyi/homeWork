// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.length);
// let str2 = 'lorem ipsum';
// console.log(str2.length);
// let str3 = 'javascript is cool';
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.toUpperCase());
// let str2 = 'lorem ipsum';
// console.log(str2.toUpperCase());
// let str3 = 'javascript is cool';
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// console.log(str1.toLowerCase());
// let str2 = 'LOREM IPSUM';
// console.log(str2.toLowerCase());
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let sub = str.substring(1,13)
// console.log(sub)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let stringToarray = (str) => {
//      return str.split(' ');
// }
// let arr = stringToarray(str);
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let map = arr.map(value => value.toString());
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// let sortNums = (nums, direction) =>{
//     return nums.sort((a, b) =>{
//         if (direction === 'ascending') {
//             return a - b
//         }if (direction === 'descending'){
//             return b-a
//         }
//     })
// }
// console.log(sortNums(nums, 'descending'));

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sort);
// let filter = coursesAndDurationArray.filter(value => value.monthDuration>5);
// console.log(filter);
// let map = coursesAndDurationArray.map((value, index) => {
//    return  {id: index+1, title: value.title, monthDuration: value.monthDuration }
// })
// console.log(map);

let cards = [
    {value: 6, color: 'black', cardSuit: 'pika'},
    {value: 7, color: 'black', cardSuit: 'hresta'},
    {value: 8, color: 'red', cardSuit: 'cherva'},
    {value: 9, color: 'red', cardSuit: 'buba'},
    {value: 10, color: 'black', cardSuit: 'pika'},
    {value: 6, color: 'black', cardSuit: 'hresta'},
    {value: 7, color: 'red', cardSuit: 'cherva'},
    {value: 8, color: 'red', cardSuit: 'buba'},
    {value: 9, color: 'black', cardSuit: 'pika'},
    {value: 10, color: 'black', cardSuit: 'hresta'},
    {value: 6, color: 'red', cardSuit: 'cherva'},
    {value: 7, color: 'red', cardSuit: 'buba'},
    {value: 8, color: 'black', cardSuit: 'pika'},
    {value: 9, color: 'red', cardSuit: 'cherva'},
    {value:10, color: 'red', cardSuit: 'buba'},
    {value: 6, color: 'red', cardSuit: 'buba'},
    {value: 7, color: 'black', cardSuit: 'pika'},
    {value:8, color: 'black', cardSuit: 'hresta'},
    {value: 9, color: 'black', cardSuit: 'hresta'},
    {value: 'valet', color: 'black', cardSuit: 'pika'},
    {value: 10, color: 'red', cardSuit: 'cherva'},
    {value: 'valet', color: 'red', cardSuit: 'cherva'},
    {value: 'dama', color: 'red', cardSuit: 'cherva'},
    {value: 'korol', color: 'red', cardSuit: 'buba'},
    {value: 'tuz', color: 'black', cardSuit: 'hresta'},
    {value: 'valet', color: 'black', cardSuit: 'hresta'},
    {value: 'dama', color: 'black', cardSuit: 'hresta'},
    {value: 'korol', color: 'black', cardSuit: 'hresta'},
    {value: 'tuz', color: 'black', cardSuit: 'pika'},
    {value: 'valet', color: 'red', cardSuit: 'buba'},
    {value: 'dama', color: 'red', cardSuit: 'buba'},
    {value: 'korol', color: 'black', cardSuit: 'pika'},
    {value: 'tuz', color: 'red', cardSuit: 'cherva'},
    {value: 'dama', color: 'black', cardSuit: 'pika'},
    {value: 'korol', color: 'red', cardSuit: 'cherva'},
    {value: 'tuz', color: 'red', cardSuit: 'buba'}
];

// - знайти піковий туз
// let find = cards.find(value => {
//     if (value.value === 'tuz' && value.cardSuit === 'pika') return value
//
// })
// console.log(find);

// - всі шістки
// let filter = cards.filter(value => value.value === 6);
// console.log(filter);

// - всі червоні карти
// let filter = cards.filter(value => value.color === 'red',);
// console.log(filter);

// - всі буби
// let filter = cards.filter(value => value.cardSuit === 'buba',);
// console.log(filter);

// - всі трефи від 9 та більше
// let filter = cards.filter(value => {
//     if (value.cardSuit==='hresta' && value.value!==6 && value.value!==7 && value.value!==8){
//         return value
//     }
// })
// console.log(filter);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// // {
// //     spades:[],
// //         diamonds:[],
// //     hearts:[],
// //     clubs:[]
// // }
// let reduce = cards.reduce((accumulator, value) =>{
//     if (value.cardSuit === 'pika'){
//         accumulator.pika.push(value)
//     }
//     if (value.cardSuit === 'hresta'){
//         accumulator.hresta.push(value)
//     }
//     if (value.cardSuit === 'cherva'){
//         accumulator.cherva.push(value)
//     }
//     if (value.cardSuit === 'buba'){
//         accumulator.buba.push(value)
//     }
//     return accumulator
//
// }, {pika:[], hresta:[], cherva:[], buba:[]} )
// console.log(reduce);

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
// let filter1 = coursesArray.filter(value => value.modules.includes('sass'))
// let filter2 = coursesArray.filter(value => value.modules.includes('docker'))
// console.log(filter2);


