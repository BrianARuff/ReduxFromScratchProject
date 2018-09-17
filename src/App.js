import React, { Component } from 'react';
import './App.css';
import {increment, decrement, double, half, reset} from './actions';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.increment()}>Click to Add</button>
        <button onClick={() => this.props.decrement()}>Click to Subtract</button>
        <button onClick={() => this.props.double()}>Click to Double Number</button>
        <button onClick={() => this.props.half()}>Click to Half Number</button>
        <button onClick={() => this.props.reset()}>Reset to Zero!!</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {count: state}
}

export default connect(mapStateToProps, { increment, decrement, double, half, reset })(App);