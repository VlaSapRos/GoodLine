import React from 'react';
import {LIST_CREATION} from '../store/action.js'
import { listCreation } from '../store/actionCreator.js'

export default class PeopleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.responseProcessing = this.responseProcessing.bind(this);
    this.state = {
      inputValue : '',
    };
  }
  startSearch (value) {
    let searchRequest = value.replace(' ','+');
    VK.Api.call('users.search', {q: searchRequest, fields: 'photo,screen_name', count : 10, offset : 0 ,v:"5.120"}, (r) => {this.responseProcessing(r);console.log(r.response)});
    
  }
  responseProcessing(r){
    let response = r.response.items;
    let usersList = response.map(function packing(currentValue, index) {
      return(
      <li className='user-block' key={index}>
        <img src = {currentValue.photo}></img>
        <h1>{currentValue.first_name+' '+currentValue.last_name}</h1>
      </li>)
    });
    this.props.storeRedux.dispatch(listCreation(usersList));
    // this.props.recordResponse(usersList)
    console.log(usersList)
    console.log(this.props.storeRedux.getState())
  }
  handleChange(e) {
    this.setState({inputValue : e.target.value})
  }
  render(){
    const inputValue = this.state.inputValue;
    return (
      <div className='peopleSearch'>
        <input type='text' onChange={this.handleChange} className='peopleSearch__entry-field' id='input'/>
        <button className='peopleSearch__button' id='submit' onClick={() => this.startSearch(inputValue)}>Найти!</button>
      </div>
    )
  }
}
