function min(arr) {
    let min = arr[0];
    let minIter = 0;
    for (let i = 0; i<arr.length;++i) {
        if(arr[i]<min) {
            min = arr[i];
            minIter = i;
        }
    }
    arr.splice(minIter, 1);
}
function max(arr) {
    let max = arr[0];
    let maxIter = 0;
    for (let i = 0; i<arr.length;++i) {
    if(arr[i]>max) {
        max = arr[i];
        maxIter = i;
    }
}
arr.splice(maxIter, 1);
}
function firstTask(arr) {
    max(arr);
    min(arr);
    console.log(arr);
}
// firstTask([1, 2]);
// firstTask([1, 2, 3]);
// firstTask([4, 3, 1, 2]);
// firstTask([1, 2, 2]);
function isOdd(number) {
    return number % 2 != 0;
}
function findOdd(arr) {
    let result = [];
    for (const iterator of arr) {
        if (isOdd(iterator)) {
            result.push(iterator);
        }
    }
    return result;
}
function secondTask(arr) {
    return findOdd(arr);
}
// console.log(secondTask([1, 2]));
// console.log(secondTask([1, 2, 3]));
// console.log(secondTask([4, 3, 1, 2]));
// console.log(secondTask([4, 2, 2]));

function fourTask(arr){
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        result.push(arr[i]-arr[i-1]);
        
    }
    return result;
}
// console.log(fourTask([1, 2]));
// console.log(fourTask([1, 2, 3]));
// console.log(fourTask([4, 3, 1, 2]));
// console.log(fourTask([4, 2, 2]));
function thirdTask(arr){
    let result = [];
    for (let i = 0; i < arr.length; i+=2) {
        if ((i+1)===arr.length) {
            result.push(arr[i]);
        } else {
            result.push(arr[i]+arr[i+1]);
        }
    }
    return result;
}
console.log(thirdTask([1, 2]));
console.log(thirdTask([1, 2, 3]));
console.log(thirdTask([4, 3, 1, 2]));
console.log(thirdTask([4, 2, 2]));
