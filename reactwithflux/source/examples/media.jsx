import React, { Component } from 'react'
import ClassNames from 'classnames'

class Media extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    let responsiveStyle = ClassNames({
      "embed-responsive": true,
      "embed-responsive-16by9": this.props.wideScreen,
      "embed-responsive-4by3": !this.props.wideScreen
    })
    let divStyle, ifStyle
    divStyle = this.props.height ? {padddingBottom: this.props.height} : null
    ifStyle = this.props.height ? {height: this.props.height} : null

    if(this.props.src){
      if(this.props.type === " video"){
        return (<div className={responsiveStyle} style={divStyle}>
          <iframe className="embed-responsive-item" 
                  src={this.props.src}
                  style={ifStyle}
                  allowFullScreen={this.props.allowFullScreen}>
          </iframe>

          </div>)
      }
      else{
        return (<div className={responsiveStyle} style={divStyle}>
            <embed frameBorder='0' src={this.props.src}
              stype={ifStyle}
              allowFullScreen={this.props.allowFullScreen}>
            </embed>
          </div>
        )
      }
    }
    else{
      return null
    }
  }
}

Media.propTypes = {
  wideScreen: React.PropTypes.bool,
  type: React.PropTypes.string,
  src: React.PropTypes.string.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number
}

Media.defaultProps ={
  src: "",
  type: "video",
  wideScreen: false,
  allowFullScreen: false,
  width:100,
  height:100
}

export default Media