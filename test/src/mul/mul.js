import test from 'ava' ;

import * as array from "@aureooms/js-array" ;
import * as number from "@aureooms/js-number" ;
import { partial } from "@aureooms/js-functools" ;
import { exhaust , starmap } from "@aureooms/js-itertools" ;

import { __mul__ } from "../../../src" ;

test( "mul" , t => {


	const mul = __mul__( number.iadd , number.mul ) ;

	const run = function ( p , q , expected ) {

		const m = p.length ;
		const n = q.length ;

		const r = array.alloc( m + n - 1 ) ;

		array.fill( r , 0 , m + n - 1 , 0 ) ;

		mul( p , 0 , m , q , 0 , n , r , 0 , m + n - 1 ) ;

		t.deepEqual( r , expected , JSON.stringify( p ) + " * " + JSON.stringify( q ) ) ;

	} ;

	const inputs = [
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
	] ;

	exhaust( partial( starmap , [ run ] )( inputs ) ) ;

} ) ;
