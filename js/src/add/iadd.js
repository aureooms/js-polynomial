
/**
 * little endian
 * hypothesis : pj - pi >= qj - pi
 * @param {[type]} iadd [description]
 */
var __iadd__ = function ( iadd ) {

	var piadd = function ( p, pi, pj, q, qi, qj ) {


		for ( ; qi < qj ; ++qi, ++pi ) {

			p[pi] = iadd( p[pi], q[qi] );

		}


	};

	return piadd;

};

exports.__iadd__ = __iadd__;
