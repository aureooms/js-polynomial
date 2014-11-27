
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
