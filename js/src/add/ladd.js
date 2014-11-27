
/**
 * little endian
 * hypothesis : rj - ri >= pj - pi >= qj - pi
 * @param {number add} nadd number type addition function
 */
var __ladd__ = function ( nadd , copy ) {

	var ladd = function ( p , pi , pj , q , qi , qj , r , ri , rj ) {

		for ( ; qi < qj ; ++qi , ++pi , ++ri ) {

			r[ri] = nadd( p[pi] , q[qi] ) ;

		}

		for ( ; pi < pj ; ++pi , ++ri ) {

			r[ri] = copy( p[pi] ) ;

		}

	} ;

	return ladd ;

} ;

exports.__ladd__ = __ladd__ ;
