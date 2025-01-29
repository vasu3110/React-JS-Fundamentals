import React, { Component } from 'react'

class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Vasu'
    }
  }

  componentDidMount(){
    setInterval(()=>{
        this.setState({
            name:'Vasu'
        })
    },2000)
  }
  render() {
    return (
      <div>
        ParentComp
      </div>
    )
  }
}

export default ParentComp