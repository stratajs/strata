let rootElement = null
let rootComponent = null

function completeRender() {
  rootElement.innerHTML = ''
  rootElement.appendChild( rootComponent.render() )
}

function handleStateChange() {
  completeRender()
}

function render( component, target ) {
  rootElement = target
  

  rootComponent = new component()
  rootComponent.watchState( handleStateChange )

  completeRender()

  rootComponent.didMount()
}

export default {
  render
}