import React from 'react';

function noName() {
  var script = document.createElement('SCRIPT');
  script.src = 'https://oauth.vk.com/access_token?client_id=7547501&client_secret=7GPJ0SLwheN6CE48TwoM&v=5.120&grant_type=client_credentials';
  document.getElementsByTagName("section")[0].appendChild(script);
}

function Authorize(props) {
  return(
    <div>
    <button onClick={() => document.location='https://oauth.vk.com/authorize?client_id=7547501&redirect_uri=http://localhost:8081/&display=popup&response_type=token'}>Авторизация</button>
    <button onClick={() => noName()}>Client Credentials Flow</button>
    </div>
  )
}

export default Authorize