"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__ladd__ = __ladd__;

/**
 * little endian
 * hypothesis : rj - ri >= pj - pi >= qj - pi
 * @param {function} nadd number type addition function
 * @param {function} copy number type copy function
 */
function __ladd__(nadd, copy) {

	var ladd = function ladd(p, pi, pj, q, qi, qj, r, ri, rj) {

		for (; qi < qj; ++qi, ++pi, ++ri) {

			r[ri] = nadd(p[pi], q[qi]);
		}

		for (; pi < pj; ++pi, ++ri) {

			r[ri] = copy(p[pi]);
		}
	};

	return ladd;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGQvbGFkZC5qcyJdLCJuYW1lcyI6WyJfX2xhZGRfXyIsIm5hZGQiLCJjb3B5IiwibGFkZCIsInAiLCJwaSIsInBqIiwicSIsInFpIiwicWoiLCJyIiwicmkiLCJyaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFPZ0JBLFEsR0FBQUEsUTs7QUFOaEI7Ozs7OztBQU1PLFNBQVNBLFFBQVQsQ0FBb0JDLElBQXBCLEVBQTJCQyxJQUEzQixFQUFrQzs7QUFFeEMsS0FBTUMsT0FBTyxTQUFQQSxJQUFPLENBQVdDLENBQVgsRUFBZUMsRUFBZixFQUFvQkMsRUFBcEIsRUFBeUJDLENBQXpCLEVBQTZCQyxFQUE3QixFQUFrQ0MsRUFBbEMsRUFBdUNDLENBQXZDLEVBQTJDQyxFQUEzQyxFQUFnREMsRUFBaEQsRUFBcUQ7O0FBRWpFLFNBQVFKLEtBQUtDLEVBQWIsRUFBa0IsRUFBRUQsRUFBRixFQUFPLEVBQUVILEVBQVQsRUFBYyxFQUFFTSxFQUFsQyxFQUF1Qzs7QUFFdENELEtBQUVDLEVBQUYsSUFBUVYsS0FBTUcsRUFBRUMsRUFBRixDQUFOLEVBQWNFLEVBQUVDLEVBQUYsQ0FBZCxDQUFSO0FBRUE7O0FBRUQsU0FBUUgsS0FBS0MsRUFBYixFQUFrQixFQUFFRCxFQUFGLEVBQU8sRUFBRU0sRUFBM0IsRUFBZ0M7O0FBRS9CRCxLQUFFQyxFQUFGLElBQVFULEtBQU1FLEVBQUVDLEVBQUYsQ0FBTixDQUFSO0FBRUE7QUFFRCxFQWREOztBQWdCQSxRQUFPRixJQUFQO0FBRUEsQ0FBQyIsImZpbGUiOiJsYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIGxpdHRsZSBlbmRpYW5cbiAqIGh5cG90aGVzaXMgOiByaiAtIHJpID49IHBqIC0gcGkgPj0gcWogLSBwaVxuICogQHBhcmFtIHtmdW5jdGlvbn0gbmFkZCBudW1iZXIgdHlwZSBhZGRpdGlvbiBmdW5jdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29weSBudW1iZXIgdHlwZSBjb3B5IGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfX2xhZGRfXyAoIG5hZGQgLCBjb3B5ICkge1xuXG5cdGNvbnN0IGxhZGQgPSBmdW5jdGlvbiAoIHAgLCBwaSAsIHBqICwgcSAsIHFpICwgcWogLCByICwgcmkgLCByaiApIHtcblxuXHRcdGZvciAoIDsgcWkgPCBxaiA7ICsrcWkgLCArK3BpICwgKytyaSApIHtcblxuXHRcdFx0cltyaV0gPSBuYWRkKCBwW3BpXSAsIHFbcWldICkgO1xuXG5cdFx0fVxuXG5cdFx0Zm9yICggOyBwaSA8IHBqIDsgKytwaSAsICsrcmkgKSB7XG5cblx0XHRcdHJbcmldID0gY29weSggcFtwaV0gKSA7XG5cblx0XHR9XG5cblx0fSA7XG5cblx0cmV0dXJuIGxhZGQgO1xuXG59IDtcbiJdfQ==