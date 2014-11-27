

/**
 * little endian
 * hypothesis : rj - ri >= m + n
 * @param  {number iadd} niadd number type in-place addition function
 * @param  {number mul} niadd number type multiplication function
 */

var __mul__ = function ( niadd , nmul ) {

	var mul = function ( p , pi , pj , q , qi , qj , r , ri , rj ) {

		var i , j , k , m , n ;

		for ( i = 0 , m = pj - pi  ; i < m  ; ++i ) {

			for ( j = 0 , n = qj - qi  ; j < n  ; ++j ) {

				k = ri + i + j ;

				r[k] = niadd( r[k] , nmul( p[pi + i] , q[qj + j] ) ) ;

			}

		}

	} ;

	return mul ;

} ;

exports.__mul__ = __mul__ ;
