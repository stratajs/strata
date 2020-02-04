import strata from '../../strata'

const { div, h1, ul, li, a } = strata

function Layout( props, children ) {
  return (
    div([
      h1( 'User Management' ),
      ...children,
      div({ className: 'footer' },[
        ul([
          li([ a('Home' ) ]),
          li([ a('About' ) ]),
          li([ a('Careers' ) ])
        ])
      ])
    ])
  )
}

export default Layout