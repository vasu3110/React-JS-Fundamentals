import React, { Component } from 'react'

class UserGreetings extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }
  render() {
    //Method-1 for conditional rendering
    // if(this.state.isLoggedIn){
    //     return (
    //         <>
    //             <div>Welcome Vasu</div>
    //         </>
    //     )
    // }
    // else{
    //     return(
    //         <>
    //             <div>Welcome Guest</div>
    //         </>
    //     )
    // }

    //This is approach-2
    // let message;
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Vasu</div>
    // }
    // else{
    //     message=<div>Welcome Guest</div>
    // }
    // return <div>message</div>

    //This is approach-3
    // return (this.state.isLoggedIn)?(
    //     <div>Welcome Vasu</div>
    // ):(
    //     <div>Welcome Guest</div>
    // )

    //This is approach-4
    //This is short circuit operator
    return this.state.isLoggedIn && <div>Welcome Vasu</div>
  }
}

export default UserGreetings