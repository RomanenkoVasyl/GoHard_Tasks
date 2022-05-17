// # Задача 8

// Напишите код, который посчитает сумму всех парных элементов в массиве. В суммировании участвуют только элементы больше 3.

// Использовать встроенные методы массивов — нельзя.

// ```js
// const array = [1, 2, 3, 4, 5, 6];
// ```

const array = [1, 2, 3, 4, 5, 6];
let result = 0;

for(let i = 0; i < array.length; i++){
    const number = array[i];
    if (number %2 === 0 && number > 3){
        result += number;
    }
}
console.log(result);