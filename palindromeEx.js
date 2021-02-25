function is_palindrome(str){
	const regX = /[\W_]/g;
	//remove all non-alphanumeric characters and the underscores
	const lowStr = str.toLowerCase().replace(regX, "");
	// all characters lower case and replace all regX with and Empty String
	const reversed = lowStr.split("").reverse().join("");
	//split them into an array of letters, reverse and rejoin them afterwards
	if (reversed === lowStr) return true;
	//check if the reversed String is identical to the originally String

	return false;
}

console.log(is_palindrome("C0c0c"));
console.log(is_palindrome("John"));
console.log(is_palindrome("Hannah"));
console.log(is_palindrome("Choco"));