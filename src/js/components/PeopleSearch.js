import React from 'react';
import ReactDOM, { render } from 'react-dom';

export default class PeopleSearch extends React.Component {
  startSearch (value) {
    let searchRequest = value.replace(' ','+')
    console.log(value)
    VK.Api.call('users.search', {q: searchRequest, fields: 'photo,screen_name' ,v:"5.73"}, function(r) {console.log(r.response);});
  }
  render(){
    // let startSearch = PeopleSearch.startSearch(document.getElementById('input').value)
    console.log(document.getElementById('submit'))
    return (
      <div className='peopleSearch'>
        <input type='text' className='peopleSearch__entry-field' id='input'></input>
        <button className='peopleSearch__button' id='submit' onClick={() => startSearch}>Найти!</button>
      </div>
    )
  }
}
