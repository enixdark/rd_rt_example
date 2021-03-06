import React, { Component } from 'react'
import ClassNames from 'classnames'


class Picture extends Component{
  render(){
    let classes = ClassNames({
      'img-responsive': this.props.responsive,
      'img-portrait': this.props.portrait,
      'img-rounded': this.props.rounded,
      'img-circle': this.props.circle,
      'img-thumbnail': this.props.thumbnail
    })

    return (
      <picture>
        {this.props.imgSet.map( (img,idx) => {
          return <source key={idx} media={img.media} srcSet={img.src}/>
          })
        }

        {<img className={classes}
         src={this.props.defaultImage.src}
         width={this.props.width}
         height={this.props.height}
         alt={this.props.defaultImage.alt}/>
        }
      </picture>
    )
  }
}

Picture.propTypes = {
  imgSet: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      media: React.PropTypes.string.isRequired,
      src: React.PropTypes.string.isRequired
    }).isRequired
  ),
  defaultImage: React.PropTypes.shape({
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired
  }).isRequired,
  rounded: React.PropTypes.bool,
  circle: React.PropTypes.bool,
  thumbnail: React.PropTypes.bool,
  portrait: React.PropTypes.bool,
  width: React.PropTypes.any,
  height: React.PropTypes.any
}

Picture.defaultProps = {
  imgSet: [],
  defaultImage: {},
  rounded: false,
  circle: false,
  thumbnail: false,
  portrait: false,
  width: "auto",
  height: "auto"
}

export default Picture