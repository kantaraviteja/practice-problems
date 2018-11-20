// This problem was asked by Facebook.
// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, 
// count the number of ways it can be decoded.
// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
// You can assume that the messages are decodable. For example, '001' is not allowed.


function number_of_ways_to_decode(str) {
    if (!str || str.length === 0) {
        return 0;
    }
    else if (str.length === 1) {
        return 1;
    }
    else if (str.length === 2 ) {
        return (parseInt(str,10) < 27) ? 2 : 1;
    }
    else {
        return (number_of_ways_to_decode(str.substring(1)) + number_of_ways_to_decode(str.substring(2)));
    }
}

let test_cases = [
    "",
    "1",
    "12",
    "123",
    "1234",
    "12345",
    "111"
];

test_cases.forEach(str=>console.log(number_of_ways_to_decode(str)));
