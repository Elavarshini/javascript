// Using the square function

var square;
var cube;
square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};
cube = function (numberToCube) {
  var result;
  result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result);
};
square(10);
square(-2);
square(1111);
square(0.5);
cube(2);
cube(-3);
cube(5);
cube(0.1);
var squareRoot=function(number){
  var result;
  result=Math.sqrt(number);
  console.log("The squareRoot of number " + number + " is " + result);

}
squareRoot(9);
squareRoot(85);
squareRoot(565);
squareRoot(873);

/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Call your cube function four times
 *    with different arguments to test it.
 *
 * Math.sqrt is a built-in function to find
 * the square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */