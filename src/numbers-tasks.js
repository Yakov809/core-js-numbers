/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns an area of a rectangle given by width and height.
 */

function getRectangleArea(width, height) {
  return width * height;
}

/**
 * Returns a circumference of circle given by radius.
 *
 */
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

/**
 * Returns an average of two given numbers.
 *
 */
function getAverage(valNum1, valNum2) {
  return valNum1 / 2 + valNum2 / 2;
}

/**
 * Returns a distance between two points by cartesian coordinates.
 *
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 */
function getLinearEquationRoot(a, b) {
  return (0 - b) / a;
}

/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const scalar = x1 * x2 + y1 * y2;
  const vector01Length = Math.sqrt(x1 ** 2 + y1 ** 2);
  const vector02Length = Math.sqrt(x2 ** 2 + y2 ** 2);
  const cos = scalar / (vector01Length * vector02Length);
  return Math.acos(cos);
}

/**
 * Returns a last digit of a integer number.
 * The input parameter will always be greater than or equal to zero and will be in decimal notation.
 */
function getLastDigit(val) {
  return val % 10;
}

/**
 * Returns a number by given string representation.
 *
 */
function parseNumberFromString(num) {
  return parseFloat(num);
}

/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 *
 */
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

/**
 * Returns the number rounded to specified power of 10.
 *
 */
function roundToPowerOfTen(num, pow) {
  const number = 10 ** pow;
  return Math.round(num / number) * number;
}

/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 */
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Tries to convert value to number and returns it if conversion was successful;
 * otherwise returns default value passed as a second argument.
 *
 */
function toNumber(value, def) {
  if (Number(value)) {
    return Number(value);
  }
  return def;
}

/**
 * Returns the cube of the given number.
 *
 */
function getCube(num) {
  return num ** 3;
}

/**
 * Returns the Fibonacci number located at the index position.
 *
 */
function getFibonacciNumber(index) {
  let a = 1;
  let b = 1;
  let c;
  if (index === 0) return 0;
  for (let i = 3; i <= index; i += 1) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

/**
 * Returns the sum of all numbers from 1 to n.
 *
 */
function getSumToN(n) {
  let a = 0;
  for (let i = 1; i <= n; i += 1) {
    a += i;
  }
  return a;
}

/**
 * Returns the sum of the digits of a given number.
 *
 */
function getSumOfDigits(num) {
  let result = 0;
  let temp = num;
  while (temp) {
    result += temp % 10;
    temp -= temp % 10;
    temp /= 10;
  }
  return result;
}

/**
 * Returns true if the given number is a power of two, false otherwise.
 *
 * @param {number} num
 * @return {boolean}
 *
 * @example:
 *   4   => true
 *   16  => true
 *   15  => false
 */
function isPowerOfTwo(num) {
  return Math.log2(num) % 1 === 0;
}

/**
 * Returns the sine of a number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   0 => 0
 *   Math.PI / 2 => 1
 */
function getSine(num) {
  return Math.sin(num);
}

/**
 * Returns a string representation of a number in a specified base (radix).
 *
 * @param {number} number
 * @param {number} base
 * @return {string}
 *
 * @example:
 * 255, 16 => 'ff'
 * 2, 2    => '10'
 */
function numberToStringInBase(number, base) {
  return number.toString(base);
}

/**
 * Returns a string representation of a number in exponential notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '1.23e+4'
 */
function toExponential(number, fractionDigits) {
  return Number.parseFloat(number).toExponential(fractionDigits);
}

/**
 * Returns a string representation of a number in fixed-point notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '12345.00'
 * 12.345, 1   => '12.3'
 */
function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

/**
 * Returns a string representation of a number in normal (fixed-point or exponential)
 * notation rounded to precision significant digits.
 *
 * @param {number} number
 * @param {number} precision
 * @return {string}
 *
 * @example:
 * 12345, 7    => '12345.00'
 * 12.345, 4   => '12.35'
 */
function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

/**
 * Returns the primitive value of a Number object.
 *
 * @param {Number} number
 * @return {number}
 *
 * @example:
 * new Number(5) => 5
 * Number(-5)    => -5
 */
function getNumberValue(number) {
  return number.valueOf();
}

/**
 * Returns a boolean value indicating whether the parameter is a number or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * Infinity => false
 * NaN      => false
 * 0        => true
 * 'a' / 1  => false
 * 'a'      => false
 * 5        => true
 * '5'      => false
 */
function isNumber(number) {
  return Number.isFinite(number) && !Number.isNaN(parseFloat(number));
}

/**
 * Returns a boolean value indicating whether a number is an integer or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 5    => true
 * 5.1  => false
 * '5'  => false
 */
function isInteger(number) {
  return Number.isInteger(number);
}

/**
 * Returns a floating point number or, if the number cannot be parsed from the argument, returns NaN.
 *
 * @param {string} str
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh' => 4.567
 * 'abcdefgh'      => NaN
 */
function getFloatOnString(str) {
  return Number.parseFloat(str);
}

/**
 * Returns an integer of the specified base or, if the number cannot be parsed
 * from the argument, returns NaN.
 *
 * @param {string} str
 * @param {number} base
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh', 10  => 4
 * 'abcdefgh', 10       => NaN
 * '1.234', 2           => 1
 * '10', 8              => 8
 */
function getIntegerOnString(str, base) {
  return Number.parseInt(str, base);
}

/**
 * Returns whether a number is a safe integer.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 10       => true
 * 3.5      => false
 * 2 ** 53  => false
 */
function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

/**
 * Returns the smallest integer less than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.9  => 5
 * -5.1 => -6
 */
function roundToSmallestInteger(number) {
  return Math.floor(number);
}

/**
 * Returns the largest integer greater than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.1  => 6
 * -5.9 => -5
 */
function roundToLargestInteger(number) {
  return Math.ceil(number);
}

/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 6
 * 5.4  => 5
 * -5.5 => -5
 */
function roundToNearestInteger(number) {
  return Math.round(number);
}

/**
 * Returns the integer part of a number by removing any fractional digits.
 *
 */
function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

/**
 * Returns the sum of numbers.
 *
 */
function getSumOfNumbers(x1, x2, x3) {
  return (x1 + x2 + x3).toFixed(1);
}

/**
 * Returns the largest number.
 *
 */
function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

/**
 * Returns a random integer in the range from min to max.
 *
 * @param {number} min
 * @param {number} max
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns the length of the hypotenuse of a right triangle.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 * 3, 4 => 5
 */
function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 *
 */
function getCountOfOddNumbers(number) {
  return Math.ceil(Math.abs(number / 2));
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
