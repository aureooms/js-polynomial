

/**
 * hypothesis : rj - ri >= m + n
 * @param  {[type]} iadd [description]
 * @param  {[type]} mul  [description]
 * @return {[type]}      [description]
 */
var __mul__ = function ( iadd, mul ) {

	var pmul = function ( p, pi, pj, q, qi, qj, r, ri, rj ) {

		var i, j, k, m, n;

		for ( i = 0, m = pj - pi ; i < m ; ++i ) {

			for ( j = 0, n = qj - qi ; j < n ; ++j ) {

				k = ri + i + j;

				r[k] = iadd( r[k], mul( p[pi + i], q[qj + j] ) );

			}

		}

	};

	return pmul;

};

exports.__mul__ = __mul__;
