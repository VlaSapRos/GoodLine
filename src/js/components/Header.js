import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Authorize from './Authorize.js';
import {retrievingAccessToken,accessToken} from '../functions/retrievingAccessToken.js';
// import accessToken from '../functions/retrievingAccessToken.js';
import PeopleSearch from './PeopleSearch.js';
import GetAxios from './GetAxios.js'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return(
      <div className='header'>
        <PeopleSearch></PeopleSearch>
        {/* <button onClick={() => retrievingAccessToken()}>retrievingAccessToken</button> */}
        {/* <button onClick={() => searchRequest()}>searchRequest</button> */}
        {/* <button onClick={() => console.log(accessToken)}>accessToken</button> */}
        {/* <Authorize></Authorize> */}
        {/* <GetAxios></GetAxios> */}
      </div>
    )    
  }
}
