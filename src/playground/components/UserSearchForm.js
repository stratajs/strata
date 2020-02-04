import strata from '../../strata'

const { div, span, input } = strata

function UserSearchForm( props ) {

  function handleClick() {
    const el = document.getElementById( "userId" )
    props.onSearch( el.value )
  }

  return (
    div({className: "page-wrapper"}, [
      span( 'Enter User ID: ' ),
      input({ id: "userId", type: "textbox" }),
      input({ type: "button", onclick: handleClick, className: "btn btn-sm btn-primary", value: "Find" })
    ])
  )
}

export default UserSearchForm