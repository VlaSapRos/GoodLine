var accessToken=null;

function retrievingAccessToken() {
  accessToken = location.href.split('/#access_token=')
  accessToken = accessToken[1].split('&expires_in=')
  accessToken = accessToken[0]
  console.log(accessToken);
}

export {accessToken, retrievingAccessToken};
// export default retrievingAccessToken
