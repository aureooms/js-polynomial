
/**
 * big endian
 * /!\ hypothesis : pj - pi >= qj - pi
 * @param {number iadd} niadd number type in-place addition function
 */
export function __ibadd__ ( niadd ) {

	var ibadd = function ( p , pi , pj , q , qi , qj ) {

		while ( qj > qi ) {

			--qj;
			--pj;

			p[pi] = niadd( p[pi] , q[qi] ) ;

		}

	} ;

	return ibadd ;

}
