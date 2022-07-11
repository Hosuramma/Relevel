let m = 4;
let n = 4;
// let arr = new Array(m);
// console.log(arr);
let arr = Array.from(
    Array(m), // create a  arr of m size
     (x) => {
        console.log(x)    
})

// let str = "RELEVEL";
// console.log(Array.from(str)); // create an arr of characters o/p is ['R', 'E','L','V','E','L']

// console.log(Array.from([1,2,3,4],  (elem) => elem + 10));
// console.log([1,2,3,4].map((elem) => elem + 10));

// let $2Darr = new Array(['R', 'E','L'],[,'V','E','L'],['R', 'E','L','V','E','L']) //create an 2darr
// console.log($2Darr);