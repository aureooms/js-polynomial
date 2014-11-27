
/**
* big endian
* hypothesis : rj - ri >= pj - pi >= qj - pi
* @param {number add} nadd number type addition function
*/
var __badd__ = function ( nadd , copy ) {

	var badd = function ( p , pi , pj , q , qi , qj , r , ri , rj ) {

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

} ;

exports.__badd__ = __badd__ ;
