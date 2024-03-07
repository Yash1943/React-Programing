import React, { Component } from "react";

export class Basics extends Component {
  constructor(props) {
    super(props);
    this.state = { hello: "TopperWorld" };
    this.changeState = this.changeState.bind(this);
  }
  render() {
    return (
      <div>
        <h1>React Componets LifeCycle</h1>
        <h3>Hello{this.state.hello}</h3>
        <button onClick={this.changeState}>Click Here</button>
      </div>
    );
  }
  componentWillMount() {
    console.log("Component Will Mount");
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }
  changeState() {
    this.setState({ hello: "All-Its a great reactJS tutorial" });
  }
  componentWillReceiveProps(newProps) {
    console.log("Component Will Receive Props");
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("Should Component Update");
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component Will Update");
  }
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
}

export default Basics;
