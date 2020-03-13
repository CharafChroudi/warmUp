// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.


function merge(first , last){
	return first + ' ' + last ;
}
function multiple(){
	if (13 % 3 === 0){
		return "the number 13 is a multiple of 3";
	}
	return "the number 13 is not a multiple of 3";
}

function average(){
	return	(13 + 14 + 13 + 15 + 16 + 17 + 19 + 13 + 16 + 15) / 10;
}

function age(){
	return 23 * 356 * 24 * 3600 ;
}
