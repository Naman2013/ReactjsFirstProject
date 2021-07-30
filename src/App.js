import React, { Component } from 'react';
import Switch from './Switch';
import './style.css';
//import Button from "@material-ui/core/Button";

class App extends React.Component {
  static defaultProps = {
    onToggle: () => {}
  }

  state = {
    on: false
  }

  toggle = () =>
    this.setState(
      ({on}) => ({on: !on}),
      () => {
        this.props.onToggle(this.state.on)
      },
    )
    
  render() {
    const {on} = this.state
    return (
      <>
      <h1>Welcome to the world of Aliens!</h1>
      {/* <Button style={{marginLeft:'30px',marginBottom:'8px'}} variant="contained" color="primary">
       World
      </Button> */}
      <Switch on={on} onClick={this.toggle} />
      </>
    )
  }
}

export default App;
