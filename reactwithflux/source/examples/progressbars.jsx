import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'

let tickInterval

class ProgressBars extends Component{
  constructor(props){
    super(props)
    this.state = {
      progress: 0
    }
    this.tick = this.tick.bind(this)
  }

  conponentDidMount(){
    tickInterval = setInterval(this.tick, 500)
  }

  componentWillUnMount(){
    clearInterval(tickInterval)
  }

  tick(){
    this.setState({progress: this.state.progress < 100 ? ++this.state.progress : 0})
  }
  render(){
    return (
      <div>
        <h2> ProgressBars </h2>
        <ProgressBar active now={this.state.progress} />
        <ProgressBar bsStyle="success" now={this.state.progress}/>
        <ProgressBar now={this.state.progress} label="%(percent)%s" />
        <ProgressBar>
          <ProgressBar
            bsStyle = "warning"
            now = { 50 }
            key = { 1 }
            label = "System Files" />
          <ProgressBar
            bsStyle="danger"
            active
            striped
            now = { 40 }
            key = { 3 }
            label = "Crunching" />
        </ProgressBar>
      </div>
    )
  }
}

export default ProgressBars