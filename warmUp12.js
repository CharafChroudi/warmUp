// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o0l1l2e3h4"
function reverseStr(str){
	var reverse = "";
	var i = str.length;
	var num = 0;
	while(i > 0){
		reverse = reverse + str[i-1] + num;
		str.slice(1);
		num++;
		i--;
	}
	return reverse;
}
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function SameLength(array){
	var emptyString = [];
	for (var i = 0; i <= array.length; i++){
		if(array[i].length === array[i].length){
			emptyString = emptyString + ', ' + array[i];
			i++;
		}
			i++;
	}
	return emptyString.slice(1);
}