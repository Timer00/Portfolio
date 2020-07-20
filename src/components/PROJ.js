import React, { Component } from 'react';

class PROJ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
      border: false
    };
  }
  open = () => {
    this.setState({animate: true,border: true});
    this.props.changeParentState('goBlue',!this.props.parentState.goBlue);
  };

  close = () => {
    this.setState({animate: false, border: false});
    this.props.changeParentState('goBlue',!this.props.parentState.goBlue);
  };

  render() {

    let divClass = `cell blue`;
    divClass += this.state.animate ? ` cell${this.props.id}Open` : '';

    let titleEnd = 'titleEnd';
    titleEnd += this.state.animate ? ' titleFade' : '';

    let contentClass = 'content';
    contentClass += this.state.animate ? ' fadeIn' : '';

    let subdivision = 'subdivision';
    subdivision += this.state.border ? ' border' : '';
    console.log(subdivision);

    return (
      <div onMouseEnter={this.open} onMouseLeave={this.close} id={this.props.id} className={divClass}>
        <div className={contentClass}>
          <div className={subdivision} style={{minWidth: "50%", minHeight: "40%"}}></div>
          <div className={subdivision} style={{minWidth: "50%", minHeight: "40%"}}></div>
          <div className={subdivision} style={{minWidth: "50%", minHeight: "33%"}}></div>
          <div className={subdivision} style={{minWidth: "50%", minHeight: "33%"}}></div>
          <div className={subdivision} style={{minWidth: "50%", minHeight: "33%"}}></div>
        </div>
        <div className={`title ${this.state.animate ? 'textLeft' : ''}`}>PROJ</div>
        <div className={titleEnd}>ECTS</div>
      </div>
    );
  }
}

export default PROJ;
