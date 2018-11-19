// This problem was asked by Jane Street.

// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:

// def cons(a, b):
//     def pair(f):
//         return f(a, b)
//     return pair

// Implement car and cdr.

function cons(a, b) {
    function pair(f) {
        return f(a, b);
    }
    return pair;
}

function car(cons) {
    function first() {
        return arguments[0];
    }
    return cons(first);
}

function cdr(cons) {
    function second() {
        return arguments[1];
    }
    return cons(second);
}

console.log(cdr(cons(2, 3)));

/* 
    The cons function return another funtion called Pair which in turn executes any function passed
    into it by passing the arguments of cons.
    Therefore, the implementation of car and cdr should only need to contain a function which returns
    first and last arguments respectively.
*/