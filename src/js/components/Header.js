import React from 'react';
import PeopleSearch from './PeopleSearch.js';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return(
      <div className='header'>
        <PeopleSearch storeRedux={this.props.storeRedux} state={this.props.state} recordResponse={this.props.recordResponse}/>
        {/* <button onClick={() => retrievingAccessToken()}>retrievingAccessToken</button> */}
        {/* <button onClick={() => searchRequest()}>searchRequest</button> */}
        {/* <button onClick={() => console.log(accessToken)}>accessToken</button> */}
      </div>
    )    
  }
}
