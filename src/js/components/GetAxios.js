import React from 'react';
import axios from 'axios';

export default class GetAxios extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    let accessToken = location.href.split('/#access_token=')
    accessToken = accessToken[1].split('&expires_in=')
    accessToken = accessToken[0]
    console.log(accessToken);
    const accessTokenResult = accessToken 
    axios.get(`https://api.vk.com/method/users.search?q='Vasya+Babich'&access_token=${accessTokenResult}&v=5.52`, {
      method: 'GET',
      mode: 'cors',
    })
      .then(res => {
        const people= res.data;
        this.setState({ people});
      })
    // for (let [key, value] of response.headers) {
    //     alert(`${key} = ${value}`);
    // }
    // axios.get(`${axios.defaults.baseURL}/people`)
    //   .then(res => {
    //     const people= res.data;
    //     this.setState({ people});
    //   })
    // axios.get(`${axios.defaults.baseURL}/people`)
    //   .then(res => {
    //     const people= res.data;
    //     this.setState({ people});
    //   })
    // axios.get(`${axios.defaults.baseURL}/people`)
    //   .then(res => {
    //     const people= res.data;
    //     this.setState({ people});
    //   })
  }
 
  render() {
    return (
      <ol>
        { this.state.people.map(person => <li>{person.name}</li>)}
      </ol>
    )
  }
}