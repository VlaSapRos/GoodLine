import React from 'react';

export default class VkInit extends React.Component {
  componentDidMount() {
    VK.init({apiId: 7547501});
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
