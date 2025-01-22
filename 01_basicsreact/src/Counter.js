import React, { Component } from 'react'

class Counter extends Component {
  
  constructor(props){
    super(props);

    this.state={
      count:0
    }
  }
  increment(){
    //setState method is an asynchronous function so any line written outside the setstate function will be executed first
    //We can pass a callback function as the second parameter with setState method which will be executed after setState method
    // this.setState({
    //   count: this.state.count+1
    // },
    // ()=>{
    //   console.log("Callback value",this.state.count);
    // })

    //Updation for incrementFive() method
    this.setState((prevState,props)=>({
      count:prevState.count+1
    }),()=>{
      console.log(this.state.count);
    })
    // this.state.count=this.state.count+1;
    
  }

  //In the below example all the five function calls are made simulateously instead of working on the previous state each time.
  //For achieving this we need to pass a call back function instead of a object in the setState method

  incrementFive(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <>
        <div>Count-{this.state.count}</div>
        <button onClick={()=> this.incrementFive()}>Increment</button>
      </>
    )
  }
}

export default Counter