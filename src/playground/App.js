import strata from '../strata'
import services from './services'

import Loading from './components/Loading'
import UserSearchForm from './components/UserSearchForm'
import UserWidget from './components/UserWidget'

const { div, h2 } = strata

class App extends strata.Component {

  constructor() {
    super()

    this.state = {
      user: null,
      isLoading: false,
      error: null,
      initLoad: true
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  async didMount() {
    this.setState({
      user: null,
      isLoading: true,
      error: null,
      initLoad: false
    })

    services
      .getUserInfo( "222" )
      .then( user => {
        console.log( user )
        this.setState({
          user: user,
          isLoading: false,
          error: null,
          initLoad: false
        })
      })
    ;
  }

  handleSearch( userId ) {
    this.setState({
      user: null,
      isLoading: true,
      error: null,
      initLoad: false
    })

    services
      .getUserInfo( userId )
      .then( user => {
        console.log( user )
        this.setState({ 
          user: user,
          isLoading: false,
          error: null,
          initLoad: false
        })
      })
    ;
  }

  render() {
    return (
      div([
        UserSearchForm({ onSearch: this.handleSearch }),
        (this.state.user
          ? UserWidget({ user: this.state.user})
          : this.state.isLoading
            ? Loading()
            : !this.state.initLoad
              ? span(' Not Found' )
              : '')
      ])
      
      
    )
  }

}

export default App