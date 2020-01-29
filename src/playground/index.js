import strata from '../strata'

const { el, tn, div, form, label, textbox, button } = strata

function textField( lbl ) {
  const d = div()
  d.append( label( lbl ), textbox() )

  return d
}

// Fields
const fullNameField = textField( 'Full Name' )
const emailField = textField( 'Email' )
const passwordField = textField( 'Password' )

// Done Button
const btnDone = button( 'Done' )
const divDoneButton = div()
divDoneButton.append( btnDone )

// Form
const userForm = form()
userForm.method = "POST"
userForm.action = "new_user.html"

// Add Fields to Form
userForm.append( 
  fullNameField, 
  emailField, 
  passwordField, 
  divDoneButton 
)

const root = document.getElementById( 'root' )
root.appendChild( userForm )
