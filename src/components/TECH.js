import React, { Component } from 'react';
import * as img from "../images/tech"

class TECH extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false
    };
  }

  open = () => {
    this.setState({animate: true});
  };

  close = () => {
    this.setState({animate: false});
  };

  render() {

    let divClass = `cell yellow`;
    divClass += this.state.animate ? ` cell${this.props.id}Open` : '';

    let contentClass = 'content marginTop';
    contentClass += this.state.animate ? ' fadeIn' : '';

    return (
      <div onMouseEnter={this.open} onMouseLeave={this.close} id={this.props.id} className={divClass}>
        <div className={contentClass}>

        </div>
        <div className={`title ${this.state.animate ? 'textLeft' : ''}`}>TECH</div>
      </div>
    );
  }
}

export default TECH;
