import React from 'react';
import PeopleSearch from './PeopleSearch.js';
import { connect } from 'react-redux';
import { changePage } from '../redux/actionCreator.js';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    if(this.props.state.page == 'SEARCH'){
      return(
        <div className='header'>
          <PeopleSearch/>
        </div>
      )    
    }
    else if (this.props.state.page == 'PROFILE') {
      return(
        <div className='header'>
          <PeopleSearch/>
          <button onClick={()=>{ this.props.changePage('SEARCH') }}>Назад</button>
        </div>
      )    
    }
    else(
      <h1>Ошибка</h1>
    )
  }
}

const mapStateToProps = (state) => ({state})

const mapDispatchToProps = (dispatch) => ({

  changePage: (params) => dispatch(changePage(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);