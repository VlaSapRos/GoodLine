import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { connect } from 'react-redux';
import {listCreation, searchRequest } from '../redux/actionCreator.js'
import packing from '../functions/packing.js'

class PeopleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.state = {
      inputValue : '',
    };
  }
  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(this.handleChange.bind(this))
  // }
  startSearch (value) {
    let searchRequest = value.replace(' ','+');
    this.props.searchRequest(searchRequest)
    VK.Api.call('users.search', {q: searchRequest, fields: 'photo_max,screen_name', count : 10, offset : 0 ,v:"5.52"},(r) => {this.props.listCreation(packing(r));console.log(r)});
    // this.props.recordSearchRequest(searchRequest)
    
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
const mapStateToProps = (state) => ({state})

const mapDispatchToProps = (dispatch) => ({
  listCreation: (params) => dispatch(listCreation(params)),
  searchRequest: (params) => dispatch(searchRequest(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PeopleSearch);

//(r.response)