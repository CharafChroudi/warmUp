// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors
var females = ["Ranoua","Wala", "Meryem", "Khaoula"];
var males = ["Ahmed", "Charaf", "Master", "Akil"];
var staff = ["Insaf", "Dhia", "Houda", "Omar"];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle(array){
	var i = Math.floor(array.length / 2);
	return array[i];
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multiply(array){
	for (var i = 0; i < array.length; i = i+2){
			array[i] = array[i] *2;
		}
	return array;
} 