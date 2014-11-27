

var array , number , functools , itertools ;

array = require( "aureooms-js-array" );
number = require( "aureooms-js-number" );
functools = require( "aureooms-js-functools" );
itertools = require( "aureooms-js-itertools" );


test( "mul" , function ( ) {

	var run , mul ;

	mul = polynomial.__mul__( number.iadd , number.mul ) ;

	run = function ( p , q , expected ) {

		var m , n , r ;

		m = p.length ;
		n = q.length ;

		r = array.alloc( m + n - 1 ) ;

		array.fill( r , 0 , m + n - 1 , 0 ) ;

		mul( p , 0 , m , q , 0 , n , r , 0 , m + n - 1 ) ;

		deepEqual( r , expected , JSON.stringify( p ) + " * " + JSON.stringify( q ) ) ;

	} ;

	itertools.product( [
		[
			[
				[ 0 ] ,
				[ 0 ] ,
				[ 0 ]
			] ,
			[
				[ 2 ] ,
				[ 7 ] ,
				[ 14 ]
			] ,
			[
				[ 2 , 3 ] ,
				[ 8 , 1 ] ,
				[ 16 , 26 , 3 ]
			] ,
			[
				[ 8 , 1 ] ,
				[ 2 , 3 ] ,
				[ 16 , 26 , 3 ]
			],
			[
				[ 8 , 1 , 2 ] ,
				[ 2 , 3 ] ,
				[ 16 , 26 , 7 , 6 ]
			],
			[
				[ 2 , 3 ] ,
				[ 8 , 1 , 2 ] ,
				[ 16 , 26 , 7 , 6 ]
			]
		]
	] , 1 , [] ).forEach( functools.partial( functools.star , run ) ) ;

} ) ;
