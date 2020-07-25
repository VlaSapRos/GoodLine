import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { preloaderBoolean, downloadFinished, countOffset, listCreation } from '../redux/actionCreator.js';
import packing from '../functions/packing.js'
import Preloader from './Preloader.js';

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.scrolling = this.scrolling.bind(this)
    this.state = {
      scrollTop : 0,
      offSet : 10
    }
  }
  scrolling (e) {
    // console.log(this.props);
    this.setState({scrollTop : e.target.scrollTop})
    let t = 1;
    let offSet = this.props.state.offset
    if (e.target.scrollTop >= (e.target.scrollHeight-e.target.clientHeight-20) && !this.props.state.preloader) {
      this.props.preloaderBoolean(true)
      VK.Api.call('users.search', {q: this.props.state.searchRequest, fields: 'photo_max,screen_name', count : 10, offset : offSet ,v:"5.52"},
      (r) => {
        if(new Boolean(r)) {
          this.props.downloadFinished(packing(r));
          this.props.countOffset(offSet+=10);
          this.props.preloaderBoolean(false);
        };
      });
      this.props.countOffset(20)
    }

  }
  
  render() {
    const usersList = this.props.state.usersList
    window.addEventListener('scroll', function() {
      document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
    });
    return(
      <div onScroll={this.scrolling} className='content'>
        {/* <button onClick={() => console.log(this.props.preloaderBoolean(true))}>Жми</button> */}
        <ul>{usersList}</ul>
        <Preloader />
      </div>
    )
  }
}


const mapStateToProps = (state) => ({state})

const mapDispatchToProps = (dispatch) => ({
  countOffset: (params) => dispatch(countOffset(params)),
  downloadFinished: (params) => dispatch(downloadFinished(params)),
  preloaderBoolean: (params) => dispatch(preloaderBoolean(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Content);