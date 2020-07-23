import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Authorize from './Authorize.js';
import {retrievingAccessToken,accessToken} from '../functions/retrievingAccessToken.js';
// import accessToken from '../functions/retrievingAccessToken.js';
import searchRequest from '../functions/searchRequest.js';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return(
      <div>
        <button onClick={() => retrievingAccessToken()}>retrievingAccessToken</button> <br/>
        <button onClick={() => searchRequest()}>searchRequest</button> <br/>
        <button onClick={() => console.log(accessToken)}>accessToken</button> <br/>
        <Authorize></Authorize>
      </div>
    )    
  }
}

export default Header;