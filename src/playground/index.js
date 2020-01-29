//
//  RAW DOM METHODS
//

function element( tag ) {
  return document.createElement( tag )
}

function text( txt ) {
  return document.createTextNode( txt )
}
//
// *********************************
//
function div() {}
function label( text ) {}

const spn = label( 'Full Name' )

const root = document.getElementById( 'root' )
root.appendChild( div )

// <div>
//  <span>Full Name</span>
// </div>

// const form = element( 'form' )
// form.method = "POST"
// form.action = "new_user.html"

// const spnFullName = element( 'span' )
// spnFullName.appendChild( text( 'Full Name' ) )



// const spnEmail = element( 'span' )
// spnEmail.appendChild( text( 'Email' ) )

// const spnPassword = element( 'span' )
// spnPassword.appendChild( text( 'Password' ) )

// const inptFullName = element( 'input' )


// const inptEmail = element( 'input' )
// const inptPassword = element( 'input' )
// const btnDone = element( 'button' )
// btnDone.appendChild( text( 'Done' ) )

// const divFullName = element( 'div' )
// const divEmail = element( 'div' )
// const divPassword = element( 'div' )
// const divDoneButton = element( 'div' )

// divFullName.appendChild( spnFullName )
// divFullName.appendChild( inptFullName )
// form.appendChild( divFullName )

// divEmail.appendChild( spnEmail )
// divEmail.appendChild( inptEmail )
// form.appendChild( divEmail )

// divPassword.appendChild( spnPassword )
// divPassword.appendChild( inptPassword )
// form.appendChild( divPassword )

// divDoneButton.appendChild( btnDone )
// form.appendChild( divDoneButton )


