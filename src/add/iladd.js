
/**
 * little endian
 * hypothesis : pj - pi >= qj - pi
 * @param {number iadd} niadd number type in-place addition function
 */
export function __iladd__ ( niadd ) {

	const iladd = function ( p , pi , pj , q , qi , qj ) {


		for ( ; qi < qj ; ++qi , ++pi ) {

			p[pi] = niadd( p[pi] , q[qi] ) ;

		}


	} ;

	return iladd ;

}
