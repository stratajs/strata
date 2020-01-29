import strata from '../strata'

const { el, tn, div, form, label, textbox, button } = strata

// Full Name
const lblFullName = label( 'Full Name' )
const txtFullName = textbox()

const divFullName = div()
divFullName.append( lblFullName, txtFullName )

// Email
const lblEmail = label( 'Email' )
const txtEmail = textbox()

const divEmail = div()
divEmail.append( lblEmail, txtEmail )

// Password
const lblPassword = label( 'Password' )
const txtPassword = textbox()

const divPassword = div()
divPassword.append( lblPassword, txtPassword )

// Done Button
const btnDone = button( 'Done' )
const divDoneButton = div()
divDoneButton.append( btnDone )

// Form
const userForm = form()
userForm.method = "POST"
userForm.action = "new_user.html"

userForm.append( divFullName, divEmail, divPassword, divDoneButton )

const root = document.getElementById( 'root' )
root.appendChild( userForm )
