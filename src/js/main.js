import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Store from './components/Store.js'
import VkInit from './components/VkInit.js'


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <VkInit></VkInit>
        <Store></Store>
      </div>
    );
  }
}

export default App