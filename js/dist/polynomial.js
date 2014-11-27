(function(exports, undefined){

	'use strict';


/* js/src/add */
/* js/src/add/badd.js */

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

/* js/src/add/ibadd.js */

/**
* big endian
* hypothesis : pj - pi >= qj - pi
* @param {number iadd} niadd number type in-place addition function
*/
var __ibadd__ = function ( niadd ) {

	var ibadd = function ( p , pi , pj , q , qi , qj ) {


		while ( qj > qi ) {

			--qj;
			--pj;

			p[pi] = niadd( p[pi] , q[qi] ) ;

		}


	} ;

	return ibadd ;

} ;

exports.__ibadd__ = __ibadd__ ;

/* js/src/add/iladd.js */

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

/* js/src/add/ladd.js */

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

/* js/src/evaluate */
/* js/src/evaluate/evaluate.js */

/**
 * Model for a little endian polynomial evaluation function.
 *
 * @param  {function} mov      number move function
 * @param  {function} imov     number in place move function
 * @param  {function} iadd     number in place addition function
 * @param  {function} mul      number multiplication function
 * @param  {function} imul     number in place multiplication function
 * @return {function} polynomial evaluation function
 */

var __evaluate__ = function ( mov , imov , add , mul , imul ) {


	/**
	 * Evaluates little endian polynomial [i , j[ for x.
	 *
	 * @param  {const polynomial}  p the polynomial to evaluate
	 * @param  {index} i             left index of polynomial
	 * @param  {index} j             right index of polynomial
	 * @param  {const number} x      number for which the polynomial is evaluated
	 * @param  {number} y            0 initialized number
	 * @return {number}              param y
	 */

	var evaluate = function ( p , i , j , x , y ) {

		var X ;

		if ( i < j ) {

			y = imov( y , p[i] ) ;

			++i ;

			if ( i < j ) {

				// X = x^k , for k in [0 , j - i[

				X = mov( x ) ;

				y = iadd( y , mul( X , p[i] ) ) ;

				for ( ++i ; i < j ; ++i ) {

					X = imul( X , x ) ;

					y = iadd( y , mul( X , p[i] ) ) ;

				}

			}

		}

		return y ;

	} ;

	return evaluate ;

} ;

exports.__evaluate__ = __evaluate__ ;

/* js/src/evaluate/horner.js */

/**
* Model for a little endian polynomial evaluation function
* using Horner's algorithm.
*
* @param  {function} imov     number in place move function
* @param  {function} iadd     number in place addition function
* @param  {function} imul     number in place multiplication function
* @return {function} polynomial evaluation function
*/

var __horner__ = function ( mov , imov , add , mul , imul ) {


	/**
	* Evaluates little endian polynomial [i , j[ for x
	* using Horner's algorithm.
	*
	* @param  {const polynomial}  p the polynomial to evaluate
	* @param  {index} i             left index of polynomial
	* @param  {index} j             right index of polynomial
	* @param  {const number} x      number for which the polynomial is evaluated
	* @param  {number} y            0 initialized number
	* @return {number}              param y
	*/

	var horner = function ( p , i , j , x , y ) {

		if ( i < j ) {

			--j ;

			y = imov( y , p[j] ) ;

			while ( i < j ) {

				--j ;

				y = iadd( imul( y , x ) , p[j] ) ;

			}

		}

		return y ;

	} ;

	return horner ;

} ;

exports.__horner__ = __horner__ ;

/* js/src/mul */
/* js/src/mul/mul.js */


/**
 * little endian
 * hypothesis : rj - ri >= m + n - 1
 * @param  {number iadd} niadd number type in-place addition function
 * @param  {number mul} niadd number type multiplication function
 */

var __mul__ = function ( niadd , nmul ) {

	var mul = function ( p , pi , pj , q , qi , qj , r , ri , rj ) {

		var i , j , k , m , n ;

		for ( i = 0 , m = pj - pi  ; i < m  ; ++i ) {

			for ( j = 0 , n = qj - qi  ; j < n  ; ++j ) {

				k = ri + i + j ;

				r[k] = niadd( r[k] , nmul( p[pi + i] , q[qi + j] ) ) ;

			}

		}

	} ;

	return mul ;

} ;

exports.__mul__ = __mul__ ;

})(typeof exports === 'undefined' ? this['polynomial'] = {} : exports);
