// # Задача 9

// Отсортируйте массив по убыванию.

// Использовать встроенные методы массивов — нельзя.

// ```javascript
// const arr = [1, 2, 3, 4, 5, 6];
// // [6,5,4,3,2,1]
// ```

const arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    let min = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > min) {
            var temp = arr[i];
            min = arr[j];
            arr[i] = min;
            arr[j] = temp;
        }
    }
}
console.log(arr);