import strata from '../strata'

const { el, tn, div, form, span, p, h1, h2, label, textbox, button } = strata

function Div() {
  
  return (
    div( { className: "foo" }, [
      h1( 'Title' ),
      p([
        tn( 'This is my lorem ipsum is my lorem ipsum is my lorem ipsum' ),
        span( 'This is our DIV' ),
        tn( 'This is my lorem ipsum is my lorem ipsum is my lorem ipsum' ),
      ])
    ])
  )
  
}


const root = document.getElementById( 'root' )
root.appendChild( Div() )
