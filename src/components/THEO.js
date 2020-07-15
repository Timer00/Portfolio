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
          <img src={img.profile} className='profilePicture'/>
          <div className={'text'}>
            <h1>About me</h1>
            <h3>Hello!</h3>
            {`I am a Front End Developer located in Berlin, with professional experience developing websites and apps.`}<br/><br/>

            {`Mainly, I have used Web technologies based on Javascript, such as React, React-Native and NodeJs. But I also have developed complete web systems using PHP, Python (Django) and mySQL.`}<br/><br/>

            {`I also have a passion for 2D game development, where I have used HTML5 Canvas or Unity to achieve my visions.`}<br/><br/>

            {`As a Front End Developer, I excel in transforming concept into reality, taking in account not only the tiny details but also the main purpose of an Idea.`}

            {/*<h1>Contact me</h1>*/}

            {/*{`Feel free to reach me using the following means:`}<br/><br/>  aasdasdasdasdasdasd s  dsa as das d*/}

            {/*{`EMAIL: theocarraraleao@gmail.com`}<br/>*/}
            {/*{`PHONE NUMBER: +49 176 41808866`}*/}
          </div>
          <div className='profileIcons'><h3>Github</h3><p>Timer00</p><a href='https://github.com/Timer00'><img src={img.github}/></a></div>
          <div className='profileIcons'><h3>LinkedIn</h3><p>Théo Carrara</p><a href='https://www.linkedin.com/in/th%C3%A9o-carrara-216335186/'><img src={img.linkedin}/></a></div>
          <div className='profileIcons'><h3>Stack Overflow</h3><p>Timerºº</p><a href='https://stackoverflow.com/users/5380758/timer%c2%ba%c2%ba?tab=profile'><img src={img.stackoverflow}/></a></div>
          <div className='profileIcons'><h3>Resume</h3><p>CV</p><a href=''><img src={img.resume}/></a></div>
          <div className='profileIcons'><h3>Email Address</h3><p>theocarraraleao@gmail.com</p><a href='mailto:theocarraraleao@gmail.com'><img src={img.email}/></a></div>
          <div className='profileIcons'><h3>Mobile Number</h3><p>+49 176 41808866</p><a href='tel:+4917641808866'><img src={img.telephone}/></a></div>
        </div>
        <div className={`title ${this.state.animate ? 'textLeft' : ''}`}>THEO</div>
      </div>
    );
  }
}

export default THEO;
