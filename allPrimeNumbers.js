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

// all prime numbers from 1-12 range
let N = 15;
for (let i = 1; i<N;i++) {
    if(primeNumber(i)){
        console.log(i);
    }
}