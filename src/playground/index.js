import strata from '../strata'

const { el, tn } = strata

const e = el( 'div', { className: "foo" }, [
  el( 'span', {}, [
    tn( 'Hello, World!' )
  ])
])

const root = document.getElementById( 'root' )
root.appendChild( e )
