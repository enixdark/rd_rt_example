import React from 'react'
import { render } from 'react-dom'


const App = React.createClass({

  getInitialState(){
    return {
      greeting: "",
      message: ""
    }
  },
  componentWillMount(){
    this.setState({
      greeting: this.props.greeting
    })
  },

  componentDidMount(){
    this.refs.input.focus()
  },
  handleClear: (event) => {
    this.refs.input.value = ""
    this.setState({
      message: ""
    })
  },
  handleChange: (event) => {
    this.setState({
      message: event.target.value
    })
  },

  render: () => {
    return (
      <div>
        <h1>Refs and data binding</h1>
        <h2>{this.state.greeting}</h2>
        Type a message:
        <br/>
        <input type="text" ref="input" onChange={this.handleChange} />
        <br/>
        Your message: {this.state.message}
        <br/>
        <input type="button" value="Clear" onClick={this.handleClear} />
      </div>
    )
  }
})


render(
  <App greeting="let's binding some values" />,
  document.getElementById('#app')
)