function armStrongNumber(num)  {
    
    let sum = 0;
    while(num>0)
    
    {
        let digit = num % 10;
        console.log(digit);
        sum = sum+Math.pow(digit, 3);
       num = Math.floor(num /= 10);
    }
    console.log(sum);

    if (num === sum) {
        console.log("armStrongNumber"); 
    }
    
}

armStrongNumber(12);