import { Children, Component, Proptypes } from 'react'

class Provider exetends Compnent{
  constructor(props, context){
    super(props, context)

    this.store = props.store
  }

  getChildContext(){
    return {
      store: this.store
    }
  }

  render(){
    return Children.only(this.props.children)
  }
}

Provider.PropTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired
  }).isRequired,
  children: PropTypes.element.isRequired
}

Provider.childContextTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired
  }).isRequired
}

render(
  <Provider store={store} />,
  document.getElementById('root')
)