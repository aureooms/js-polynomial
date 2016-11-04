"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__ibadd__ = __ibadd__;

/**
 * big endian
 * /!\ hypothesis : pj - pi >= qj - pi
 * @param {number iadd} niadd number type in-place addition function
 */
function __ibadd__(niadd) {

	var ibadd = function ibadd(p, pi, pj, q, qi, qj) {

		while (qj > qi) {

			--qj;
			--pj;

			p[pi] = niadd(p[pi], q[qi]);
		}
	};

	return ibadd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGQvaWJhZGQuanMiXSwibmFtZXMiOlsiX19pYmFkZF9fIiwibmlhZGQiLCJpYmFkZCIsInAiLCJwaSIsInBqIiwicSIsInFpIiwicWoiXSwibWFwcGluZ3MiOiI7Ozs7O1FBTWdCQSxTLEdBQUFBLFM7O0FBTGhCOzs7OztBQUtPLFNBQVNBLFNBQVQsQ0FBcUJDLEtBQXJCLEVBQTZCOztBQUVuQyxLQUFJQyxRQUFRLFNBQVJBLEtBQVEsQ0FBV0MsQ0FBWCxFQUFlQyxFQUFmLEVBQW9CQyxFQUFwQixFQUF5QkMsQ0FBekIsRUFBNkJDLEVBQTdCLEVBQWtDQyxFQUFsQyxFQUF1Qzs7QUFFbEQsU0FBUUEsS0FBS0QsRUFBYixFQUFrQjs7QUFFakIsS0FBRUMsRUFBRjtBQUNBLEtBQUVILEVBQUY7O0FBRUFGLEtBQUVDLEVBQUYsSUFBUUgsTUFBT0UsRUFBRUMsRUFBRixDQUFQLEVBQWVFLEVBQUVDLEVBQUYsQ0FBZixDQUFSO0FBRUE7QUFFRCxFQVhEOztBQWFBLFFBQU9MLEtBQVA7QUFFQSIsImZpbGUiOiJpYmFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBiaWcgZW5kaWFuXG4gKiAvIVxcIGh5cG90aGVzaXMgOiBwaiAtIHBpID49IHFqIC0gcGlcbiAqIEBwYXJhbSB7bnVtYmVyIGlhZGR9IG5pYWRkIG51bWJlciB0eXBlIGluLXBsYWNlIGFkZGl0aW9uIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfX2liYWRkX18gKCBuaWFkZCApIHtcblxuXHR2YXIgaWJhZGQgPSBmdW5jdGlvbiAoIHAgLCBwaSAsIHBqICwgcSAsIHFpICwgcWogKSB7XG5cblx0XHR3aGlsZSAoIHFqID4gcWkgKSB7XG5cblx0XHRcdC0tcWo7XG5cdFx0XHQtLXBqO1xuXG5cdFx0XHRwW3BpXSA9IG5pYWRkKCBwW3BpXSAsIHFbcWldICkgO1xuXG5cdFx0fVxuXG5cdH0gO1xuXG5cdHJldHVybiBpYmFkZCA7XG5cbn1cbiJdfQ==