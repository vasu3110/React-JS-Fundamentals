import React, { Component } from 'react'
import MemoComp from './MemoComp'
// import PureComp from './PureComp'
// import RegComp from './RegComp'

class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Vasu'
    }
  }

  componentDidMount(){
    //Due to the setinterval method the parent component re-renders after every 2 seconds.Hence its child component are also re-rendered except pure components
    setInterval(()=>{
        this.setState({
            name:'Vasu'
        })
    },2000)
  }

  render() {
    console.log('Parent component Render')
    return (
      <div>
        ParentComp
        <MemoComp name={this.state.name}/>
        {/* <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp