// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let min = (a,b,c)=>{
//     if(a<b && a<c){
//         console.log(a)
//     }else if(b<a && b<c){
//         console.log(b)
//     }else if(c<a && c<b){
//         console.log(c)
//     }
// }
// min(5,6,3)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let max = (a,b,c) =>{
//     if (a>b && a>c){
//         console.log(a)
//     }else if (b>a && b>c){
//         console.log(b)
//     }else if (c>a && c>b){
//         console.log(c)
//     }
// }
// max(33,44,23)

// - створити функцію яка повертає найбільше число з масиву
// let max = (arr)=>{
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//          if(arr[i]>max){
//              max = arr[i]
//          }
//     }
//     return max
// }
// console.log(max([34, 33, 21,324]));

// - створити функцію яка повертає найменьше число з масиву
// let min = (arr) =>{
//     let minValue = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]<minValue) {
//             minValue = arr[i];
//         }
//     }
//     return minValue
// }
// console.log(min([4, 3, 2, 45]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sum = (arr) =>{
//     let max = 0;
//     for (const item of arr) {
//         max += item;
//     }
//     return max
// }
// console.log(sum([1, 2, 10]));

// - Дано натуральное число n. Выведите все числа от 1 до n.
// let foo = (n) =>{
//
//     for (let i = 1; i < n; i++) {
//         // const nElement = n[i];
//        n[i] = n
//         console.log(n[i])
//     }
// }
// foo(20)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let foo = (arr, i) =>{

}
foo([9,8,0,4],0)
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]