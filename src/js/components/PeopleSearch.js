import React from 'react';
import ReactDOM, { render } from 'react-dom';

export default class PeopleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.state = {
      inputValue : '',
    };
  }
  startSearch (value) {
    let searchRequest = value.replace(' ','+');
    VK.Api.call('users.search', {q: searchRequest, fields: 'photo_max,screen_name', count : 10, offset : 0 ,v:"5.52"},
      (r) => {this.props.responseProcessing(r);console.log(r.response)});
    this.props.recordSearchRequest(searchRequest)
  }
  handleChange (e) {
    this.setState({inputValue : e.target.value})
  }
  render () {
    const inputValue = this.state.inputValue;
    return (
      <div className='peopleSearch'>
        <input type='text' onChange={this.handleChange} className='peopleSearch__entry-field' id='input'/>
        <button className='peopleSearch__button' id='submit' onClick={() => this.startSearch(inputValue)}>Найти!</button>
      </div>
    )
  }
}
