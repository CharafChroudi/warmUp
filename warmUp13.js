// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n
//starting from 0, e.g.:
// mult(3); // => 6
// mult(4); // => 24
//So I will be using recursion to build this function to keep reoccuring the same action until we reach the stop condition.
function mult(n){
	var total = 0;
	if(n <= 1){
		return 1;
	}else if(n > 1){
		return total = n * mult(n - 1);
	}
}
// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number.
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
//I create an empty string to start adding the incremenation twice until it reaches n then I slice the first element.
function sameNum(n){
	var string = '';
	var i = 1;
	while (n >= i){
		string = string + ' ' + i + ' ' + i ;
		i++;
	}
	return string.slice(2);
}