import React, { Component } from 'react'
import Message from './Message'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'Welcome !'
    }
    // this is approach-3 of binding this keyword inside the event handler
    //Since constructor is called once hence it has better performance 
    // this.clickHandler=this.clickHandler.bind(this)
  }

//   clickHandler(){
//     this.setState({
//         message:"Goodbye !"
//     })
//     console.log(this);
//   }

  //This is approach-4 of using the this keyword inside the event handler i,e using the arrow function to declare the handler
  clickHandler=()=>{
    this.setState({
        message:"Goodbye !"
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*This approach-1 of using this keyword inside an event handler. But everytime eventHandler is called the component is re-rendered so this method may not be suitable for large applications */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/*This is approach-2 of using the this keyword inside the event handler .But this too has performance implications*/}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind