import React from "react";

const Hello=()=>{
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Vasu</h1>
    //     </div>
    // )
    //We can also write HTML code without using jsx code using createElement() from React library
    //Remember each jsx element is just a syntactic sugar for calling the react.createElement() 
    //jsx is translated into react.createElement() internally using React library that's why we imported react library
    //jsx element is more easy to understand
    return React.createElement(
        'div',
        {id:'hello', className:'dummyClass'},
        React.createElement(
            'h1',
            null,
            "Hello Vasu"
        )
    );
}

export default Hello;