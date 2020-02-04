import logger from './logger'

const strata = {
  logger,

  el,
  tn,

  label,
  textbox
}

/////////////////////////////////////////////////////////////////////
//
//  Base
//
function el( tag, attrs, children ) {
  attrs = attrs || {}
  children = children || []

  let e = document.createElement( tag )

  for( let [key, value] of Object.entries( attrs ) ) {
    e[key] = value
  }

  e.append( ...children )

  return e
}

function tn( txt ) {
  return document.createTextNode( txt )
}

/////////////////////////////////////////////////////////////////////
//
//  Base Elements
//
let tags = [
  'div',
  'span',
  'form',
  'input',
  'button',
  'p',
  'h1',
  'h2'
]

tags.forEach( t => {
  strata[ t ] = function( attrs, children ) {
    // If only a string is passed in, assume that it will be a child and be a textnode
    // ex: h1( 'Title' ) => el( tag, null, [ tn( 'Title' ) ] )
    
    // If only a array is passed in, assume it's the children argument
    // ex:
    // p([
    //   tn( 'This is my lorem ipsum is my lorem ipsum is my lorem ipsum' ),
    //   span( 'This is our DIV' ),
    //   tn( 'This is my lorem ipsum is my lorem ipsum is my lorem ipsum' ),
    // ])
    // =>
    // el( 'p', null, [
    //   tn( 'This is my lorem ipsum is my lorem ipsum is my lorem ipsum' ),
    //   span( 'This is our DIV' ),
    //   tn( 'This is my lorem ipsum is my lorem ipsum is my lorem ipsum' ),
    // ])
    if( Array.isArray( arguments[0] ) ) {
      return el( t, null, arguments[0] )
    } else if( typeof arguments[0] === 'string' ) {
      return el( t, null, [ tn( arguments[0] ) ] )
    } else {
      return el( t, attrs, children )
    }
    
  }
})

// function div( attrs, children ) {
//   return el( 'div', attrs, children )
// }

// function span( attrs, children ) {
//   return el( 'span', attrs, children )
// }

// function form() {
//   return el( 'form', attrs, children )
// }

// function input( type ) {
//   return el( 'input', attrs, children )
// }

// function button( label ) {
//   return el( 'button', attrs, children )
// }

// Refacotr these to use an array of HTML elements


/////////////////////////////////////////////////////////////////////
//
//  Higher Order
//
function label( txt ) {
  return el( 'span', [ tn( txt ) ] )
}

function textbox() {
  return input( 'textbox' )
}

// Write the other imput types


export default strata