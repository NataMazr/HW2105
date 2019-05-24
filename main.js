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
    30,
    false,
    5.5,
    "строка1",
    25,
    "строка2",
    true,
    9.81, [2, 34],
    10, [12, 45, 0]
];
let result1 = [];
let result2 = [];
let result3 = [];
let result4 = [];
for (let j = 0; j < mas.length - 1; j++) {
    let t = mas[j];
    // console.log(typeof t);
    if (typeof t === "object") {
        result1.push(t);
    } else if (typeof t === "boolean") {
        result2.push(t);
    } else if (typeof t === "number") {
        result3.push(t);
    } else if (typeof t === "string") {
        result4.push(t);
    }
}
console.log(result2);
console.log(result1);
console.log(result3);
console.log(result4);