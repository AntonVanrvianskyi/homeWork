// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let arr = [];
function explorer (htmlElement){


    console.log(htmlElement)
let children = htmlElement.children
if (htmlElement.children.length!==0) {

    for (const value of children) {
            if (value.classList.length > 0) {
                arr.push(...value.classList)
            }
            explorer(value)
    }
}

}
explorer(document.body);

console.log(...new Set(arr))