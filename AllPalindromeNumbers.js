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
    console.log("palindrome", num2)
   } else {
    console.log("not a palindrome", num2)
   }
    
}

let N = 200;
for (let i=1;i<N;i++) {
    Palindrome(i)
   };