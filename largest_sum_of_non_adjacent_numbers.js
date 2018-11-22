function largest_sum (a, i) {
    i = i || 0;
    if(i>=a.length){
        return 0;
    }

    return Math.max( a[i] + largest_sum(a, i+2), largest_sum(a, i+1) );
}

let test_cases = [
    [2,4,6,2,5],
    [1,2,-3,4,-5]
];

test_cases.forEach(a=>console.log(largest_sum(a)));