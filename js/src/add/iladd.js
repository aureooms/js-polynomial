
/**
 * little endian
 * hypothesis : pj - pi >= qj - pi
 * @param {number iadd} niadd number type in-place addition function
 */
var __iladd__ = function ( niadd ) {

	var iladd = function ( p , pi , pj , q , qi , qj ) {


		for ( ; qi < qj ; ++qi , ++pi ) {

			p[pi] = niadd( p[pi] , q[qi] ) ;

		}


	} ;

	return iladd ;

} ;

exports.__iladd__ = __iladd__ ;
