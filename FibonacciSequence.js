// function fibinacciSequence(N) {
//     let a = 0;
//     let b = 1;
//     let c = a+b;
//     console.log(a);
//     console.log(b);
//     while(c<N) {
//         a=b;
//         b=c;
//         c=a+b;
//         console.log(a,b,c);
//     }
//     console.log(a,b,c);
// }

// fibinacciSequence(12);

let N = 3;
if (N ===1) {
    console.log(0);
} else if(N ===1){
    console.log(0);
} else {
    let a = 0;
    let b = 1;
    let c = a+b;

    for (let i=3;i<=N;i++) {
        c=a+b;
        a=b;
        b=c;
        
       
     }
     console.log(c);
}
