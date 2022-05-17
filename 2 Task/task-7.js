// # Задача 7

// Напишите код, который посчитает сумму всех парных элементов в массиве.

// Использовать встроенные методы массивов — нельзя.

// ```js
// const array = [1, 2, 3, 4];
// ```

const array = [1, 2, 3, 4];
let result = 0;


for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if ( number %2 === 0) {
    result += number;
    }
}
console.log(result);