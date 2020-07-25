import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';

 class Preloader extends React.Component {
  render(){
    if (this.props.state.preloader) {
      return(
          <div className='preloader'>
            <div className="preloader__image_animate"></div>
          </div>
      );}
    else return(null)
}
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(Preloader);