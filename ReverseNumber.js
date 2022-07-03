function ReverseNumber(num)  {
    
    let sum = 0;
    let reverseNumber = 0;
    while(num>0)
    
    {
        let digit = num % 10;
        console.log(digit);
        reverseNumber = reverseNumber * 10+digit;
       num = Math.floor(num /= 10);
    }
    console.log(reverseNumber);

   
    
}

ReverseNumber(12);

var newYear2022 = ( function(y) { return y*y;}(newYear2022));