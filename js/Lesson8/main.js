// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (id,name,surname,email,phone){
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone;
// }
// new User(1,'Anton','Varvianskyi','anton@gmail.com,',434534535);
// let users = [
//     new User(1,'Anton','Varvianskyi','anton@gmail.com,',434534535),
//     new User(2,'Anton','Varvianskyi','anton@gmail.com,',434534535),
//     new User(3,'Anton','Varvianskyi','anton@gmail.com,',434534535),
//     new User(4,'Anton','Varvianskyi','anton@gmail.com,',434534535),
//     new User(5,'Anton','Varvianskyi','anton@gmail.com,',434534535),
//     new User(6,'Anton','Varvianskyi','anton@gmail.com,',434534535),
//     new User(7,'Anton','Varvianskyi','anton@gmail.com,',434534535),
//     new User(8,'Anton','Varvianskyi','anton@gmail.com,',434534535),
//     new User(9,'Anton','Varvianskyi','anton@gmail.com,',434534535),
//     new User(10,'Anton','Varvianskyi','anton@gmail.com,',434534535)
//
// ]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = users.filter(value => value.id%2===0 )
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = users.sort((a, b) => b.id - a.id); // відсортував за спаданням, щоб не змінювати id;
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client{
//     constructor(id,name,surname,email,phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//
//     }
// }
// let client = new Client(1,'Anton','Varviansky', 'email@', '0975445432',['2','3','6']);
// let clients = [
//     new Client(1,'Anton','Varviansky', 'email@', '0975445432',['2','3','6']),
//     new Client(3,'Anton','Varviansky', 'email@', '0975445432',['2','3','6']),
//     new Client(4,'Anton','Varviansky', 'email@', '0975445432',['2','3','6']),
//     new Client(2,'Anton','Varviansky', 'email@', '0975445432',['2','3','6','f']),
//     new Client(5,'Anton','Varviansky', 'email@', '0975445432',['2','3','6','f']),
//     new Client(7,'Anton','Varviansky', 'email@', '0975445432',['2','3','6',4,4,5]),
//     new Client(6,'Anton','Varviansky', 'email@', '0975445432',['2','3','6',45,657,76,87]),
//     new Client(9,'Anton','Varviansky', 'email@', '0975445432',['2','3','6',5]),
//     new Client(8,'Anton','Varviansky', 'email@', '0975445432',['2','3','6',4,4]),
//     new Client(10,'Anton','Varviansky', 'email@', '0975445432',['2','3','6']),
//
//
// ]

// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model,producer, year, maxSpeed, volume){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
//
//
// }
// Car.prototype.drive = function () {console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
// Car.prototype.info = function (car){console.log(car)};
// Car.prototype.increaseMaxSpeed = function (newSpeed){ console.log(this.maxSpeed = newSpeed) }
// Car.prototype.changeYear = function (newValue){console.log(this.year = newValue)}
// Car.prototype.addDriver = function (driver){return this.driver = driver;}
//
// let car = new Car('shkoda', 'Czech', '2018', '240km/h', '3.0');
//
// car.drive();
// car.info(car);
// car.increaseMaxSpeed(260);
// car.changeYear(2019);
// car.addDriver({name: 'Anton', age: '19'});
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// let Car = class {
//     constructor(model,producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//     drive(){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
//     info(){console.log(car)};
//     increaseMaxSpeed (newSpeed){console.log(this.maxSpeed += newSpeed)};
//     changeYear (newValue){return this.year = newValue};
//     addDriver (driver){return this.driver = driver}
// }
// let car = new Car('Toyota','Japan', '2020', 240, '2.4l');
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(40);
// car.changeYear('2021');
// car.addDriver({name: 'Anton', exp:3});
// console.log(car);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let Cinderella = class  {
    constructor(name,age,size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let cinderellS = [
    new Cinderella('anna',23,35),
    new Cinderella('olha',23,36),
    new Cinderella('vika',23,37),
    new Cinderella('sveta',23,38),
    new Cinderella('masha',23,39),
    new Cinderella('tania',23,40),
    new Cinderella('sasha',23,38),
    new Cinderella('kira',23,41),
    new Cinderella('maria',23,36),
    new Cinderella('nadia',23,38),

];

let Prince = class extends Cinderella{
constructor(name,age,size) {
    super(name,age, size);
}
}
let prince = new Prince('Anton',23,37)
console.log(prince);

for (const value of cinderellS) {
    if (value.size === prince.size){
        console.log(value);
    }
}
let find = cinderellS.find(value => value.size === 37);
console.log(find);






