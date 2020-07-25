import React from 'react';
import ReactDOM, { render } from 'react-dom';
import PeopleSearch from './PeopleSearch.js';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps.js';
import mapDispatchToProps from '../redux/mapDispatchToProps.js';

const  PeopleSearch_w = connect(mapStateToProps("PeopleSearch"), mapDispatchToProps("PeopleSearch"))(PeopleSearch);


export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return(
      <div className='header'>
        <PeopleSearch_w 
          state={this.props.state} 
          recordResponse={this.props.recordResponse}
          recordSearchRequest={this.props.recordSearchRequest} 
          responseProcessing={this.props.responseProcessing}
        />

        {/* <button onClick={() => retrievingAccessToken()}>retrievingAccessToken</button> */}
        {/* <button onClick={() => searchRequest()}>searchRequest</button> */}
        {/* <button onClick={() => console.log(accessToken)}>accessToken</button> */}
        {/* <Authorize></Authorize> */}
        {/* <GetAxios></GetAxios> */}
      </div>
    )    
  }
}
