"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__mul__ = __mul__;


/**
 * little endian
 * hypothesis : rj - ri >= m + n - 1
 * @param {function} niadd number type in-place addition function
 * @param {function} nmul number type multiplication function
 */

function __mul__(niadd, nmul) {

	var mul = function mul(p, pi, pj, q, qi, qj, r, ri, rj) {

		var i, j, k, m, n;

		for (i = 0, m = pj - pi; i < m; ++i) {

			for (j = 0, n = qj - qi; j < n; ++j) {

				k = ri + i + j;

				r[k] = niadd(r[k], nmul(p[pi + i], q[qi + j]));
			}
		}
	};

	return mul;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tdWwvbXVsLmpzIl0sIm5hbWVzIjpbIl9fbXVsX18iLCJuaWFkZCIsIm5tdWwiLCJtdWwiLCJwIiwicGkiLCJwaiIsInEiLCJxaSIsInFqIiwiciIsInJpIiwicmoiLCJpIiwiaiIsImsiLCJtIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLE8sR0FBQUEsTzs7O0FBUGhCOzs7Ozs7O0FBT08sU0FBU0EsT0FBVCxDQUFtQkMsS0FBbkIsRUFBMkJDLElBQTNCLEVBQWtDOztBQUV4QyxLQUFNQyxNQUFNLFNBQU5BLEdBQU0sQ0FBV0MsQ0FBWCxFQUFlQyxFQUFmLEVBQW9CQyxFQUFwQixFQUF5QkMsQ0FBekIsRUFBNkJDLEVBQTdCLEVBQWtDQyxFQUFsQyxFQUF1Q0MsQ0FBdkMsRUFBMkNDLEVBQTNDLEVBQWdEQyxFQUFoRCxFQUFxRDs7QUFFaEUsTUFBSUMsQ0FBSixFQUFRQyxDQUFSLEVBQVlDLENBQVosRUFBZ0JDLENBQWhCLEVBQW9CQyxDQUFwQjs7QUFFQSxPQUFNSixJQUFJLENBQUosRUFBUUcsSUFBSVYsS0FBS0QsRUFBdkIsRUFBNkJRLElBQUlHLENBQWpDLEVBQXNDLEVBQUVILENBQXhDLEVBQTRDOztBQUUzQyxRQUFNQyxJQUFJLENBQUosRUFBUUcsSUFBSVIsS0FBS0QsRUFBdkIsRUFBNkJNLElBQUlHLENBQWpDLEVBQXNDLEVBQUVILENBQXhDLEVBQTRDOztBQUUzQ0MsUUFBSUosS0FBS0UsQ0FBTCxHQUFTQyxDQUFiOztBQUVBSixNQUFFSyxDQUFGLElBQU9kLE1BQU9TLEVBQUVLLENBQUYsQ0FBUCxFQUFjYixLQUFNRSxFQUFFQyxLQUFLUSxDQUFQLENBQU4sRUFBa0JOLEVBQUVDLEtBQUtNLENBQVAsQ0FBbEIsQ0FBZCxDQUFQO0FBRUE7QUFFRDtBQUVELEVBaEJEOztBQWtCQSxRQUFPWCxHQUFQO0FBRUEiLCJmaWxlIjoibXVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICogbGl0dGxlIGVuZGlhblxuICogaHlwb3RoZXNpcyA6IHJqIC0gcmkgPj0gbSArIG4gLSAxXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBuaWFkZCBudW1iZXIgdHlwZSBpbi1wbGFjZSBhZGRpdGlvbiBmdW5jdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbn0gbm11bCBudW1iZXIgdHlwZSBtdWx0aXBsaWNhdGlvbiBmdW5jdGlvblxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfX211bF9fICggbmlhZGQgLCBubXVsICkge1xuXG5cdGNvbnN0IG11bCA9IGZ1bmN0aW9uICggcCAsIHBpICwgcGogLCBxICwgcWkgLCBxaiAsIHIgLCByaSAsIHJqICkge1xuXG5cdFx0dmFyIGkgLCBqICwgayAsIG0gLCBuIDtcblxuXHRcdGZvciAoIGkgPSAwICwgbSA9IHBqIC0gcGkgIDsgaSA8IG0gIDsgKytpICkge1xuXG5cdFx0XHRmb3IgKCBqID0gMCAsIG4gPSBxaiAtIHFpICA7IGogPCBuICA7ICsraiApIHtcblxuXHRcdFx0XHRrID0gcmkgKyBpICsgaiA7XG5cblx0XHRcdFx0cltrXSA9IG5pYWRkKCByW2tdICwgbm11bCggcFtwaSArIGldICwgcVtxaSArIGpdICkgKSA7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9IDtcblxuXHRyZXR1cm4gbXVsIDtcblxufVxuIl19