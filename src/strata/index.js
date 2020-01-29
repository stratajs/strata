import logger from './logger'

const strata = {
  logger,

  el,
  tn,

  div,
  form, 
  input,

  label,
  textbox, 
  button
}

function el( tag ) {
  return document.createElement( tag )
}

function tn( txt ) {
  return document.createTextNode( txt )
}



function div() {
  return el( 'div' )
}

function form() {
  return el( 'form' )
}

function input( type ) {
  const input = el( 'input' )
  input.type = type
  return input
}


function label( txt ) {
  return el( 'span' ).appendChild( tn( txt ) )
}

function textbox() {
  return input( 'textbox' )
}

function button( label ) {
  const btn = el( 'button' )
  btn.appendChild( tn( label ) )
  return btn
}


export default strata