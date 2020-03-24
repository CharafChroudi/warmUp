// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
//I used the is array function that checks if input is an array or not.
function isArray(arr){
	if(Array.isArray(arr)){
		return true;
	}
		return false;
}
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4],2)=>[1,2]
<<<<<<< HEAD
//I declared a for loop to check each index and push the element of the array into a new one as long as i is less than the n;
function getarray(arr, n){
	emptyArr = [];
	for (var i = 0; i < n; i++){
	emptyArr.push(arr[i]);
	}
	return emptyArr;
}
=======

>>>>>>> 0e47aea7be29872390744ebf393e4da84d716048
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************``

//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]
//I need to use object.keys and values to retrieve the values of the object into new arrays.
function convert(obj){
	var arrayobj = obj;
	for(var i = 0; i < arrayobj.length; i++){
	 emptyArr.push(Object.keys(obj));
	 emptyArr.push(Object.values(obj));
	}
	return emptyArr;
}
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
