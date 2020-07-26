import React from 'react';
import Header from './Header.js'
import Content from './Content.js'
import { connect } from 'react-redux';


class StoreReact extends React.Component {
  constructor(props) {
    super(props)
  }
  render()
  {
    return(
      <>
        <Header />
        <Content />
      </>
    )
  }
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(StoreReact);
