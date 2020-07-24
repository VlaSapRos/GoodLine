import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from './components/Header.js'
import VkInit from './components/VkInit.js'
import Content from './components/Content.js'


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <VkInit></VkInit>
        <Header></Header>
        <Content></Content>
      </div>
    );
  }
}

export default App