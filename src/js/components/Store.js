import React from 'react';
import Header from './Header.js'
import Content from './Content.js'
import storeRedux from '../redux/storeRedux.js'

export default class Store extends React.Component {
  constructor(props) {
    super(props)
    this.recordResponse = this.recordResponse.bind(this);
    this.state = { // может даже весь state
      usersList : [[]], // скорее всего уберу
      count : 0 // тоже
    }
  }
  recordResponse(value) { // может тоже уберу 
    // this.state.usersList.map( (element,index) => {
    //   if (element.key == )
    // })
    let newUsersList = this.state.usersList.concat(value)
    this.setState({usersList : newUsersList})
  }
  render()
  {
    return(
      <>
      <Header store={storeRedux} state={this.state} recordResponse={this.recordResponse}/>
      <Content store={storeRedux} state={this.state}/>
      </>
    )
  }
}

