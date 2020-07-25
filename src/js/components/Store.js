import React from 'react';
import Header from './Header.js'
import Content from './Content.js'
import reduxStore from '../redux/reduxStore.js'
import { connect } from 'react-redux';
// import mapStateToProps from '../redux/mapStateToProps.js';
// import mapDispatchToProps from '../redux/mapDispatchToProps.js';
import { listCreation } from '../redux/actionCreator.js';

// const  Content_w = connect(mapStateToProps("Content"), mapDispatchToProps("Content"))(Content);

class Store extends React.Component {
  constructor(props) {
    super(props)
    this.recordResponse = this.recordResponse.bind(this);
    this.recordSearchRequest = this.recordSearchRequest.bind(this);
    this.responseProcessing = this.responseProcessing.bind(this);
    this.state = {
      searchRequest : '',
      usersList : [] ,
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
    this.props.listCreation(newUsersList);
    // console.log(this.props.dispatch);
    // console.log(newUsersList);
    // console.log(this.props);
    this.recordResponse(newUsersList);
  }
  render()
  {
    console.log(this.props);
    return(
      <>
        <Header reduxStore={reduxStore} state={this.state} recordResponse={this.recordResponse} recordSearchRequest={this.recordSearchRequest} responseProcessing={this.responseProcessing}/>
        <Content state={this.state} responseProcessing={this.responseProcessing} />
        <button onClick={() => console.log(this.props.usersList)}>usersList</button>
      </>
    )
  }
}

const mapStateToProps = (state) => ({state})

const mapDispatchToProps = (dispatch) => ({
  listCreation: (params) => dispatch(listCreation(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Store);
//this.props.listCreation(r)