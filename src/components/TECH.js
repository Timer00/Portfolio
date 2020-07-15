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
          <div className='techPics'>
            <h3>Javascript</h3>
            <img src={img.javascript}/>
          </div>
          <div className='techPics'><h3>CSS</h3><img src={img.css}/></div>
          <div className='techPics'><h3>HTML</h3><img src={img.html}/></div>
          <div className='techPics'><h3>Django</h3><img src={img.django}/></div>
          <div className='techPics'><h3>Python</h3><img src={img.python}/></div>
          <div className='techPics'><h3>React</h3><img src={img.reactlogo}/></div>
          <div className='techPics'><h3>MySql</h3><img src={img.mysql}/></div>
          <div className='techPics'><h3>NodeJs</h3><img src={img.nodejs}/></div>
          <div className='techPics'><h3>Unity</h3><img src={img.unity}/></div>
          <div className='techPics'><h3>Photoshop</h3><img src={img.photoshop}/></div>
          <div className='techPics'><h3>Illustrator</h3><img src={img.illustrator}/></div>
        </div>
        <div className={`title ${this.state.animate ? 'textLeft' : ''}`}>TECH</div>
      </div>
    );
  }
}

export default TECH;
