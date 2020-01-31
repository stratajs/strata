import strata from '../strata'

const { el, tn, div, form, span, label, textbox, button } = strata

function Div() {
  
  return (
    div( { className: "foo" }, [
      span( {}, [
        tn( 'This is our DIV' )
      ])
    ])
  )
}


const root = document.getElementById( 'root' )
root.appendChild( Div() )
