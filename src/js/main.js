import React from 'react';
import Store from './components/Store.js'
import VkInit from './components/VkInit.js'

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
