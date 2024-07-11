// A function with two arguments

var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};
var showProduct=function(number1,number2){
	var total= number1*number2;
	console.log("The product is " + total);
}
showSum(30, 23);
showSum(2.8, -5);
showSum(56, 74);
showProduct(3, 5);
showProduct(9,6);
showProduct(6,8);
var showDifference=function(number1,number2){
	var total= number1 - number2;
	console.log("The difference is " + total);
}
showDifference(30, 23);
showDifference(28, 97);
showDifference(56, 74);

var showQuotient=function(number1,number2){
	var total= number1 / number2;
	console.log("The quotient is " + total);
}
showQuotient(950, 3);
showQuotient(582, 67);
showQuotient(89, 7);

/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */