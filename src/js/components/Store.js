import React from 'react';
import Header from './Header.js'
import Content from './Content.js'
import { connect } from 'react-redux';
import { preloaderBoolean, downloadFinished, countOffset, listCreation } from '../redux/actionCreator.js';


class StoreReact extends React.Component {
  constructor(props) {
    super(props)
    // this.recordResponse = this.recordResponse.bind(this);
    // this.recordSearchRequest = this.recordSearchRequest.bind(this);
    // this.responseProcessing = this.responseProcessing.bind(this);

  }
  recordResponse(value) {
    let newUsersList = this.state.usersList.concat(value)
    this.setState({usersList : newUsersList})
  }
  recordSearchRequest(value) {
    this.setState({searchRequest : value})
  }
  responseProcessing(r){
    
    this.props.downloadFinished(newUsersList);
  }
  render()
  {
    return(
      <>
        <Header  recordResponse={this.recordResponse} recordSearchRequest={this.recordSearchRequest} responseProcessing={this.responseProcessing}/>
        <Content />
        <button onClick={() => console.log(this.props.usersList)}>usersList</button>
      </>
    )
  }
}

const mapStateToProps = (state) => ({state})

const mapDispatchToProps = (dispatch) => ({
  listCreation: (params) => dispatch(listCreation(params)),
  countOffset: (params) => dispatch(countOffset(params)),
  downloadFinished: (params) => dispatch(downloadFinished(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StoreReact);

//responseProcessing={this.responseProcessing} 