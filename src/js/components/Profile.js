import React from 'react';
import { connect } from 'react-redux';
import {saveProfileInfo} from '../redux/actionCreator.js'


class Profile extends React.Component {
  componentDidMount() {
    this.extendedQuery(this.props.state.id)
  }

  extendedQuery(id) {
    VK.Api.call('users.get', 
    {user_ids: id,
    fields: 'sex,id,first_name,last_name,is_closed,about,activities,bdate,books,career,city,common_count,connections,contacts,counters,domain,country,education,games,home_town,interests,last_seen,military,movies,music,nickname,occupation,online,personal,photo_200_orig,photo_400_orig,photo_max_orig,quotes,relatives,relation,schools,screen_name,site,status,tv,universities,verified,',
    count : 10, offset : 0 ,v:"5.52"
    },(r) => {
      let info = r.response[0];
      this.props.saveProfileInfo(info);
    })
  }
  
  render() {
    const checkProperty = () => {

    }
    let id = this.props.state.id;
    console.log(this.props.state.profileInfo);
    if (typeof this.props.state.profileInfo !== 'undefined') {
      var photo = this.props.state.profileInfo.photo_max_orig;
      if (typeof this.props.state.profileInfo.first_name !== 'undefined') {
        var fName = this.props.state.profileInfo.first_name;
      } else {var fName = null;}
      if (typeof this.props.state.profileInfo.nickname !== 'undefined') {
        // console.log(this.props.state.profileInfo.nickname);
        var nName = this.props.state.profileInfo.nickname;
      } else {var nName = null;}
      if (typeof this.props.state.profileInfo.last_name !== 'undefined') {
        // console.log(this.props.state.profileInfo.last_name);
        var lName = this.props.state.profileInfo.last_name;
      } else {var lName = null;}
      if (typeof this.props.state.profileInfo.maiden_name !== 'undefined') {
        // console.log(this.props.state.profileInfo.maiden_name);
        var mName = this.props.state.profileInfo.maiden_name;
      } else {var mName = null;}
      if (typeof this.props.state.profileInfo.verified !== 'undefined') {
        // console.log(this.props.state.profileInfo.verified);
        var verif = this.props.state.profileInfo.verified;
      } else {var verif = null;}
      if (typeof this.props.state.profileInfo.online !== 'undefined') {
        // console.log(this.props.state.profileInfo.online);
        var online = this.props.state.profileInfo.online
      } else {var online = null;}
      if (typeof this.props.state.profileInfo.last_seen !== 'undefined') {
        // console.log(this.props.state.profileInfo.last_seen);
        var lastSeen = this.props.state.profileInfo.last_seen
      } else {var lastSeen = null;}
      if (typeof this.props.state.profileInfo.status !== 'undefined') {
        var status = this.props.state.profileInfo.status;
      } else {var status = null;}
      if (typeof this.props.state.profileInfo.bdate !== 'undefined') {
        var bDate = this.props.state.profileInfo.bdate;
      } else {var bDate = null;}
      var gender = this.props.state.profileInfo.sex;
      if (gender == 2) {gender = 'Женский'}
      else if (gender == 1) {gender = 'Мужской'}
      else if (gender == 1) {gender = 'Пол не указан'}
      else {var gender = null;} // 1 или 2 или 0
      if (typeof this.props.state.profileInfo.domain !== 'undefined') {
        // console.log(this.props.state.profileInfo.domain);
        var domain = this.props.state.profileInfo.domain;
      } else {var domain = null;}
      if (typeof this.props.state.profileInfo.screen_name !== 'undefined') {
        // console.log(this.props.state.profileInfo.screen_name);
        var pageName = this.props.state.profileInfo.screen_name;
      } else {var pageName = null;}
      if (typeof this.props.state.profileInfo.contacts !== 'undefined') {
        // console.log(this.props.state.profileInfo.contacts);
        var phoneNumber = this.props.state.profileInfo.contacts;
      } else {var phoneNumber = null;} // это объект
      if (typeof this.props.state.profileInfo.connections !== 'undefined') {
        // console.log(this.props.state.profileInfo.connections);
        var contacts = this.props.state.profileInfo.connections;
      } else {var contacts = null;} // Это объект
      if (typeof this.props.state.profileInfo.site !== 'undefined') {
        // console.log(this.props.state.profileInfo.site);
        var webSite = this.props.state.profileInfo.site;
      } else {var webSite = null;}
      if (typeof this.props.state.profileInfo.counters !== 'undefined') {
        // console.log(this.props.state.profileInfo.counters);
        var count = this.props.state.profileInfo.counters;
      } else {var count = null;} // Это объект
      if (typeof this.props.state.profileInfo.about !== 'undefined') {
        // console.log(this.props.state.profileInfo.about);
        var about = this.props.state.profileInfo.about;
      } else {var about = null;}
      if (typeof this.props.state.profileInfo.country!== 'undefined') {
        // console.log(this.props.state.profileInfo.country.title);
        var country =  this.props.state.profileInfo.country.title;
      } else {var country = null;} // Это объект
      if (typeof this.props.state.profileInfo.city !== 'undefined') {
        // console.log(this.props.state.profileInfo.city.title);
        var city = this.props.state.profileInfo.city.title;
      } else {var city = null;}// Это объект
      if (typeof this.props.state.profileInfo.home_town !== 'undefined') {
        // console.log(this.props.state.profileInfo.home_town);
        var homeTown = this.props.state.profileInfo.home_town;
      } else {var homeTown = null;}
      if (typeof this.props.state.profileInfo.relation !== 'undefined' && this.props.state.profileInfo.relation.length !== 0) {
        // console.log(this.props.state.profileInfo.relation);
        var sp = this.props.state.profileInfo.relation;
      } else {var sp = null;} // цифра от 0 до 8 и это объект
      if (typeof this.props.state.profileInfo.relatives !== 'undefined' && this.props.state.profileInfo.relatives.length !== 0) {
        // console.log(this.props.state.profileInfo.relatives);
        var family = this.props.state.profileInfo.relatives;
      } else {var family = null;} // Это объект
      if (typeof this.props.state.profileInfo.personal !== 'undefined' && this.props.state.profileInfo.personal.length !== 0) {
        // console.log(this.props.state.profileInfo.personal);
        var views = this.props.state.profileInfo.personal;
      } else {var views = null;} // Это объект 
      if (typeof this.props.state.profileInfo.occupation !== 'undefined'  && this.props.state.profileInfo.occupation.length !== 0) {
        // console.log(this.props.state.profileInfo.occupation);
        var work = this.props.state.profileInfo.occupation;
      } else {var work = null;} // Это объект
      if (typeof this.props.state.profileInfo.schools !== 'undefined' && this.props.state.profileInfo.schools.length !== 0) {
        // console.log(this.props.state.profileInfo.schools);
        var school = this.props.state.profileInfo.schools;
      } else {var school = null;} // Это объект
      if (typeof this.props.state.profileInfo.education !== 'undefined' && this.props.state.profileInfo.education.length !== 0) {
        // console.log(this.props.state.profileInfo.education);
        var education = this.props.state.profileInfo.education;
      } else {var education = null;} // Это объект
      if (typeof this.props.state.profileInfo.universities !== 'undefined' && this.props.state.profileInfo.universities.length !== 0) {
        // console.log(this.props.state.profileInfo.universities);
        var universities = this.props.state.profileInfo.universities;
      } else {var universities = null;} // Это объект
      if (typeof this.props.state.profileInfo.military !== 'undefined'  && this.props.state.profileInfo.military.length !== 0) {
        // console.log(this.props.state.profileInfo.military);
        var military = this.props.state.profileInfo.military;
      } else {var military = null;}  // Это объект
      if (typeof this.props.state.profileInfo.career !== 'undefined'  && this.props.state.profileInfo.career.length !== 0 ) {
        // console.log(this.props.state.profileInfo.career);
        var career = this.props.state.profileInfo.career;
      } else {var career = null;}
      if (typeof this.props.state.profileInfo.interests !== 'undefined') {
        // console.log(this.props.state.profileInfo.interests);
        var interests = this.props.state.profileInfo.interests;
      } else {var interests = null;}
      if (typeof this.props.state.profileInfo.quotes !== 'undefined') {
        // console.log(this.props.state.profileInfo.quotes);
        var quotes = this.props.state.profileInfo.quotes
      } else {var quotes = null;}
      if (typeof this.props.state.profileInfo.books !== 'undefined') {
        // console.log(this.props.state.profileInfo.books);
        var books = this.props.state.profileInfo.books;
      } else {var books = null;}
      if (typeof this.props.state.profileInfo.movies !== 'undefined') {
        // console.log(this.props.state.profileInfo.movies);
        var movies = this.props.state.profileInfo.movies;
      } else {var movies = null;}
      if (typeof this.props.state.profileInfo.music !== 'undefined') {
        // console.log(this.props.state.profileInfo.music);
        var music = this.props.state.profileInfo.music;
      } else {var music = null;}
      if (typeof this.props.state.profileInfo.games !== 'undefined') {
        // console.log(this.props.state.profileInfo.games);
        var games = this.props.state.profileInfo.games;
      } else {var games = null;}
      if (typeof this.props.state.profileInfo.tv !== 'undefined') {
        // console.log(this.props.state.profileInfo.tv);
        var tv = this.props.state.profileInfo.tv;
      } else {var tv = null;}
      return(
      <>
      <h1>Это профиль номер {id}</h1>
      <div className="block1">
        <img className='photo' src={photo} vspace="5" hspace="5"/>
        <div className="block1__elm1">
        <h1>{fName+' '+lName}</h1>
          <h3>Статус:<i>{status}</i></h3>
          <h4>День рождения {bDate}</h4>
          <h4>Пол: {gender}</h4>
          <div className="block1__elm2">
          <p>Краткое имя страницы: {pageName}</p>
          <p>Сайт:{webSite}</p>
          {/* phoneNumber 
          contacts */}
          </div>
        </div>
      </div>
      <div className="block2">
        {/* counters
          albums (integer) — количество фотоальбомов;
          videos (integer) — количество видеозаписей;
          audios (integer) — количество аудиозаписей;
          photos (integer) — количество фотографий;
          notes (integer) — количество заметок;
          friends (integer) — количество друзей;
          groups (integer) — количество сообществ;
          online_friends (integer) — количество друзей онлайн;
          mutual_friends (integer) — количество общих друзей;
          user_videos (integer) — количество видеозаписей с пользователем;
          followers (integer) — количество подписчиков;
          pages (integer) — количество объектов в блоке «Интересные страницы» */}
        {about,' ',
        country,' ',
        city,' ',
        homeTown}
        {/* sp
          1 — не женат/не замужем;
          2 — есть друг/есть подруга;
          3 — помолвлен/помолвлена;
          4 — женат/замужем;
          5 — всё сложно;
          6 — в активном поиске;
          7 — влюблён/влюблена;
          8 — в гражданском браке;
          0 — не указано.
          relation_partner
            id
            name?
        relatives
          id (integer) — идентификатор пользователя;
          name (string) — имя родственника (если родственник не является пользователем ВКонтакте, то предыдущее значение id возвращено не будет);
          type (string) — тип родственной связи. Возможные значения:
            child — сын/дочь;
            sibling — брат/сестра;
            parent — отец/мать;
            grandparent — дедушка/бабушка;
            grandchild — внук/внучка.
        personal
          political (integer) — политические предпочтения. Возможные значения:
            1 — коммунистические;
            2 — социалистические;
            3 — умеренные;
            4 — либеральные;
            5 — консервативные;
            6 — монархические;
            7 — ультраконсервативные;
            8 — индифферентные;
            9 — либертарианские.
          langs (array) — языки.
          religion (string) — мировоззрение.
          inspired_by (string) — источники вдохновения.
          people_main (integer) — главное в людях. Возможные значения:
            1 — ум и креативность;
            2 — доброта и честность;
            3 — красота и здоровье;
            4 — власть и богатство;
            5 — смелость и упорство;
            6 — юмор и жизнелюбие.
          life_main (integer) — главное в жизни. Возможные значения:
            1 — семья и дети;
            2 — карьера и деньги;
            3 — развлечения и отдых;
            4 — наука и исследования;
            5 — совершенствование мира;
            6 — саморазвитие;
            7 — красота и искусство;
            8 — слава и влияние;
          smoking (integer) — отношение к курению. Возможные значения:
            1 — резко негативное;
            2 — негативное;
            3 — компромиссное;
            4 — нейтральное;
            5 — положительное.
          alcohol (integer) — отношение к алкоголю. Возможные значения:
            1 — резко негативное;
            2 — негативное;
            3 — компромиссное;
            4 — нейтральное;
            5 — положительное.
        occupation
          type (string) — тип. Возможные значения:
            work — работа;
            school — среднее образование;
            university — высшее образование.
          name (string) — название школы, вуза или места работы;
        schools
          name (string) — наименование школы
          year_from (integer) — год начала обучения;
          year_to (integer) — год окончания обучения;
          year_graduated (integer) — год выпуска;
          class (string) — буква класса;
          speciality (string) — специализация;
          type_str (string) — название типа. Возможные значения для пар type-typeStr:
            0 — "школа";
            1 — "гимназия";
            2 —"лицей";
            3 — "школа-интернат";
            4 — "школа вечерняя";
            5 — "школа музыкальная";
            6 — "школа спортивная";
            7 — "школа художественная";
            8 — "колледж";
            9 — "профессиональный лицей";
            10 — "техникум";
            11 — "ПТУ";
            12 — "училище";
            13 — "школа искусств".
        education
          university_name (string) — название университета;
          faculty_name (string)— название факультета; 
          graduation (integer) — год окончания.
        universities
          name (string) — наименование университета;
          faculty_name (string) — наименование факультета;
          chair_name (string) — наименование кафедры;
          graduation (integer) — год окончания обучения;
          education_form (string) — форма обучения;
          education_status (string) — статус (например, «Выпускник (специалист)»).
        military
          unit (string) — номер части;
          from (integer) — год начала службы;
          until (integer) — год окончания службы. */}
        {career,' ',
        interests,' ',
        quotes,' ',
        books,' ',
        movies,' ',
        music,' ',
        games,' ',
        tv}
      </div>
      <div className="block3">
      </div>
      </>
      )
    } else { return (null)}

  }
}

const mapStateToProps = (state) => ({state})

const mapDispatchToProps = (dispatch) => ({
  saveProfileInfo: (params) => dispatch(saveProfileInfo(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);