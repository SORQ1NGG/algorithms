function binarySearch(num, item) {
    let left = 0;
    let right = num.length - 1;
    let midpoint;

    while (left <= right) {
        midpoint = Math.floor((right + left) / 2);

        if (num[midpoint] === item) return midpoint;
        if (item < num[midpoint]) {
            right = midpoint - 1;
        }else {
            left = midpoint + 1;
        }
    }
    return null;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(binarySearch(array, 8));