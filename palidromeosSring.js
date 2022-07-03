// let str = "kaayak";

// let wordlength = Math.floor(str.length/2);
// console.log(wordlength);

// for(let i = 0;i<wordlength;i++) {
//     if(str[i] != str[str.length-1-i]){
//         console.log(false);
//     } 
// }

// console.log(3*3, 3**3);

// for(let i = 2;i<=100;i=i*2) {
//     console.log(i);
// }

// let variable = [];
// console.log(typeof(variable));
// console.log(5+'5'+'hello'+5+5);

// function add(num1,num2) {
//     return num1+num2;
// }

// console.log(add(1,2));
// console.log(parseInt("123hello"));
//console.log(1,2);
// console.log(2 == '2');
// console.log(2 === '2');
// var a = true +true+true*3;
// var a;
// console.log(a);

// let num = 5;

// function test(){

// let num = 10;

// console.log(num);

// }

// test();

// console.log(num);
// let no = 4.5473957;

// console.log(Math.ceil(no), Math.floor(no), Math.round(no))

// console.log("" === 0);
function letsFizzBuzz(n){
    // use console.log("hello") to print the output, you may use string to concat output in one line
    // let output = "";
    // console.log(output);
	for (let i=1;i<=n;i++) {
		if((i%15 === 0)){
			console.log("FizzBuzz")
		} else if(i%3 === 0) {
			console.log('Fizz');
		} else if(i%5 === 0) {
			console.log("Buzz")
		} else {
			console.log(i);
		}
	}
}

letsFizzBuzz(100);

