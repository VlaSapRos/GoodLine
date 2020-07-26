import React from 'react';
import ReactDOM, { render } from 'react-dom';

export default class VkInit extends React.Component {
  componentDidMount() {
    VK.init({apiId: 7547501});
  }
  render(){
    return(
      <div id="vk_api_transport"></div>
    )
  }
}
