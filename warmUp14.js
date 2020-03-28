// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array.
//For example:

// array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
// array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
// array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
//I will compare the two arrays together position by position if it matchs add it to the empty array if it doesn't increment and move to the next. then if the length of the new array matchs the sub then return true.
function isSubset(main, sub){
 	var matchArr = [];
 	var i = 0;
 	var n = 0;
 	while(i < main.length){
		if(main[i] === sub[n]){
 		matchArr.push(sub[n]);
 		i = 0;
 		n++;
 		}else if(main[i] !== sub[n]){
			i++;
 		}
 	}
 	if(matchArr.length === sub.length){
 		return true;
 	}
 		return false;
 }