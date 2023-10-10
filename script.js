function fibs (n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    let array = new Array(n);
    array[0] = 0;
    array[1] = 1;
    for (let i = 2; i < n; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array;
}

const array = [];
function helper(n) {
    if (n < 2) return n;
    return helper(n - 1) + helper(n - 2);
}
function fibsRec (n) {
    const array = new Array(n);
    for ( i = 0; i < n; i++) {
        array[i] = helper(i);
    }
    return array;
}

//below is what is from stack overflow
//idea is to the array from n is only one number different from the the array from n-1 and that number can be calculated recursively
function fibsRec1 (n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    let arr = fibsRec1(n - 1);
    return [...arr, arr[n - 2] + arr[n - 3]];
}

function mergeSort(array, start, end) {
    if (start === end) return [array[start]];
    const mid = Math.floor((start + end) / 2);
    const left = mergeSort(array, start, mid);
    const right = mergeSort(array, mid + 1, end);
    let i = 0, j = 0, k = 0;
    const newArray = new Array(end - start + 1);
    while (k < newArray.length) {
        if (i >= left.length) {
            newArray[k] = right[j];
            j++;
            k++;
            continue;
        }
        if (j >= right.length) {
            newArray[k] = left[i];
            i++;
            k++;
            continue;
        }
        if (left[i] < right[j]) {
            newArray[k] = left[i];
            i++;
        } else {
            newArray[k] = right[j];
            j++;
        }
        k++;
    }
    return newArray;
}

console.log(mergeSort([3,4,8,5,2,9,1], 0, 6));