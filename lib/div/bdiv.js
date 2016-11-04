"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._bdiv = _bdiv;

/**
 * @param {number function} iszero checks if a number is 0
 * @param {number function} iadd adds two numbers in place
 * @param {number function} isubmul subtracts the multiple of a number to a number in place
 * @param {number function} izero zero number constructor, in place (to allow recycling)
 */

function _bdiv(iszero, iadd, isubmul, izero) {

	/**
  * Big endian dense polynomial division.
  *
  * @param {dense polynomial array} b divisor, normalized
  * @param {dense polynomial array begin} bi
  * @param {dense polynomial array end} bj
  * @param {dense polynomial array} q quotient, initialized to zero
  * @param {dense polynomial array begin} qi
  * @param {dense polynomial array end} qj
  * @param {dense polynomial array} r remainder, initialized to dividend
  * @param {dense polynomial array begin} ri
  * @param {dense polynomial array end} rj
  */

	var bdiv = function bdiv(b, bi, bj, q, qi, qj, r, ri, rj) {

		var m, n, c, y;

		m = rj - ri;
		n = bj - bi;

		for (; m >= n; ++ri, --m) {

			if (iszero(r[ri])) {
				++ri;
				--m;
				continue;
			}

			// b fits r[ri] times in r
			// we add r[ri] * x^(m-n) to q

			q[qj - m + n] = iadd(q[qj - m + n], r[ri]);

			for (i = 1; i < n; ++i) {
				r[ri + i] = isubmul(r[ri + i], b[bi + i], r[ri]);
			}

			// leading coefficient set to zero

			r[ri] = izero(r[ri]);
		}
	};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvYmRpdi5qcyJdLCJuYW1lcyI6WyJfYmRpdiIsImlzemVybyIsImlhZGQiLCJpc3VibXVsIiwiaXplcm8iLCJiZGl2IiwiYiIsImJpIiwiYmoiLCJxIiwicWkiLCJxaiIsInIiLCJyaSIsInJqIiwibSIsIm4iLCJjIiwieSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7O1FBUWdCQSxLLEdBQUFBLEs7O0FBUGhCOzs7Ozs7O0FBT08sU0FBU0EsS0FBVCxDQUFpQkMsTUFBakIsRUFBMEJDLElBQTFCLEVBQWlDQyxPQUFqQyxFQUEyQ0MsS0FBM0MsRUFBbUQ7O0FBRXpEOzs7Ozs7Ozs7Ozs7OztBQWNBLEtBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFXQyxDQUFYLEVBQWVDLEVBQWYsRUFBb0JDLEVBQXBCLEVBQXlCQyxDQUF6QixFQUE2QkMsRUFBN0IsRUFBa0NDLEVBQWxDLEVBQXVDQyxDQUF2QyxFQUEyQ0MsRUFBM0MsRUFBZ0RDLEVBQWhELEVBQXFEOztBQUVqRSxNQUFJQyxDQUFKLEVBQVFDLENBQVIsRUFBWUMsQ0FBWixFQUFnQkMsQ0FBaEI7O0FBRUFILE1BQUlELEtBQUtELEVBQVQ7QUFDQUcsTUFBSVIsS0FBS0QsRUFBVDs7QUFFQSxTQUFRUSxLQUFLQyxDQUFiLEVBQWlCLEVBQUVILEVBQUYsRUFBTyxFQUFFRSxDQUExQixFQUE4Qjs7QUFFN0IsT0FBS2QsT0FBUVcsRUFBRUMsRUFBRixDQUFSLENBQUwsRUFBdUI7QUFDdEIsTUFBRUEsRUFBRjtBQUNBLE1BQUVFLENBQUY7QUFDQTtBQUNBOztBQUVEO0FBQ0E7O0FBRUFOLEtBQUVFLEtBQUdJLENBQUgsR0FBS0MsQ0FBUCxJQUFZZCxLQUFNTyxFQUFFRSxLQUFHSSxDQUFILEdBQUtDLENBQVAsQ0FBTixFQUFrQkosRUFBRUMsRUFBRixDQUFsQixDQUFaOztBQUVBLFFBQU1NLElBQUksQ0FBVixFQUFjQSxJQUFJSCxDQUFsQixFQUFzQixFQUFFRyxDQUF4QixFQUE0QjtBQUMzQlAsTUFBRUMsS0FBR00sQ0FBTCxJQUFVaEIsUUFBU1MsRUFBRUMsS0FBR00sQ0FBTCxDQUFULEVBQW1CYixFQUFFQyxLQUFHWSxDQUFMLENBQW5CLEVBQTZCUCxFQUFFQyxFQUFGLENBQTdCLENBQVY7QUFDQTs7QUFFRDs7QUFFQUQsS0FBRUMsRUFBRixJQUFRVCxNQUFPUSxFQUFFQyxFQUFGLENBQVAsQ0FBUjtBQUVBO0FBRUQsRUE5QkQ7QUFnQ0EiLCJmaWxlIjoiYmRpdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBAcGFyYW0ge251bWJlciBmdW5jdGlvbn0gaXN6ZXJvIGNoZWNrcyBpZiBhIG51bWJlciBpcyAwXG4gKiBAcGFyYW0ge251bWJlciBmdW5jdGlvbn0gaWFkZCBhZGRzIHR3byBudW1iZXJzIGluIHBsYWNlXG4gKiBAcGFyYW0ge251bWJlciBmdW5jdGlvbn0gaXN1Ym11bCBzdWJ0cmFjdHMgdGhlIG11bHRpcGxlIG9mIGEgbnVtYmVyIHRvIGEgbnVtYmVyIGluIHBsYWNlXG4gKiBAcGFyYW0ge251bWJlciBmdW5jdGlvbn0gaXplcm8gemVybyBudW1iZXIgY29uc3RydWN0b3IsIGluIHBsYWNlICh0byBhbGxvdyByZWN5Y2xpbmcpXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9iZGl2ICggaXN6ZXJvICwgaWFkZCAsIGlzdWJtdWwgLCBpemVybyApIHtcblxuXHQvKipcblx0ICogQmlnIGVuZGlhbiBkZW5zZSBwb2x5bm9taWFsIGRpdmlzaW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2RlbnNlIHBvbHlub21pYWwgYXJyYXl9IGIgZGl2aXNvciwgbm9ybWFsaXplZFxuXHQgKiBAcGFyYW0ge2RlbnNlIHBvbHlub21pYWwgYXJyYXkgYmVnaW59IGJpXG5cdCAqIEBwYXJhbSB7ZGVuc2UgcG9seW5vbWlhbCBhcnJheSBlbmR9IGJqXG5cdCAqIEBwYXJhbSB7ZGVuc2UgcG9seW5vbWlhbCBhcnJheX0gcSBxdW90aWVudCwgaW5pdGlhbGl6ZWQgdG8gemVyb1xuXHQgKiBAcGFyYW0ge2RlbnNlIHBvbHlub21pYWwgYXJyYXkgYmVnaW59IHFpXG5cdCAqIEBwYXJhbSB7ZGVuc2UgcG9seW5vbWlhbCBhcnJheSBlbmR9IHFqXG5cdCAqIEBwYXJhbSB7ZGVuc2UgcG9seW5vbWlhbCBhcnJheX0gciByZW1haW5kZXIsIGluaXRpYWxpemVkIHRvIGRpdmlkZW5kXG5cdCAqIEBwYXJhbSB7ZGVuc2UgcG9seW5vbWlhbCBhcnJheSBiZWdpbn0gcmlcblx0ICogQHBhcmFtIHtkZW5zZSBwb2x5bm9taWFsIGFycmF5IGVuZH0gcmpcblx0ICovXG5cblx0Y29uc3QgYmRpdiA9IGZ1bmN0aW9uICggYiAsIGJpICwgYmogLCBxICwgcWkgLCBxaiAsIHIgLCByaSAsIHJqICkge1xuXG5cdFx0dmFyIG0gLCBuICwgYyAsIHkgO1xuXG5cdFx0bSA9IHJqIC0gcmkgO1xuXHRcdG4gPSBiaiAtIGJpIDtcblxuXHRcdGZvciAoIDsgbSA+PSBuIDsgKytyaSAsIC0tbSApIHtcblxuXHRcdFx0aWYgKCBpc3plcm8oIHJbcmldICkgKSB7XG5cdFx0XHRcdCsrcmkgO1xuXHRcdFx0XHQtLW0gO1xuXHRcdFx0XHRjb250aW51ZSA7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGIgZml0cyByW3JpXSB0aW1lcyBpbiByXG5cdFx0XHQvLyB3ZSBhZGQgcltyaV0gKiB4XihtLW4pIHRvIHFcblxuXHRcdFx0cVtxai1tK25dID0gaWFkZCggcVtxai1tK25dICwgcltyaV0gKSA7XG5cblx0XHRcdGZvciAoIGkgPSAxIDsgaSA8IG4gOyArK2kgKSB7XG5cdFx0XHRcdHJbcmkraV0gPSBpc3VibXVsKCByW3JpK2ldICwgYltiaStpXSAsIHJbcmldICkgO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBsZWFkaW5nIGNvZWZmaWNpZW50IHNldCB0byB6ZXJvXG5cblx0XHRcdHJbcmldID0gaXplcm8oIHJbcmldICkgO1xuXG5cdFx0fVxuXG5cdH0gO1xuXG59XG4iXX0=