// 1 - Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively
function larger(string1, string2){
	if(string1.length > string2.length){
		return string1;
	}
		return string2;
}

function smaller(string1, string2){
	if(string1.length > string2.length){
		return string2;
	}
		return string1;
}
// 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
<<<<<<< HEAD
    function counter(){
    var	counter = 0;
    counter = counter + 1;
    return counter + counter();
}
=======
// function counting(n) {
// TODO: your code here
// }
// counting(5); // => '1, 2, 3, 4, 5'
// counting(1); // => '1'
// counting(3); // => '1, 2, 3'
>>>>>>> 4ab3967cd0764bea1a7614a1d87ac2da4d6ea391

// 3 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5
// welcome 1
//  welcome 2, meet 1
//  welcome 3, meet 1 and 2
//  welcome 4, meet 1, 2 and 3
//  welcome 5, meet 1, 2, 3 and 4
function meetGreet(n){
	if (n <= 1){
		return 'Welcome ' + n;
	}
		return 'Welcome ' + meetGreet(n + 1) + ', meet ' + meetGreet(n - 1);
}

// 4- Write a function shortestWord that works like longestWord, but returns the shortest word instead.
<<<<<<< HEAD
function shortestWord(){

}
=======
>>>>>>> 4ab3967cd0764bea1a7614a1d87ac2da4d6ea391
