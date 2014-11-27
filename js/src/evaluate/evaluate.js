
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
