import React, { Component } from 'react'
import {Carousel,CarouselItem} from 'react-bootstrap'

class Carousels extends Component{
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      direction: null
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(selectedIndex, selectedDirection){
    this.setState({
      index: selectedIndex
      direction: selectedDirection
    })
  }

  render(){
    return (
      <div>
      <h2>Uncontrolled Carousel</h2>
      <Carousel>
      <CarouselItem>
      <img
      width = "100%"
      height = { 150 }
      alt = "600x150"
      src = "http://placehold.it/600x150"/>
      <div className = "carousel-caption">
      <h3> Slide label 1 </h3>
      <p> Lorem ipsum dolor sit amet </p>
      </div>
      </CarouselItem>
      <CarouselItem>
      <img
      width = "100%"
      height = { 150 }
      alt = "600x150"
      src = "http://placehold.it/600x150"/>
      <div className = "carousel-caption">
      <h3> Slide label 2 </h3>
      <p> Nulla vitae elit libero, a pharetra augue. </p>
      </div>
      </CarouselItem>
      </Carousel>
      <h2>Controlled Carousel</h2>
      <Carousel activeIndex = {this.state.index}
      direction = {this.state.direction}
      onSelect = {this.handleSelect.bind(this)}>
      <CarouselItem>
      <img
      width = "100%"
      height = {150}
      alt = "600x150"
      src = "http://placehold.it/600x150"/>
      <div className = "carousel-caption">
      <h3> Slide label 1 </h3>
      <p> Lorem ipsum dolor sit amet </p>
      </div>
      </CarouselItem>
      <CarouselItem>
      <img
      width = "100%"
      height = {150}
      alt = "600x150"
      src = "http://placehold.it/600x150"/>
      <div className = "carousel-caption">
      <h3> Slide label 2 </h3>
      <p> Nulla vitae elit libero, a pharetra augue. </p>
      </div>
      </CarouselItem>
      </Carousel
      </div>
    )
  }
}

expot default Carousels