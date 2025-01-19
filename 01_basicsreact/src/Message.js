import React, { Component } from "react"

class Message extends Component{
    //State is an object that is privately maintained inside a component
    //A state can influence what is rendered on the UI
    //A state can be changed within a component
    constructor(){
        super()
        this.state={
            message: 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for subscribing'
        })
    }
    render(){
        return(
            <>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </>
        )
    }
}
export default Message;