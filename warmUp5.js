// 1) Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// ex greaterNum(5, 10) => "The greater number of 5 and 10 is 10."
<<<<<<< HEAD
function greaterNum(a, b){
	if (a > b){
		return "The greater number of " + a + " and " + b + " is " + a;
	}
		return "The greater number of " + a + " and " + b + " is " + b;
	}
=======


>>>>>>> eedf4d1da29beb7f6472f832fb846002ed7197b5
// 2) Write a function named isEven using  for loop that
// -  iterate from x to y.
// -  return array contain the even values,
//  ex:  isEven(1,10) => [2,4,6,8,10]
<<<<<<< HEAD
function isEven(x, y){
	var even = [];
	for (var i = 0; i < even.length; i++){
		while (x <= y) {
			if (x % 2 === 0) {
				even[i] = even.push(x)
			}
			x++
		}
	}
	return even;
}
// function isEven(x, y) {

// }
=======

>>>>>>> eedf4d1da29beb7f6472f832fb846002ed7197b5
//3) write a function named sum that
// - Use a while loop to add up the numbers from x to y.
// ex sum(1,5) => 15
function sum(x, y){
	var result = 0;
	while (x <=y){
		result = result + x;
		x++;
	}
	return result;
}


//4) Write a function named factorial that
// -  Use Recursion to calculate the factorial of a number
// -  the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
// - 5! = 5*4*3*2*1 = 120
// ex : factorial(5) => 120

function factorial(n) {
	if (n === 1 || n === 0) {
			return 1;
	}else if (n > 1){
			return n * factorial(n - 1);
	}else{
			return -(n * factorial(n + 1));
	}	
}

//5) write a function named decimals
//- the function will format a number up to specified decimal places
//- the function will return a string
//- if the parameters not a number return false
// ex :
//      decimals(2100, 'a') ==> false
//      decimals('a', 5) ==> false
//      decimals(2.100212, 2) ==> '2.10'
//      decimals(2.100212, 3) ==> '2.100'
//      decimals(2100, 2) ==> '2100.00'
//
function decimals(n,decimal){
	
}
