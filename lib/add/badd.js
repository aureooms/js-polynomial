"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__badd__ = __badd__;

/**
 * big endian
 * hypothesis : rj - ri >= pj - pi >= qj - pi
 * @param {function} nadd number type addition function
 * @param {function} copy number type copy function
 */
function __badd__(nadd, copy) {

	var badd = function badd(p, pi, pj, q, qi, qj, r, ri, rj) {

		while (qj > qi) {

			--qj;
			--pj;
			--rj;

			r[rj] = nadd(p[pj], q[qj]);
		}

		while (pj > pi) {

			--pj;
			--rj;

			r[rj] = copy(p[pj]);
		}
	};

	return badd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGQvYmFkZC5qcyJdLCJuYW1lcyI6WyJfX2JhZGRfXyIsIm5hZGQiLCJjb3B5IiwiYmFkZCIsInAiLCJwaSIsInBqIiwicSIsInFpIiwicWoiLCJyIiwicmkiLCJyaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFPZ0JBLFEsR0FBQUEsUTs7QUFOaEI7Ozs7OztBQU1PLFNBQVNBLFFBQVQsQ0FBb0JDLElBQXBCLEVBQTJCQyxJQUEzQixFQUFrQzs7QUFFeEMsS0FBTUMsT0FBTyxTQUFQQSxJQUFPLENBQVdDLENBQVgsRUFBZUMsRUFBZixFQUFvQkMsRUFBcEIsRUFBeUJDLENBQXpCLEVBQTZCQyxFQUE3QixFQUFrQ0MsRUFBbEMsRUFBdUNDLENBQXZDLEVBQTJDQyxFQUEzQyxFQUFnREMsRUFBaEQsRUFBcUQ7O0FBRWpFLFNBQVFILEtBQUtELEVBQWIsRUFBa0I7O0FBRWpCLEtBQUVDLEVBQUY7QUFDQSxLQUFFSCxFQUFGO0FBQ0EsS0FBRU0sRUFBRjs7QUFFQUYsS0FBRUUsRUFBRixJQUFRWCxLQUFNRyxFQUFFRSxFQUFGLENBQU4sRUFBY0MsRUFBRUUsRUFBRixDQUFkLENBQVI7QUFFQTs7QUFFRCxTQUFRSCxLQUFLRCxFQUFiLEVBQWtCOztBQUVqQixLQUFFQyxFQUFGO0FBQ0EsS0FBRU0sRUFBRjs7QUFFQUYsS0FBRUUsRUFBRixJQUFRVixLQUFNRSxFQUFFRSxFQUFGLENBQU4sQ0FBUjtBQUVBO0FBRUQsRUFyQkQ7O0FBdUJBLFFBQU9ILElBQVA7QUFFQSIsImZpbGUiOiJiYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIGJpZyBlbmRpYW5cbiAqIGh5cG90aGVzaXMgOiByaiAtIHJpID49IHBqIC0gcGkgPj0gcWogLSBwaVxuICogQHBhcmFtIHtmdW5jdGlvbn0gbmFkZCBudW1iZXIgdHlwZSBhZGRpdGlvbiBmdW5jdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29weSBudW1iZXIgdHlwZSBjb3B5IGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfX2JhZGRfXyAoIG5hZGQgLCBjb3B5ICkge1xuXG5cdGNvbnN0IGJhZGQgPSBmdW5jdGlvbiAoIHAgLCBwaSAsIHBqICwgcSAsIHFpICwgcWogLCByICwgcmkgLCByaiApIHtcblxuXHRcdHdoaWxlICggcWogPiBxaSApIHtcblxuXHRcdFx0LS1xajtcblx0XHRcdC0tcGo7XG5cdFx0XHQtLXJqO1xuXG5cdFx0XHRyW3JqXSA9IG5hZGQoIHBbcGpdICwgcVtxal0gKSA7XG5cblx0XHR9XG5cblx0XHR3aGlsZSAoIHBqID4gcGkgKSB7XG5cblx0XHRcdC0tcGo7XG5cdFx0XHQtLXJqO1xuXG5cdFx0XHRyW3JqXSA9IGNvcHkoIHBbcGpdICkgO1xuXG5cdFx0fVxuXG5cdH0gO1xuXG5cdHJldHVybiBiYWRkIDtcblxufVxuIl19