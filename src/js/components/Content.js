import React from 'react';
import { connect } from 'react-redux';
import { preloaderBoolean, countOffset, targetTransfer, downloadFinished, saveScroll } from '../redux/actionCreator.js';
import Preloader from './Preloader.js';
import ListItems from './ListItems.js';
import Profile from './Profile.js';

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.elementDiv = React.createRef()
    this.scrolling = this.scrolling.bind(this)
    this.state = {
      forReRender : true,
      offSet : 10
    }
  }

  componentDidMount(){
    this.props.targetTransfer(this.elementDiv.current)
    console.log(1);
  }
  
  scrolling (e) {
    this.props.saveScroll(e.target.scrollTop)
    let offSet = this.props.state.offset
    if (e.target.scrollTop >= (e.target.scrollHeight-e.target.clientHeight-20) && !this.props.state.preloader) {
      this.props.preloaderBoolean(true)
      VK.Api.call('users.search', {q: this.props.state.searchRequest, fields: 'photo_max,screen_name', count : 10, offset : offSet ,v:"5.52"},
      (r) => {
        if(new Boolean(r)) {
          let items = r.response.items 
          this.props.downloadFinished(items)
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
    if (this.props.state.page == 'SEARCH'){
      return(
        <div ref={this.elementDiv} onScroll={this.scrolling} className='content'>
          <ListItems />
          <Preloader />
        </div>
      )
    }
    else if (this.props.state.page == 'PROFILE'){
      return(
        <div className='content'>
          <Profile/>
        </div>
      )
    }
    else {
      return(
        <h1>Ошибка (this.props.state.page !== 'PROFILE' || 'SEARCH'</h1>
      )
    } 
  }
}


const mapStateToProps = (state) => ({state})

const mapDispatchToProps = (dispatch) => ({
  countOffset: (params) => dispatch(countOffset(params)),
  saveScroll: (params) => dispatch(saveScroll(params)),
  preloaderBoolean: (params) => dispatch(preloaderBoolean(params)),
  targetTransfer: (params) => dispatch(targetTransfer(params)),
  downloadFinished: (params) => dispatch(downloadFinished(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Content);