import React from 'react';
import ReactDOM, { render } from 'react-dom';

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.scrolling = this.scrolling.bind(this)
    this.state = {
      scrollTop : 0,
      offSet : 10
    }
  }
  scrolling (e) {
    this.setState({scrollTop : e.target.scrollTop})
    let t = 1;
    let offSet = this.state.offSet
    // if (this.state.scrollTop >= 1732) {
    //   VK.Api.call('users.search', {q: this.props.state.searchRequest, fields: 'photo,screen_name', count : 10, offset : offSet ,v:"5.52"},
    //   (r) => {this.props.responseProcessing(r)});
    //   offset+=10
    //   this.setState({offSet : offSet})
    // }
    // console.log(this.state.offSet);
    // console.log(scrollTop)

  }
  
  render() {
    const usersList = this.props.state.usersList
    window.addEventListener('scroll', function() {
      document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
    });
    return(
      <div onScroll={this.scrolling} className='content'>
        {/* <button onClick={() => console.log(this.state.offSet)}>Жми</button> */}
        <ul>{usersList}</ul>
      </div>
    )
  }
}

// element.scrollHeight - element.scrollTop === element.clientHeight