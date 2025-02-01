import React from 'react'

function Columns() {
    const items=[]
  return (
    //We can also use <></> notation for using the fragments
    <React.Fragment>
        {
            items.map(item=>(
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
        <td>Name</td>
        <td>Vasu</td>
    </React.Fragment>
  )
}

export default Columns