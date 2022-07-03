function calculator(no1, no2, operation) {
    switch(operation) {
        case '+':
            console.log(no1+no2);
            break;
        case '-':
            console.log(no1-no2);
            break;
        case '*':
            console.log(no1*no2);
            break;    
        case '/':
            console.log(no1/no2);
            break;
        default:
            console.log("No result")    
    }
}

calculator(4,5,'+');
calculator(3867,9347,'+');
calculator(9,3,'/');
calculator(3,9,'/');
calculator(-5,5,'-');
calculator(56,89,'-');