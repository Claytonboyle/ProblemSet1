// Problem Set 1

var letterCapitalize = function (str) {
	var myArray = str.split(/\s+/g);

	for (var i=0;i<myArray.length;i++){
		myArray[i]=myArray[i].charAt(0).toUpperCase()+myArray[i].slice(1);

	}

	myStr = myArray.join(" ");
	console.log(myStr);
}

letterCapitalize(prompt("Enter a string please: "));


var wordCount = function(str){

	var countArray = str.split(/\s+/g);
	return countArray.length;
}

var num=wordCount(prompt("Enter a string please: "));
console.log("You have "+num+" words in the string.");

var primeTime = function (number) {
	var upperLimit = parseInt(number/2) + 1;
	for (var i= 2;i<upperLimit;i++){
		if (number%i == 0){
			console.log("Smallest divisor: "+i);
			return false;
		}
	}
	return true;
}

var number= prompt("Enter a number please: ");

console.log("Is "+number+" a prime: " + primeTime(number));