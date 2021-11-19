// ejemplo 1 
function sum(a, b) {
    return a + b;
}

function calc(a, b, callback) {
    return callback(a, b);
}

console.log(calc(6, 4, sum));

// ejemplo 2
function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    },3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);