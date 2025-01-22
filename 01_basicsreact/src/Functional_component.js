import React from "react";

//Functional components recieve props and produce HTML(.jsx) as output
//We can also pass props in the component
//When we write the jsx code it has to be enclosed within a single div element
//props are immutable

//We can also destructure the props like this
function Greet({name,heroName}){
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}

export default Greet;