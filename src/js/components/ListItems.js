import React from 'react';
import { connect } from 'react-redux';
import { changePage, saveId } from '../redux/actionCreator.js';

class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    let goToPage = (id) => {
      this.props.changePage('PROFILE')
      this.props.saveId(id)
      console.log(this.props.state.page)
    }
    let items = this.props.state.usersList;
    let newUsersList = items.map(function (currentValue, index) {
      return (
        <li className='content__user-block' onClick={() => {goToPage(currentValue.id)} } key={currentValue.id}>
          <img src = {currentValue.photo_max}></img>
          <h1>{currentValue.first_name+' '+currentValue.last_name}</h1>
        </li>
      )})
    return(
      <ul>
        {newUsersList}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({state})

const mapDispatchToProps = (dispatch) => ({
  changePage: (params) => dispatch(changePage(params)),
  saveId: (params) => dispatch(saveId(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
