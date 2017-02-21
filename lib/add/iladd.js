"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__iladd__ = __iladd__;

/**
 * little endian
 * hypothesis : pj - pi >= qj - pi
 * @param {number iadd} niadd number type in-place addition function
 */
function __iladd__(niadd) {

	var iladd = function iladd(p, pi, pj, q, qi, qj) {

		for (; qi < qj; ++qi, ++pi) {

			p[pi] = niadd(p[pi], q[qi]);
		}
	};

	return iladd;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGQvaWxhZGQuanMiXSwibmFtZXMiOlsiX19pbGFkZF9fIiwibmlhZGQiLCJpbGFkZCIsInAiLCJwaSIsInBqIiwicSIsInFpIiwicWoiXSwibWFwcGluZ3MiOiI7Ozs7O1FBTWdCQSxTLEdBQUFBLFM7O0FBTGhCOzs7OztBQUtPLFNBQVNBLFNBQVQsQ0FBcUJDLEtBQXJCLEVBQTZCOztBQUVuQyxLQUFNQyxRQUFRLFNBQVJBLEtBQVEsQ0FBV0MsQ0FBWCxFQUFlQyxFQUFmLEVBQW9CQyxFQUFwQixFQUF5QkMsQ0FBekIsRUFBNkJDLEVBQTdCLEVBQWtDQyxFQUFsQyxFQUF1Qzs7QUFHcEQsU0FBUUQsS0FBS0MsRUFBYixFQUFrQixFQUFFRCxFQUFGLEVBQU8sRUFBRUgsRUFBM0IsRUFBZ0M7O0FBRS9CRCxLQUFFQyxFQUFGLElBQVFILE1BQU9FLEVBQUVDLEVBQUYsQ0FBUCxFQUFlRSxFQUFFQyxFQUFGLENBQWYsQ0FBUjtBQUVBO0FBR0QsRUFWRDs7QUFZQSxRQUFPTCxLQUFQO0FBRUEiLCJmaWxlIjoiaWxhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogbGl0dGxlIGVuZGlhblxuICogaHlwb3RoZXNpcyA6IHBqIC0gcGkgPj0gcWogLSBwaVxuICogQHBhcmFtIHtudW1iZXIgaWFkZH0gbmlhZGQgbnVtYmVyIHR5cGUgaW4tcGxhY2UgYWRkaXRpb24gZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9faWxhZGRfXyAoIG5pYWRkICkge1xuXG5cdGNvbnN0IGlsYWRkID0gZnVuY3Rpb24gKCBwICwgcGkgLCBwaiAsIHEgLCBxaSAsIHFqICkge1xuXG5cblx0XHRmb3IgKCA7IHFpIDwgcWogOyArK3FpICwgKytwaSApIHtcblxuXHRcdFx0cFtwaV0gPSBuaWFkZCggcFtwaV0gLCBxW3FpXSApIDtcblxuXHRcdH1cblxuXG5cdH0gO1xuXG5cdHJldHVybiBpbGFkZCA7XG5cbn1cbiJdfQ==