import React from 'react';
import VkInit from './components/VkInit.js'
import Store from './components/Store.js'


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <>
      <VkInit/>
      <Store storeRedux={this.props.storeRedux} />
      </>
    );
  }
}
export default App