// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let arrList = [];
function iterator(htmlElement) {
   // console.log(htmlElement);
   let children = htmlElement.children
   if (htmlElement.children!==0) {
       for (const value of children) {
           if (value.nodeName === 'H2'){
               arrList.push(value.textContent)
           }
           iterator(value)
       }
   }
}
function createList(arrList) {
    let div = document.getElementById('content');
    const ul = document.createElement('ul');
    for (const value of arrList) {
        const li = document.createElement('li');
        li.innerText = value;
        ul.appendChild(li);
    }
    div.appendChild(ul)
}
iterator(document.body);
createList(arrList);



