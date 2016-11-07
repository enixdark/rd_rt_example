import React from 'react'
import { render } from 'react-dom'
import Router from 'react-router'
import Routes from './routes.jsx'
import GridExample from './examples/grid.jsx'
import Navigation from './examples/navbar.jsx'
import Wells from './examples/wells.jsx'
// import Panels from './examples/panels.jsx'
import AlertExample from './examples/alerts.jsx'
import Media from './examples/media.jsx'
import { Grid, Row, Col } from "react-bootstrap"
import ReactDom from 'react-dom'
import Buttons from './examples/button.jsx'
import ProgressBars from './examples/progressbars.jsx'
// import Menu from './components/menu.jsx'
const App = React.createClass({
  render(){
    return (
      <section>
        <h1>My search</h1>
        <p>Hello World</p>
      </section>
    )
  }
})

// render(
//   Routes,
//   document.getElementById('container')
// )

render(
  <ProgressBars />,
  document.getElementById('container')
)

// ReactDom.render((<Grid fluid={true}>
//   <Row>
//   <Col xs={12} md={6}>
//   <Media type="image/svg+xml"
//   src="https://upload.wikimedia.org/wikipedia/commons/e/
//   e5/Black-crowned_Night_Heron.svg" />
//   </Col>
//   <Col xs = { 12 } md = { 6 }>
//   <Media
//   type = "video"
//   src = "//www.youtube.com/embed/x7cQ3mrcKaY" />
//   </Col>
//   </Row>
//   </Grid>),
// document.getElementById( 'container' )
// );