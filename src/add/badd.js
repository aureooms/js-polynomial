
/**
 * big endian
 * hypothesis : rj - ri >= pj - pi >= qj - pi
 * @param {function} nadd number type addition function
 * @param {function} copy number type copy function
 */
export function __badd__ ( nadd , copy ) {

	const badd = function ( p , pi , pj , q , qi , qj , r , ri , rj ) {

		while ( qj > qi ) {

			--qj;
			--pj;
			--rj;

			r[rj] = nadd( p[pj] , q[qj] ) ;

		}

		while ( pj > pi ) {

			--pj;
			--rj;

			r[rj] = copy( p[pj] ) ;

		}

	} ;

	return badd ;

}
