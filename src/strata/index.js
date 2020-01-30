import logger from './logger'

const strata = {
  logger,

  el,
  tn,

  div,
  form, 
  input,

  span, 

  label,
  textbox, 
  button
}

/////////////////////////////////////////////////////////////////////
//
//  Base
//
function el( tag, attrs, children ) {
  attrs = attrs || {}

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
function div( attrs, children ) {
  return el( 'div', attrs, children )
}

function span( attrs, children ) {
  return el( 'span', attrs, children )
}

function form() {
  return el( 'form' )
}

function input( type ) {
  const input = el( 'input' )
  input.type = type
  return input
}

function button( label ) {
  const btn = el( 'button' )
  btn.appendChild( tn( label ) )
  return btn
}


/////////////////////////////////////////////////////////////////////
//
//  Higher Order
//
function label( txt ) {
  return el( 'span' ).appendChild( tn( txt ) )
}

function textbox() {
  return input( 'textbox' )
}


export default strata