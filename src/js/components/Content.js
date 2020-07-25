import React from 'react';

export default class Content extends React.Component {
  render() {
    const usersList = this.props.storeRedux.getState().usersList
    console.log(this.props.storeRedux.getState().usersList)
    return(
      <div className='content'>
        <button onClick={() => console.log(this.props.storeRedux.getState().usersList)}>Жми</button>
        <ul>{this.props.storeRedux.getState().usersList}</ul>
      </div>
    )
  }
}