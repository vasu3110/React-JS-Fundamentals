import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  /*What is Shallow Comparison ??
    string a="ab";
    string b="ab";
    shallow comp(a===b) =>Returns true as value is same
    let arr1=[1,2,3];
    let arr2=[1,2,3];
    let arr3=arr1;
    shallow comp(arr1===arr2) =>returns false as in case of non-primitive data types reference to the object is compared and here arr1 and arr2 are stored at different locations.
    shallow comp(arr1===arr3) =>returns true as both point to the same memory location 
  */
  //A pure component implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the component
  //If there is no difference the component is not re-rendered -->performance boost
  //It is a good idea that all the children components are also pure to avoid unexpected behaviour
  //Never mutate the state.Always return a new object that reflects the new state
  render() {
    console.log('Pure component render');
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp 