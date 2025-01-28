import React from 'react'
import Person from './Person';
function Namelist() {
    const names=['Bruce','Clark','Diana','Bruce'];
    const persons=[
        {
            id:1,
            name:"Bruce",
            age:20,
            skill:"React"
        },
        {
            id:2,
            name:"Clark",
            age:22,
            skill:"Angular"
        },
        {
            id:3,
            name:"Diana",
            age:25,
            skill:"Vue"
        }
    ]
    //A key is a special string attribute you need to include when creating lists of elements
    //Keys give the elements a stable identity
    //keys help react identify which items have changed, are added, or are removed
    //keys help in efficient update of the user interface
    // const personlist=persons.map(person =><Person key={person.id} person={person} />)
    //avoid the usage of index as keys as it causes certain issues
    const nameList=names.map((name,index)=> <h2 key={index}>{index} {name}</h2>)
  return (
    <div>{nameList}</div>
  )
}

export default Namelist