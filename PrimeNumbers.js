// let num = 4;
// let flag = true;

// for (let i=2; i<num-1; i++) {
   
//     if (num%i===0) {
//         flag=false; // dis line will no execue if number is a prime number
//         break;
//     }
// }

// console.log(flag)

// checking prime number for one one number

function primeNumber(num) {
    let flag = true;
    if (num === 1) {
        return false;
    }
    for (let i=2; i<num-1; i++) {
   
        if (num%i===0) {
            flag=false; // dis line will no execue if number is a prime number
            break;
        }
    }
    return flag;
}

console.log(primeNumber(4)); //false
console.log(primeNumber(5)); //true
console.log(primeNumber(9)); // false
console.log(primeNumber(1)); // nieher prime number is a composie number
