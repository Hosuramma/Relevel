function Palindrome(num)  {
    
    let num2 = num;
    let reverseNumber = 0;
    while(num>0)
    
    {
        let digit = num % 10;
        reverseNumber = reverseNumber * 10+digit;
       num = Math.floor(num /= 10);
    }

   if (reverseNumber === num2) {
    console.log("palindrome")
   } else {
    console.log("not a palindrome")
   }
    
}

Palindrome(121);
Palindrome(17);