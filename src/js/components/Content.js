import React from 'react';
import ReactDOM, { render } from 'react-dom';

export default class Content extends React.Component {
  render() {
    const usersList = this.props.state.usersList
    return(
      <div className='content'>
        {usersList}
      </div>
    )
  }
}