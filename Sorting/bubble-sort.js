// Big O = O(n^2)

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
}

const arr = [2, 7, -3, 50, 6]
bubbleSort(arr);
console.log(arr);