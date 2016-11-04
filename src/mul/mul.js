

/**
 * little endian
 * hypothesis : rj - ri >= m + n - 1
 * @param  {number iadd} niadd number type in-place addition function
 * @param  {number mul} niadd number type multiplication function
 */

export function __mul__ ( niadd , nmul ) {

	const mul = function ( p , pi , pj , q , qi , qj , r , ri , rj ) {

		var i , j , k , m , n ;

		for ( i = 0 , m = pj - pi  ; i < m  ; ++i ) {

			for ( j = 0 , n = qj - qi  ; j < n  ; ++j ) {

				k = ri + i + j ;

				r[k] = niadd( r[k] , nmul( p[pi + i] , q[qi + j] ) ) ;

			}

		}

	} ;

	return mul ;

}
