import React, { Component } from 'react';

class PROJ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false
    };
  }
  open = () => {
    this.setState({animate: true});
    this.props.changeParentState('goBlue',!this.props.parentState.goBlue);
  };

  close = () => {
    this.setState({animate: false});
    this.props.changeParentState('goBlue',!this.props.parentState.goBlue);
  };

  render() {

    let divClass = `cell blue`;
    divClass += this.state.animate ? ` cell${this.props.id}Open` : '';

    let titleEnd = 'titleEnd';
    titleEnd += this.state.animate ? ' titleFade' : '';

    let contentClass = 'content marginTop';
    contentClass += this.state.animate ? ' fadeIn' : '';

    return (
      <div onMouseEnter={this.open} onMouseLeave={this.close} id={this.props.id} className={divClass}>
        <div className={contentClass}>
          <div className='projects'></div>
        </div>
        <div className={`title ${this.state.animate ? 'textLeft' : ''}`}>PROJ</div>
        <div className={titleEnd}>ECTS</div>
      </div>
    );
  }
}

export default PROJ;
