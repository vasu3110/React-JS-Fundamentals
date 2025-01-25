import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
//This demonstrates how a child component calls a method in parent component using props
class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentname: 'Parent'
    }
    this.greetparent=this.greetparent.bind(this);
  }

  greetparent(childName){
    alert(`Hello ${this.state.parentname} from ${childName}`);
  }
  render() {
    return (
        <>
            <ChildComponent greetHandler={this.greetparent} />
        </>
    )
  }
}

export default ParentComponent