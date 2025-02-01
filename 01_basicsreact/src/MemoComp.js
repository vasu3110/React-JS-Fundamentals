import React, { Component } from 'react'

//By using React.memo method we can achieve the same functionality in functional component which pure class components gave us. This component will not be re-rendered unless props are changed. 
//There must be some change in the shallow comparison of props of memo component
function MemoComp({name}) {
  console.log('Rendering Memo Component');
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComp)