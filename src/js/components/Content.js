import React from 'react';
import ReactDOM, { render } from 'react-dom';

export default class Content extends React.Component {
  render() {
    const usersList = this.props.state.usersList
    console.log(usersList);
    return(
      <div className='content'>
        <ul>{usersList}</ul>
      </div>
    )
  }
}