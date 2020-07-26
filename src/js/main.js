import React from 'react';
import StoreReact from './components/StoreReact.js'
import VkInit from './components/VkInit.js'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <>
        <VkInit></VkInit>
        <StoreReact/>
      </>
    );
  }
}

export default App
