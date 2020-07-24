import {retrievingAccessToken,accessToken} from '../functions/retrievingAccessToken.js';

function callbackFunc(result) {
  alert(result.response[0].first_name)
}

function searchRequest() {
  // console.log(`https://api.vk.com/method/users.search?q="Vasya+Babich"&access_token=${accessToken}&v=5.120`)
  // fetch(`https://api.vk.com/method/users.search?q="Vasya+Babich"&access_token=${accessToken}&v=5.120`,{
  //   method: 'GET',
  // })
  //   .then(r => r.json())
  //   .then(r => console.log(r))
  
  var script = document.createElement('SCRIPT');
  script.src = `https://api.vk.com/method/users.search?q='Vasya+Babich'&access_token=${accessToken}&v=5.120&callback=callbackFunc`;
  function callbackFunc(response) {alert(response)}
  document.getElementsByTagName("head")[0].appendChild(script);
}

export default searchRequest