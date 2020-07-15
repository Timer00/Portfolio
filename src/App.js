import React, { Component } from 'react';
import './App.css';
import THEO from './components/THEO'
import PROJ from './components/PROJ'
import TECH from './components/TECH'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goBlue: false
    };
  }

  changeState (name,value) {
    this.setState({[name]:value});
  }

  render() {
    return (
      <div className="container">
        <div className="inside">
          <THEO parentState={this.state} changeParentState={this.changeState.bind(this)} id={1}/>
          <PROJ parentState={this.state} changeParentState={this.changeState.bind(this)} id={2}/>
          <TECH parentState={this.state} changeParentState={this.changeState.bind(this)} id={3}/>
        </div>
      </div>
    );
  }
}

export default App;
