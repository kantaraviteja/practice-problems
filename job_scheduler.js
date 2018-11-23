// This problem was asked by Apple.

// Implement a job scheduler which takes in a function f and an integer n,
// and calls f after n milliseconds.

function scheduler (func, n) {
    function delay (ttl, callback) {
        let now = Date.now();
        let curr = Date.now();
        while (curr - now < ttl){
            curr = Date.now();
        }
        callback();
    }
 
   delay(n*1000, func);
}

function print() {
    console.log("Hello World!");
}

scheduler(print,3);