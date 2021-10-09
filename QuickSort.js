function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (arr[i] < pivot) {
            less.push(arr[i]);
        }else {
            greater.push(arr[i]);
        }
    }
    return [...QuickSort(less), pivot, ...QuickSort(greater)];
}

let array = [-1, -4, 12, 10, 1, 1000, 145, 343, 0];

console.log(QuickSort(array));