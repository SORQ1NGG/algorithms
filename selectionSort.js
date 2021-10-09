function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
    return arr;
}


let array = [2, 3, 5, 4, 12, 14, 123, 54, 1];

console.log(selectionSort(array));