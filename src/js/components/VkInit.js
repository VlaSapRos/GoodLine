import React from 'react';
import ReactDOM, { render } from 'react-dom';

export default class VkInit extends React.Component {
  componentDidMount() {
    VK.init({apiId: 7547501});
    // VK.Auth.login((res) => console.log(res));
    VK.Api.call('users.search', {q: "Владислав", fields: 'photo,screen_name' ,v:"5.73"}, function(r) {console.log(r.response);});
  }
  render(){
    return(
      <>
      <div id="vk_api_transport"></div>
      <a href='http://localhost:8081/'>Назад</a>
      <button onClick= {() => VK.Auth.login((res) => console.log(res))}>VK</button>
      </>
    )
  }
}
