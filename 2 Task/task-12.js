// # Задача 12

// Найдите сумму положительных элементов массива.

// Использовать встроенные методы массивов — нельзя.

// ```javascript
// const array = [2, -1, -3, 15, 0, 4];
// ```

const array = [2, -1, -3, 15, 0, 4];
let sum = 0;

for (let i =0; i < array.length; i++){
    const number = array[i];

    if (number > 0){
        sum += number;
    }
}
console.log(sum);