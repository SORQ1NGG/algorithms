function recursiveBinarySearch(arr, item, left, right) {
    let midpoint = Math.floor((left + right) / 2);

    if (item === arr[midpoint]) {
        return midpoint;
    }
    if (item < arr[midpoint]) {
        return recursiveBinarySearch(arr, item, left, midpoint - 1);
    }else {
        return recursiveBinarySearch(arr, item, midpoint + 1, right);
    }
}


let array = [1, 2, 3, 4, 5, 6,];

console.log(recursiveBinarySearch(array, 6, 0, array.length));