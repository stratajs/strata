import './styles/style.css'
import strata from '../strata'

import services from './services'

import Layout from './components/Layout'
import Loading from './components/Loading'
import UserWidget from './components/UserWidget'

const { div, h2 } = strata

async function main() {
  const root = document.getElementById( 'root' )
  root.appendChild(
    Layout({}, [ Loading() ])
  )

  const user = await services.getUserInfoPromise()
  root.innerHTML = ''

  root.appendChild(
    Layout({}, [ UserWidget( { user } ) ])
  )
}

main() 