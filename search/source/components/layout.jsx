import React, { Component } from 'react'
import Reflux from 'reflux'
import { Row } from 'react-bootstrap'
import Footer from './footer.jsx'

class Layout extends Component{
  render(){
    return (
      <div>
        {this.props.children}
      <Footer/>
      </div>
    )
  }
}

export default Layout