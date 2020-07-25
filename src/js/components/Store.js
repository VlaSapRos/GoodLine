import React from 'react';
import Header from './Header.js'
import Content from './Content.js'

export default class Store extends React.Component {
  constructor(props) {
    super(props)
    this.recordResponse = this.recordResponse.bind(this);
    this.state = { 
      usersList : [[]] ,
      count : 0
    }
  }
  recordResponse(value) {
    let newUsersList = this.state.usersList.concat(value)
    this.setState({usersList : newUsersList})
  }
  render()
  {
    return(
      <>
        <Header state={this.state} recordResponse={this.recordResponse}/>
        <Content state={this.state}/>
        <button onClick={() => console.log(this.state.usersList)}>usersList</button>
      </>
    )
  }
}