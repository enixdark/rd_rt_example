import React, { Component } from 'react'
import { Glyphicon } from 'react-boostrap'

class FontAwesome extends Component {
  render(){
    if(this.props.icon){
      return (<i className={"fa fa-" + this.props.icon} />)
    }
    else{
      return null
    }
  }
}

FontAwesome.propTypes = {
  icon: React.PropTypes.string
}

FontAwesome.defaultProps = {
  icon: ""
}