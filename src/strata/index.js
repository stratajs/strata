import logger from './logger'
import renderer from './renderer'
import Component from './Component'

const strata = {
  logger,
  render: renderer.render,
  Component,
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
  'h2',
  'h3',
  'ul', 
  'li', 
  'a'
]

tags.forEach( t => {
  strata[ t ] = function( attrs, children ) {
    if( Array.isArray( arguments[0] ) ) {
      return el( t, null, arguments[0] )
    } else if( typeof arguments[0] === 'string' ) {
      if( arguments[1] ) {
        return el( t, arguments[1], [ tn( arguments[0] ) ] )
      } else {
        return el( t, null, [ tn( arguments[0] ) ] )
      }
      
    } else {
      return el( t, attrs, children )
    }
    
  }
})


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