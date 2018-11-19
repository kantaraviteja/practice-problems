// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

let test_cases = [
    [],
    [56],
    [1,2,3],
    [0,0,0,0],
    [0,2,3,4],
    [2,3,4,5,6],
    [2364582346,8237648,298377,92736473246]
]

function arrayProduct_bruteforce(a) {
    if (a.length == 0) {
        return a;
    }

    let product = a.reduce((acc, curr) => acc * curr);
    return a.map( e => (product / e) );
}

function arrayProduct_with_extraSpace(arr) {
    let len = arr.length;
    let left = [], right = [], prod = [];
    left[0] = 1;
    right[len-1] = 1;

    for (let i = 1;i < len; i++) {
        left[i] = left[i-1] * arr[i-1];
    }

    for (let i = len-2; i >= 0; i--) {
        right[i] = right[i+1] * arr[i+1];
    }
    
    for (let i = 0;i < len; i++) {
        prod[i] = left[i] * right[i];
    }

    return prod;
}

function arrayProduct_efficient(arr) {
    let prod = [];
    let temp = 1;
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        prod[i] = temp;
        temp = prod[i] * arr[i];
    }
    temp = 1;
    for(let i = len-1; i >= 0; i--) {
        prod[i] *= temp;
        temp *= arr[i];
    }
    return prod;
}

test_cases.forEach(function(arr){
    console.log("input: "+arr+" Output: "+ arrayProduct_efficient(arr));
});