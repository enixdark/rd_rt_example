import { insertCharacter, removeCharacter, store } from './store'
import { render } from 'react-dom'
import React, { Component, PropTypes } from 'react'

class View extends Component {
  constructor(props, context){
    super(props, context)

    // const { store } = props

    // this.state = {
    //   text: store.getState()
    // }

    // this.cancelSubscription = store.subscribe( () => {
    //   this.setState({
    //     text: store.getState()
    //   })
    // })

    this.onCharacter = this.onCharacter.bind(this)

    document.addEventListener('keyup', this.onCharacter)
  }

  componentWillUnmount(){
    document.removeEventListener('keyup', this.onCharacter)
    // this.cancelSubscription()
  }

  onCharacter(event){
    const { props } = this

    if(event.key === 'Backspace'){
      props.removeCharacter()
    }
    else if (event.key.length === 1) {
      props.insertCharacter(event.key)
    }
  }

  render(){
    const { text } = this.props

    return (
      <div>
      {text}
      </div>
    )
  }
}

View.propTypes = {
  insertCharacter: PropTypes.func.isRequired,
  removeCharacter: PropTypes.func.isRequired,
  text: PropTypes.func.isRequired
}

render(
  <View store={store} />,
  document.body
)
