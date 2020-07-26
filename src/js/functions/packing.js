import React from 'react';
import ListItem from '../components/ListItems.js'
  let items = r.response.items;
  let newUsersList = items.map(function (currentValue, index) {
    return(
      <ListItem key={currentValue.id}>
        <img src = {currentValue.photo_max}></img>
        <h1>{currentValue.first_name+' '+currentValue.last_name}</h1>
      </ListItem>)
  })
  return (newUsersList)
}
// VK.Api.call('users.get', {user_ids: currentValue.id, fields: 'photo_max,screen_name', count : 10, offset : 0 ,v:"5.52"},(r) => {});
// id,first_name,last_name,is_closed,about,activities,bdate,books,career,city,common_count,connections,contacts,counters,domain,education,followers_count,games,home_town,
// interests,last_seen,military,movies,music,nickname,occupation,online,personal,photo_200_orig,photo_400_orig,(или photo_max_orig),quotes,relatives,relation,schools,
// screen_name,site,status,tv,universities,verified,

// export default function packing (r) {
//   let items = r.response.items;
//   let newUsersList = items.map(function (currentValue, index) {
//     return(
//       <li key={currentValue.id}>
//         <button className='content__user-block' onClick={
//           VK.Api.call('users.get', 
//           {user_ids: currentValue.id,
//           fields: 'id,first_name,last_name,is_closed,about,activities,bdate,books,career,city,common_count,connections,contacts,counters,domain,education,followers_count,games,home_town,interests,last_seen,military,movies,music,nickname,occupation,online,personal,photo_200_orig,photo_400_orig,photo_max_orig,quotes,relatives,relation,schools,screen_name,site,status,tv,universities,verified,',
//           count : 10, offset : 0 ,v:"5.52"
//           },(r) => {console.log(r);})
//         }>
//         <img src = {currentValue.photo_max}></img>
//         <h1>{currentValue.first_name+' '+currentValue.last_name}</h1>
//         </button>
//       </li>)
//   })
//   return (newUsersList)