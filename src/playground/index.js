import strata from '../strata'

const { el, tn, div, form, span, label, textbox, button } = strata

// const e = el( 'div', { className: "foo" }, [
//   el( 'span', {}, [
//     tn( 'Hello, World!' )
//   ])
// ])
// const root = document.getElementById( 'root' )
// root.appendChild( e )

const d = div( { className: "foo" }, [
  span( {}, [
    tn( 'This is our DIV' )
  ])
])

const root = document.getElementById( 'root' )
root.appendChild( d )
