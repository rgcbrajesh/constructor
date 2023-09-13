import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "brajesh rajput",
    };
    this.handleEvent=this.handleEvent.bind(this);

  }
  handleEvent=()=>{
    console.log(this.state.data)
  }
  render() {
    return (
      <div>
        <h1>React constructor</h1>
        <input type="text"  value={this.state.data} />
        <br />
        <br />
        <button onClick={this.handleEvent}>Click-me</button>
      </div>
    );
  }
}
