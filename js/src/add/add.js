
/**
 * little endian
 * hypothesis : rj - ri >= pj - pi >= qj - pi
 * @param {[type]} add [description]
 */
var __add__ = function ( add ) {

	var padd = function ( p, pi, pj, q, qi, qj, r, ri, rj ) {


		for ( ; qi < qj ; ++qi, ++pi, ++ri ) {

			r[ri] = add( p[pi], q[qi] );

		}


	};

	return padd;

};

exports.__add__ = __add__;
