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