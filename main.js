let arr = [8, 4, 9, 12, 3, 6, 32];
let min = arr[0];
let max = arr[0];
for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] < min) {
        min = arr[i];
    } else if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(min);
console.log(max);

let mas = [
    11,
    5.5,
    "строка1",
    25,
    "строка2",
    true,
    9.81, [2, 34, 7],
    10
];
let result1 = [];
let result2 = [];
let result3 = [];
let result4 = [];

for (let j = 0; j < mas.length; j++) {
    if (mas[j] === "boolean") {
        result1.push(mas[j]);
    } else if (mas[j] === "object") {
        result2.push(mas[j]);
    } else if (mas[j] === "number") {
        result3.push(mas[j]);
    } else if (mas[j] === "string") {
        result4.push(mas[j]);
    }
}
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);