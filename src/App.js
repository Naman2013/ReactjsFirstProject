import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() { //This function will call on initial rendering.

    console.log("run only one time after the rendering ");
    document.title = `You clicked ${this.state.count} times`;

  }
  componentDidUpdate(prevProps , prevstate) { //componentDidmount call immmediately every time after render function

    console.log(" ComponentDidUpdate is call immediately every time the updating occurs. ");

     document.title = `You clicked ${this.state.count} times`;
   }
   
   render(){
    console.log("render call");
    return(
      <div>
      <p>You clicked {this.state.count} times</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Click me
      </button>
    </div>
    )
  }
}
export default App ;

//componentDidUpdate(prevProps, prevState, snapshot): is called immediately after updating occurs. 
//This method is not called for the initial render.
//Use this as an opportunity to operate on the DOM when the component has been updated