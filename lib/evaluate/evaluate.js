"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__evaluate__ = __evaluate__;

/**
 * Model for a little endian polynomial evaluation function.
 *
 * @param  {function} mov      number move function
 * @param  {function} imov     number in place move function
 * @param  {function} iadd     number in place addition function
 * @param  {function} mul      number multiplication function
 * @param  {function} imul     number in place multiplication function
 * @return {function} polynomial evaluation function
 */

function __evaluate__(mov, imov, iadd, mul, imul) {

	/**
  * Evaluates little endian polynomial [i , j[ for x.
  *
  * @param  {const polynomial}  p the polynomial to evaluate
  * @param  {index} i             left index of polynomial
  * @param  {index} j             right index of polynomial
  * @param  {const number} x      number for which the polynomial is evaluated
  * @param  {number} y            0 initialized number
  * @return {number}              param y
  */

	var evaluate = function evaluate(p, i, j, x, y) {

		var X;

		if (i < j) {

			y = imov(y, p[i]);

			++i;

			if (i < j) {

				// X = x^k , for k in [0 , j - i[

				X = mov(x);

				y = iadd(y, mul(X, p[i]));

				for (++i; i < j; ++i) {

					X = imul(X, x);

					y = iadd(y, mul(X, p[i]));
				}
			}
		}

		return y;
	};

	return evaluate;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ldmFsdWF0ZS9ldmFsdWF0ZS5qcyJdLCJuYW1lcyI6WyJfX2V2YWx1YXRlX18iLCJtb3YiLCJpbW92IiwiaWFkZCIsIm11bCIsImltdWwiLCJldmFsdWF0ZSIsInAiLCJpIiwiaiIsIngiLCJ5IiwiWCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZZ0JBLFksR0FBQUEsWTs7QUFYaEI7Ozs7Ozs7Ozs7O0FBV08sU0FBU0EsWUFBVCxDQUF3QkMsR0FBeEIsRUFBOEJDLElBQTlCLEVBQXFDQyxJQUFyQyxFQUE0Q0MsR0FBNUMsRUFBa0RDLElBQWxELEVBQXlEOztBQUUvRDs7Ozs7Ozs7Ozs7QUFXQSxLQUFJQyxXQUFXLFNBQVhBLFFBQVcsQ0FBV0MsQ0FBWCxFQUFlQyxDQUFmLEVBQW1CQyxDQUFuQixFQUF1QkMsQ0FBdkIsRUFBMkJDLENBQTNCLEVBQStCOztBQUU3QyxNQUFJQyxDQUFKOztBQUVBLE1BQUtKLElBQUlDLENBQVQsRUFBYTs7QUFFWkUsT0FBSVQsS0FBTVMsQ0FBTixFQUFVSixFQUFFQyxDQUFGLENBQVYsQ0FBSjs7QUFFQSxLQUFFQSxDQUFGOztBQUVBLE9BQUtBLElBQUlDLENBQVQsRUFBYTs7QUFFWjs7QUFFQUcsUUFBSVgsSUFBS1MsQ0FBTCxDQUFKOztBQUVBQyxRQUFJUixLQUFNUSxDQUFOLEVBQVVQLElBQUtRLENBQUwsRUFBU0wsRUFBRUMsQ0FBRixDQUFULENBQVYsQ0FBSjs7QUFFQSxTQUFNLEVBQUVBLENBQVIsRUFBWUEsSUFBSUMsQ0FBaEIsRUFBb0IsRUFBRUQsQ0FBdEIsRUFBMEI7O0FBRXpCSSxTQUFJUCxLQUFNTyxDQUFOLEVBQVVGLENBQVYsQ0FBSjs7QUFFQUMsU0FBSVIsS0FBTVEsQ0FBTixFQUFVUCxJQUFLUSxDQUFMLEVBQVNMLEVBQUVDLENBQUYsQ0FBVCxDQUFWLENBQUo7QUFFQTtBQUVEO0FBRUQ7O0FBRUQsU0FBT0csQ0FBUDtBQUVBLEVBaENEOztBQWtDQSxRQUFPTCxRQUFQO0FBRUEiLCJmaWxlIjoiZXZhbHVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogTW9kZWwgZm9yIGEgbGl0dGxlIGVuZGlhbiBwb2x5bm9taWFsIGV2YWx1YXRpb24gZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtICB7ZnVuY3Rpb259IG1vdiAgICAgIG51bWJlciBtb3ZlIGZ1bmN0aW9uXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gaW1vdiAgICAgbnVtYmVyIGluIHBsYWNlIG1vdmUgZnVuY3Rpb25cbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBpYWRkICAgICBudW1iZXIgaW4gcGxhY2UgYWRkaXRpb24gZnVuY3Rpb25cbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBtdWwgICAgICBudW1iZXIgbXVsdGlwbGljYXRpb24gZnVuY3Rpb25cbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBpbXVsICAgICBudW1iZXIgaW4gcGxhY2UgbXVsdGlwbGljYXRpb24gZnVuY3Rpb25cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufSBwb2x5bm9taWFsIGV2YWx1YXRpb24gZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX19ldmFsdWF0ZV9fICggbW92ICwgaW1vdiAsIGlhZGQgLCBtdWwgLCBpbXVsICkge1xuXG5cdC8qKlxuXHQgKiBFdmFsdWF0ZXMgbGl0dGxlIGVuZGlhbiBwb2x5bm9taWFsIFtpICwgalsgZm9yIHguXG5cdCAqXG5cdCAqIEBwYXJhbSAge2NvbnN0IHBvbHlub21pYWx9ICBwIHRoZSBwb2x5bm9taWFsIHRvIGV2YWx1YXRlXG5cdCAqIEBwYXJhbSAge2luZGV4fSBpICAgICAgICAgICAgIGxlZnQgaW5kZXggb2YgcG9seW5vbWlhbFxuXHQgKiBAcGFyYW0gIHtpbmRleH0gaiAgICAgICAgICAgICByaWdodCBpbmRleCBvZiBwb2x5bm9taWFsXG5cdCAqIEBwYXJhbSAge2NvbnN0IG51bWJlcn0geCAgICAgIG51bWJlciBmb3Igd2hpY2ggdGhlIHBvbHlub21pYWwgaXMgZXZhbHVhdGVkXG5cdCAqIEBwYXJhbSAge251bWJlcn0geSAgICAgICAgICAgIDAgaW5pdGlhbGl6ZWQgbnVtYmVyXG5cdCAqIEByZXR1cm4ge251bWJlcn0gICAgICAgICAgICAgIHBhcmFtIHlcblx0ICovXG5cblx0dmFyIGV2YWx1YXRlID0gZnVuY3Rpb24gKCBwICwgaSAsIGogLCB4ICwgeSApIHtcblxuXHRcdHZhciBYIDtcblxuXHRcdGlmICggaSA8IGogKSB7XG5cblx0XHRcdHkgPSBpbW92KCB5ICwgcFtpXSApIDtcblxuXHRcdFx0KytpIDtcblxuXHRcdFx0aWYgKCBpIDwgaiApIHtcblxuXHRcdFx0XHQvLyBYID0geF5rICwgZm9yIGsgaW4gWzAgLCBqIC0gaVtcblxuXHRcdFx0XHRYID0gbW92KCB4ICkgO1xuXG5cdFx0XHRcdHkgPSBpYWRkKCB5ICwgbXVsKCBYICwgcFtpXSApICkgO1xuXG5cdFx0XHRcdGZvciAoICsraSA7IGkgPCBqIDsgKytpICkge1xuXG5cdFx0XHRcdFx0WCA9IGltdWwoIFggLCB4ICkgO1xuXG5cdFx0XHRcdFx0eSA9IGlhZGQoIHkgLCBtdWwoIFggLCBwW2ldICkgKSA7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4geSA7XG5cblx0fSA7XG5cblx0cmV0dXJuIGV2YWx1YXRlIDtcblxufVxuIl19