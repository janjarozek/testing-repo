// const prompt = require('prompt-sync')();

// var a = prompt('Give the number a:');
// var b = prompt('Give the number b:');


const sum = (a, b) => {
    // if (isNaN(+a) || isNaN(+b)) return console.log('Give the numbers!');
    if (isNaN(+a) || isNaN(+b)) return false;
    return (+a + +b);
    // console.log(+a + +b);
}

// sum(a,b);

exports.sum = sum;