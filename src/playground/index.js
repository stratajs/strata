import strata from '../strata'

const { el, tn, div, form, span, p, h1, h2, label, textbox, button } = strata

function Div() {
  
  return (
    div( { className: "foo" }, [
      p( {}, [
        span({}, [ tn( 'This is our DIV' ) ]) 
      ])
    ])
  )
  
}


const root = document.getElementById( 'root' )
root.appendChild( Div() )
