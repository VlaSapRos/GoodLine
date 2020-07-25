import React from 'react';
import Header from './Header.js'
import Content from './Content.js'
import reduxStore from '../redux/reduxStore.js'

export default class Store extends React.Component {
  constructor(props) {
    super(props)
    this.recordResponse = this.recordResponse.bind(this);
    this.recordSearchRequest = this.recordSearchRequest.bind(this);
    this.responseProcessing = this.responseProcessing.bind(this);
    this.state = {
      searchRequest : '',
      usersList : [[]] ,
      count : 0
    }
  }
  recordResponse(value) {
    let newUsersList = this.state.usersList.concat(value)
    this.setState({usersList : newUsersList})
  }
  recordSearchRequest(value) {
    this.setState({searchRequest : value})
  }
  responseProcessing(r){
    let response = r.response.items;
    let newUsersList = response.map(function packing(currentValue, index) {
      return(
      <li className='content__user-block' key={index}>
        <img src = {currentValue.photo_max}></img>
        <h1>{currentValue.first_name+' '+currentValue.last_name}</h1>
      </li>)
    });
    console.log(newUsersList);
    this.recordResponse(newUsersList);
  }
  render()
  {
    return(
      <>
        <Header reduxStore={reduxStore} state={this.state} recordResponse={this.recordResponse} recordSearchRequest={this.recordSearchRequest} responseProcessing={this.responseProcessing}/>
        <Content state={this.state} responseProcessing={this.responseProcessing} />
        <button onClick={() => console.log(this.state.usersList)}>usersList</button>
      </>
    )
  }
}