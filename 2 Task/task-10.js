// # Задача 10

// Отсортируйте массив по возрастанию.

// Использовать встроенные методы массивов — нельзя.

// ```javascript
// const arr = [6, 5, 4, 3, 2, 1];
// // [1,2,3,4,5,6]
// ```

const arr = [6, 5, 4, 3, 2, 1];

for (let i = 0; i < 9; i++) {
    let min = arr[i];

    for (let j = i + 1; j < 10; j++) {
        if (arr[j] < min) {
            const temp = arr[i];
            min = arr[j];
            arr[i] = min;
            arr[j] = temp;
        }
    }
}
console.log(arr);