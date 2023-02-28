// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
// function User (id, name, username, email, adress, phone, website, company){
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.adress = adress;
//     this.phone = phone;
//     this.website = website;
//     this.company = company;
// }
// function Adress (street, suite, city, zipcode, geo){
//     this.street = street;
//     this.suite = suite;
//     this.city = city;
//     this.zipcode = zipcode;
//     this.geo = geo;
// }
// const adress = new Adress('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', {lat: '-37.3159', lng: '81.1496'});
// function Company (name, catchPhrase,bs){
//     this.name = name;
//     this.catchPhrase = catchPhrase;
//     this.bs = bs;
// }
// const company = new Company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
// const user = new User(1, 'Anton', 'Varvianskyi', '@gmail.com',{adress}, 50395839, 'hildegard.org', {company});
// console.log(user);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// function ObjectDescription (title, action, attrs){
//     this.title = title;
//     this.action = action;
//     this.attrs = attrs;
// }
// function Array (titleArray, actionTitle){
//     this.titleArray = titleArray;
//     this.actionArray = actionTitle;
// }
// const array = new Array('accesskey', 'Переход к области с помощью комбинации клавиш');
// const object = new ObjectDescription('area', `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,[array] );
// console.log(object);
