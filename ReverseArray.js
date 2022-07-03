// let arr = [1,2,4,6,4,3];

// for (let i =arr.length;i>0;i--){
//     console.log(arr[i]);
// }

// function reversArray(arr){
    
//     return (arr.length < 2 ? arr : [arr.pop()].concat(reversArray(arr)));
// }

// console.log(reversArray([3,5,4,78,6]));

function shiftArrNegativeNumbers(arr){
    let shiftArr = [];
    for (let i=0;i<=arr.length;i++) {
        if (arr[i]<0){
            console.log(arr[i]);
            //  arr[i].unshift().concat(reversArray(i));
            
            shiftArr[i] = arr[i].shift();
            console.log(shiftArr[i]);
        }
    }
    return arr;
}

console.log(reversArray([-13,-5,4,78,6]));