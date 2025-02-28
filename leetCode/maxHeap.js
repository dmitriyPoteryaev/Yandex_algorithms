
function maxHeapify(arr) {

    for(let i = arr.length-1; i >= 0; i--) {

        helperFunc(arr, i);
        console.log(i, arr);
    }

    return arr;
}
function helperFunc(arr, index) {
    console.log(index > Math.ceil((arr.length - 1)/2) - 1, Math.ceil((arr.length - 1)/2) - 1);
    if(index > Math.ceil((arr.length - 1)/2) - 1) return;

    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let swap = left;
    
    if(right < arr.length && arr[right] > arr[left])
        swap = right;

    if(arr[index] >= arr[swap]) return;

    let tmp = arr[index];
    arr[index] = arr[swap];
    arr[swap] = tmp;
    helperFunc(arr, swap);
}

console.log(maxHeapify([10, 15, 30, 40, 50, 100, 90]));