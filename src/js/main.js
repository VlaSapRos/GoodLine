import React from 'react';
import Store from './components/Store.js'
import VkInit from './components/VkInit.js'
import { connect } from 'react-redux';
import mapStateToProps from './redux/mapStateToProps.js';
import mapDispatchToProps from './redux/mapDispatchToProps.js';

// ReactDOM.render(COMPONENT_1_W, document.getElementById('root'));


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <>
        <VkInit></VkInit>
        <Store/>
      </>
    );
  }
}

export default App
