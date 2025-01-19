import React from "react";

//Functional components recieve props and produce HTML(.jsx) as output
//We can also pass props in the component
//When we write the jsx code it has to be enclosed within a single div element
//props are immutable
function Greet(props){
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet;