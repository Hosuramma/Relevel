let bombMatrix = [
    [-1, 2, 3, 4],
    [5, -1, 7, 8],
    [9, 0, -1, 1],
    [1, 1, 1, -1]
];
// console.log(bombMatrix.length);
bombMatrix.map((elements, index) => {
    elements.map((element, index) => {
        if (elements[index] === -1 && index !== bombMatrix.length-1) {
            // elements[index + 1] + 1;
            console.log(elements[index + 1] + 1);
        }
    })
})

