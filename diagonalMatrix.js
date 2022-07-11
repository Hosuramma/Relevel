function daigonalMatrix(arr = []) {
    for (let i=0;i<arr.length-1;i++){
        for (let j=0;j<arr.length;j++){
            console.log(i,j);
            // console.log(j);
            if(i !== j && arr[i][j] !== 0){
                console.log(i);
                return false
            }
        }
    }
    return true;
}
let $2Darr = [
    [1, 0, 0, 0],
    [0, -1, 0, 0],
    [0, 0, -1, 0],
    [0, 0, -1, -1]
];
console.log(daigonalMatrix($2Darr));