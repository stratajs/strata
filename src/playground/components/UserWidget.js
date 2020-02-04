import strata from '../../strata'

const { el, tn, div, form, span, p, h1, h2, h3, label, textbox, button } = strata


function UserWidget(props) {
  const { user } = props

  return (
    div([
      h2( `${user.firstName} ${user.lastName}` ),
      h3( `twitter: ${user.twitter}`),
      h3( `instagram: ${user.instagram}`)
    ])
  )
}

export default UserWidget