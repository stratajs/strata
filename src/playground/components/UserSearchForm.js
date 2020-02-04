import strata from '../../strata'

const { div, span, input } = strata

function UserSearchForm( props ) {

  function handleClick() {
    const el = document.getElementById( "userId" )
    props.onSearch( el.value )
  }

  return (
    div({style: "margin: 50px 0px;"}, [
      span( 'Enter User ID: ' ),
      input({ id: "userId", type: "textbox" }),
      input({ type: "button", onclick: handleClick, value: "Find" })
    ])
  )
}

export default UserSearchForm