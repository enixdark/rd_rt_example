import React, { Component } from 'react'
import { Button, ButtonGroup, ButtonToolbar, DropdownButton, MenuItem, 
         SplitButton } from 'react-bootstrap'


class Buttons extends Component{
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
    this.changeState = this.changeState.bind(this)

  }

  changeState(state) {
    this.setState(state);
  }

  setLoading(){
    this.changeState({isLoading: true})
    setTimeout( () => {
      this.changeState({isLoading: false})
    }, 2000)
  }

  render(){
    let isLoading = this.state.isLoading
    return (
      <div>
        <h2> Buttons </h2>
        <h5> Simple buttons</h5>
        <ButtonToolbar>
          <Button> Default </Button>
          <Button bsStyle="primary"> Primary </Button>
          <Button bsStyle="success"> Success </Button>
          <Button bsStyle="info"> Info </Button>
          <Button bsStyle="warning"> Warning </Button>
          <Button bsStyle="danger"> Danger </Button>
          <Button bsStyle="link"> Link </Button>
        </ButtonToolbar>
        <h5>Full-width buttons</h5>
        <ButtonToolbar>
        <Button
        bsStyle = "primary"
        bsSize = "xsmall"
        block>
        Extra small block button (full-width)
        </Button>
        <Button
        bsStyle = "info"
        bsSize = "small"
        block>
        Small block button (full-width)
        </Button>
        <Button
        bsStyle = "success"
        bsSize = "large"
        block>
        Large block button (full-width)
        </Button>
        </ButtonToolbar>
        <h5> Active, non-active and disabled buttons </h5>
        <ButtonToolbar>
        <Button> Default button - Non-active </Button>
        <Button active> Default button – Active </Button>
        <Button disabled> Default button – Disabled </Button>
        </ButtonToolbar>
        <h5>Loading state</h5>
        <Button
        bsStyle = "primary"
        disabled = { isLoading }
        onClick = { !isLoading ? this.setLoading.bind(this) : null }>
        { isLoading ? 'Loading...' : 'Loading state' }
        </Button>
        <h5> Groups and Toolbar </h5>
        <ButtonToolbar>
        <ButtonGroup>
        <Button> 1 </Button>
        <Button> 2 </Button>
        <Button> 3 </Button>
        </ButtonGroup>
        <ButtonGroup>
        <Button> 4 </Button>
        <Button> 5 </Button>
        </ButtonGroup>
        </ButtonToolbar>
        <h5> Dropdown buttons </h5>
        <ButtonToolbar>
        <DropdownButton
        title = "Dropdown"
        id = "bg-nested-dropdown">
        <MenuItem
        bsStyle = "link"
        eventKey = "1">
        Dropdown link
        </MenuItem>
        <MenuItem
        bsStyle = "link"
        eventKey = "2">
        Dropdown link
        </MenuItem>
        </DropdownButton>
        <DropdownButton
        noCaret
        title = "Dropdown noCaret"
        id = "bg-nested-dropdown-nocaret">
        <MenuItem
        bsStyle="link"
        eventKey="1">
        Dropdown link
        </MenuItem>
        <MenuItem
        bsStyle = "link"
        eventKey = "2">
        Dropdown link
        </MenuItem>
        </DropdownButton>
        <DropdownButton
        dropup
        title = "Dropup"
        id="bg-nested-dropup">
        <MenuItem
        bsStyle = "link"
        eventKey = "1">
        Dropdown link
        </MenuItem>
        <MenuItem
        bsStyle = "link"
        eventKey = "2">
        Dropdown link
        </MenuItem>
        </DropdownButton>

        <SplitButton
        bsStyle = "success"
        title="Splitbutton down"
        id="successbutton">
        <MenuItem eventKey = "1">Action </MenuItem>
        <MenuItem eventKey = "2">Another action </MenuItem>
        </SplitButton>
        <SplitButton
        dropup
        bsStyle = "success"
        title = "Splitbutton up"
        id = "successbutton">
        <MenuItem eventKey = "1">Action </MenuItem>
        <MenuItem eventKey = "2">Another action </MenuItem>
        </SplitButton>
        </ButtonToolbar>
        </div>
        )
  }
}

export default Buttons