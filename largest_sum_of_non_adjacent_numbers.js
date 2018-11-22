// This problem was asked by Airbnb.

// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

function largest_sum (a, i) {
    i = i || 0;
    if(i>=a.length){
        return 0;
    }

    return Math.max( a[i] + largest_sum(a, i+2), largest_sum(a, i+1) );
}

function memoized_largest_sum (a, dp, i) {
    i = i || 0;
    dp = dp || [];
    if(i >= a.length) {
        return 0;
    }
    else {
        if (!dp[i]) {
            dp[i] =  Math.max( a[i] + memoized_largest_sum(a, dp,i+2), memoized_largest_sum(a, dp,i+1) );
        }
        return dp[i];
    }
}

let test_cases = [
    [2,4,6,2,5],
    [1,2,-3,4,-5]
];

test_cases.forEach(a=>console.log(memoized_largest_sum(a)));