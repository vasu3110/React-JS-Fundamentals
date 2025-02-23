import React, { Component } from "react"

//Class Components recieve props(properties) as input and produce HTML(.jsx) file as output
//Apart from this class component also creates a private state

//props Vs state
//Props get passed to the component like function parameters
//Props are Immutable
//props<--functional conponents
//this.props<--Class Components
//state is managed within the component like the variables declared within the function body
//state can be changed
//useState Hook<--Functional Components
//this.state<--Class Components

class Welcome extends Component{
    render(){
        const {name,heroName}=this.props;
        // const {state1,state2}=this.state;
        return(
            <h1>Welcome {name} a.k.a {heroName}</h1>
        )
    }
}
export default Welcome;