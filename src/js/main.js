import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from './components/Header.js'


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <h1>Hello world!</h1>
        <Header></Header>
      </div>
    );
  }
}

export default App