
/**
 * @param {number function} iszero checks if a number is 0
 * @param {number function} iadd adds two numbers in place
 * @param {number function} isubmul subtracts the multiple of a number to a number in place
 * @param {number function} izero zero number constructor, in place (to allow recycling)
 */

export function _bdiv ( iszero , iadd , isubmul , izero ) {

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

	const bdiv = function ( b , bi , bj , q , qi , qj , r , ri , rj ) {

		var m , n , c , y ;

		m = rj - ri ;
		n = bj - bi ;

		for ( ; m >= n ; ++ri , --m ) {

			if ( iszero( r[ri] ) ) {
				++ri ;
				--m ;
				continue ;
			}

			// b fits r[ri] times in r
			// we add r[ri] * x^(m-n) to q

			q[qj-m+n] = iadd( q[qj-m+n] , r[ri] ) ;

			for ( i = 1 ; i < n ; ++i ) {
				r[ri+i] = isubmul( r[ri+i] , b[bi+i] , r[ri] ) ;
			}

			// leading coefficient set to zero

			r[ri] = izero( r[ri] ) ;

		}

	} ;

}
