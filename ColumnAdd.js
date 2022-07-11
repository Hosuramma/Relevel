let $2Darr = [
    [-1, 2, 3, 4],
    [5, -1, 7, 8],
    [9, 0, -1, 1],
    [1, 1, 1, -1]
];

const columnSum = $2Darr.reduce((arr1,arr2) => arr1.map((sum, id) => sum+arr2[id]));
console.log(columnSum);