import { insertCharacter, removeCharacter, store } from './store'
import { render } from 'react-dom'
import React, { Component, PropTypes } from 'react'

class View extends Component {
  constructor(props, context){
    super(props, context)

    const { store } = props

    this.state = {
      text: store.getState()
    }

    this.cancelSubscription = store.subscribe( () => {
      this.setState({
        text: store.getState()
      })
    })

    this.onCharacter = this.onCharacter.bind(this)

    document.addEventListener('keyup', this.onCharacter)
  }

  componentWillUnmount(){
    document.removeEventListener('keyup', this.onCharacter)
    this.cancelSubscription()
  }

  onCharacter(event){
    const { dispatch } = this.props.store

    if(event.key === 'Backspace'){
      dispatch(removeCharacter())
    }
    else if (event.key.length === 1) {
      dispatch(insertCharacter(event.key))
    }
  }

  render(){
    const { text } = this.state

    return (
      <div>
      {text}
      </div>
    )
  }
}

View.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired
  }).isRequired
}

render(
  <View store={store} />
  document.body
)
