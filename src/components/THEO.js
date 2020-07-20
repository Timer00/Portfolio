import React, { Component } from 'react';
import * as img from '../images/theo';

class THEO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false
    };
  }

  open = () => {
    this.setState({animate: true});
    if (this.props.id === 2){
      this.props.changeParentState('goBlue',!this.props.parentState.goBlue);
    }
  };

  close = () => {
    this.setState({animate: false});
  };

  render() {

    let divClass = `cell red`;
    divClass += this.state.animate ? ` cell${this.props.id}Open` : '';
    divClass += this.props.id === 1 ? this.props.parentState.goBlue ? ' goBlue' : '' : '';

    let contentClass = 'content';
    contentClass += this.state.animate ? ' fadeIn' : '';

    return (
      //Use a mixture of onclick and onMouseLeave/onMouseEnter to know when to close or open the window
      <div onMouseEnter={this.open} onMouseLeave={this.close} id={this.props.id} className={divClass}>
        <div className={contentClass}>

        </div>
        <div className={`title ${this.state.animate ? 'textLeft' : ''}`}>THEO</div>
      </div>
    );
  }
}

export default THEO;
