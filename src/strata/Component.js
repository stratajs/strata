import strata from './index' 

export default class Component {
  constructor() {
    this.state = {}
  }

  watchState( fn ) {
    this.stateWatcher = fn
  }

  fireSetState() {
    this.stateWatcher()
  }

  setState( newState ) {
    this.state = newState
    this.fireSetState()
  }

  didMount() {
    
  }

  render() {
    strata.div( 'PLEASE ADD COMPONENTS' )
  }
}