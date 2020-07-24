import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from './components/Header.js'
import VkInit from './components/VkInit.js'
import Content from './components/Content.js'
import Store from './components/Store.js'


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <>
      <VkInit/>
      <Store/>
      </>
    );
  }
}
export default App