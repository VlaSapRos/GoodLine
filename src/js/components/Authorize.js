import React from 'react';

function Authorize(props) {
  return(
      <button onClick={() => document.location='https://oauth.vk.com/authorize?client_id=7547501&redirect_uri=http://localhost:8081/&display=popup&response_type=token'}>Авторизация</button>
    )
}

export default Authorize