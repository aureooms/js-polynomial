"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__horner__ = __horner__;

/**
* Model for a little endian polynomial evaluation function
* using Horner's algorithm.
*
* @param  {function} imov     number in place move function
* @param  {function} iadd     number in place addition function
* @param  {function} imul     number in place multiplication function
* @return {function} polynomial evaluation function
*/

function __horner__(imov, iadd, imul) {

	/**
 * Evaluates little endian polynomial [i , j[ for x
 * using Horner's algorithm.
 *
 * @param  {const polynomial}  p the polynomial to evaluate
 * @param  {index} i             left index of polynomial
 * @param  {index} j             right index of polynomial
 * @param  {const number} x      number for which the polynomial is evaluated
 * @param  {number} y            0 initialized number
 * @return {number}              param y
 */

	var horner = function horner(p, i, j, x, y) {

		if (i < j) {

			--j;

			y = imov(y, p[j]);

			while (i < j) {

				--j;

				y = iadd(imul(y, x), p[j]);
			}
		}

		return y;
	};

	return horner;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ldmFsdWF0ZS9ob3JuZXIuanMiXSwibmFtZXMiOlsiX19ob3JuZXJfXyIsImltb3YiLCJpYWRkIiwiaW11bCIsImhvcm5lciIsInAiLCJpIiwiaiIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7OztRQVdnQkEsVSxHQUFBQSxVOztBQVZoQjs7Ozs7Ozs7OztBQVVPLFNBQVNBLFVBQVQsQ0FBc0JDLElBQXRCLEVBQTZCQyxJQUE3QixFQUFvQ0MsSUFBcEMsRUFBMkM7O0FBR2pEOzs7Ozs7Ozs7Ozs7QUFZQSxLQUFJQyxTQUFTLFNBQVRBLE1BQVMsQ0FBV0MsQ0FBWCxFQUFlQyxDQUFmLEVBQW1CQyxDQUFuQixFQUF1QkMsQ0FBdkIsRUFBMkJDLENBQTNCLEVBQStCOztBQUUzQyxNQUFLSCxJQUFJQyxDQUFULEVBQWE7O0FBRVosS0FBRUEsQ0FBRjs7QUFFQUUsT0FBSVIsS0FBTVEsQ0FBTixFQUFVSixFQUFFRSxDQUFGLENBQVYsQ0FBSjs7QUFFQSxVQUFRRCxJQUFJQyxDQUFaLEVBQWdCOztBQUVmLE1BQUVBLENBQUY7O0FBRUFFLFFBQUlQLEtBQU1DLEtBQU1NLENBQU4sRUFBVUQsQ0FBVixDQUFOLEVBQXNCSCxFQUFFRSxDQUFGLENBQXRCLENBQUo7QUFFQTtBQUVEOztBQUVELFNBQU9FLENBQVA7QUFFQSxFQXBCRDs7QUFzQkEsUUFBT0wsTUFBUDtBQUVBIiwiZmlsZSI6Imhvcm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4qIE1vZGVsIGZvciBhIGxpdHRsZSBlbmRpYW4gcG9seW5vbWlhbCBldmFsdWF0aW9uIGZ1bmN0aW9uXG4qIHVzaW5nIEhvcm5lcidzIGFsZ29yaXRobS5cbipcbiogQHBhcmFtICB7ZnVuY3Rpb259IGltb3YgICAgIG51bWJlciBpbiBwbGFjZSBtb3ZlIGZ1bmN0aW9uXG4qIEBwYXJhbSAge2Z1bmN0aW9ufSBpYWRkICAgICBudW1iZXIgaW4gcGxhY2UgYWRkaXRpb24gZnVuY3Rpb25cbiogQHBhcmFtICB7ZnVuY3Rpb259IGltdWwgICAgIG51bWJlciBpbiBwbGFjZSBtdWx0aXBsaWNhdGlvbiBmdW5jdGlvblxuKiBAcmV0dXJuIHtmdW5jdGlvbn0gcG9seW5vbWlhbCBldmFsdWF0aW9uIGZ1bmN0aW9uXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gX19ob3JuZXJfXyAoIGltb3YgLCBpYWRkICwgaW11bCApIHtcblxuXG5cdC8qKlxuXHQqIEV2YWx1YXRlcyBsaXR0bGUgZW5kaWFuIHBvbHlub21pYWwgW2kgLCBqWyBmb3IgeFxuXHQqIHVzaW5nIEhvcm5lcidzIGFsZ29yaXRobS5cblx0KlxuXHQqIEBwYXJhbSAge2NvbnN0IHBvbHlub21pYWx9ICBwIHRoZSBwb2x5bm9taWFsIHRvIGV2YWx1YXRlXG5cdCogQHBhcmFtICB7aW5kZXh9IGkgICAgICAgICAgICAgbGVmdCBpbmRleCBvZiBwb2x5bm9taWFsXG5cdCogQHBhcmFtICB7aW5kZXh9IGogICAgICAgICAgICAgcmlnaHQgaW5kZXggb2YgcG9seW5vbWlhbFxuXHQqIEBwYXJhbSAge2NvbnN0IG51bWJlcn0geCAgICAgIG51bWJlciBmb3Igd2hpY2ggdGhlIHBvbHlub21pYWwgaXMgZXZhbHVhdGVkXG5cdCogQHBhcmFtICB7bnVtYmVyfSB5ICAgICAgICAgICAgMCBpbml0aWFsaXplZCBudW1iZXJcblx0KiBAcmV0dXJuIHtudW1iZXJ9ICAgICAgICAgICAgICBwYXJhbSB5XG5cdCovXG5cblx0dmFyIGhvcm5lciA9IGZ1bmN0aW9uICggcCAsIGkgLCBqICwgeCAsIHkgKSB7XG5cblx0XHRpZiAoIGkgPCBqICkge1xuXG5cdFx0XHQtLWogO1xuXG5cdFx0XHR5ID0gaW1vdiggeSAsIHBbal0gKSA7XG5cblx0XHRcdHdoaWxlICggaSA8IGogKSB7XG5cblx0XHRcdFx0LS1qIDtcblxuXHRcdFx0XHR5ID0gaWFkZCggaW11bCggeSAsIHggKSAsIHBbal0gKSA7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiB5IDtcblxuXHR9IDtcblxuXHRyZXR1cm4gaG9ybmVyIDtcblxufVxuIl19