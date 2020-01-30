import logger from './logger'

const strata = {
  logger,

  el,
  tn
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

export default strata