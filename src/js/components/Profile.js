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
        var nName = this.props.state.profileInfo.nickname;
      } else {var nName = null;}
      if (typeof this.props.state.profileInfo.last_name !== 'undefined') {
        var lName = this.props.state.profileInfo.last_name;
      } else {var lName = null;}
      if (typeof this.props.state.profileInfo.online !== 'undefined') {
        var online = this.props.state.profileInfo.online
        if (online) {online='да'}
        else {online='нет'}
      } else {var online = null;}
      if (typeof this.props.state.profileInfo.last_seen !== 'undefined') {
        var lastSeen = this.props.state.profileInfo.last_seen
      } else {var lastSeen = null;}
      if (typeof this.props.state.profileInfo.status !== 'undefined') {
        var status = this.props.state.profileInfo.status;
      } else {var status = null;}
      if (typeof this.props.state.profileInfo.bdate !== 'undefined') {
        var bDate = this.props.state.profileInfo.bdate;
      } else {var bDate = null;}
      var gender = this.props.state.profileInfo.sex;
      if (gender == 1) {gender = 'Женский'}
      else if (gender == 2) {gender = 'Мужской'}
      else if (gender == 0) {gender = 'Пол не указан'}
      else {var gender = null;}
      if (typeof this.props.state.profileInfo.domain !== 'undefined') {
        var domain = this.props.state.profileInfo.domain;
      } else {var domain = null;}
      if (typeof this.props.state.profileInfo.screen_name !== 'undefined') {
        var pageName = this.props.state.profileInfo.screen_name;
      } else {var pageName = null;}
      if (typeof this.props.state.profileInfo.contacts !== 'undefined') {
        var phoneNumber = this.props.state.profileInfo.contacts;
      } else {var phoneNumber = null;}
      if (typeof this.props.state.profileInfo.connections !== 'undefined') {
        var contacts = this.props.state.profileInfo.connections;
      } else {var contacts = null;}
      if (typeof this.props.state.profileInfo.site !== 'undefined') {
        var webSite = this.props.state.profileInfo.site;
      } else {var webSite = null;}
        var count = this.props.state.profileInfo.counters;
      if (typeof this.props.state.profileInfo.about !== 'undefined') {
        var about = this.props.state.profileInfo.about;
      } else {var about = null;}
      if (typeof this.props.state.profileInfo.country !== 'undefined') {
        var country =  this.props.state.profileInfo.country.title;
      } else {var country = null;}
      if (typeof this.props.state.profileInfo.city !== 'undefined') {
        var city = this.props.state.profileInfo.city.title;
      } else {var city = null;}
      if (typeof this.props.state.profileInfo.home_town !== 'undefined') {
        var homeTown = this.props.state.profileInfo.home_town;
      } else {var homeTown = null;}
      if (typeof this.props.state.profileInfo.relation !== 'undefined' && this.props.state.profileInfo.relation.length !== 0) {
        var sp = this.props.state.profileInfo.relation;
        switch(sp){
          case 0: sp = 'Не указанно'; break
          case 1: {if(gender == 2) {sp = 'Не женат'; break}
                  else {sp = 'Не замужем'; break}}
          case 2: {if(gender == 2) {sp = 'Есть подруга'; break}
                  else {sp = 'Есть друг'; break}}
          case 3: {if(gender == 2) {sp = 'Помолвлен'; break}
                  else {sp = 'Помолвлена'; break}}
          case 4: {if(gender == 2) {sp = 'Женат'; break}
                  else {sp = 'Замужем'; break}}
          case 5: {sp = 'Всё сложно'; break}
          case 6: {sp = 'В активном поиске'; break}
          case 7: {if(gender == 2) {sp = 'Влюблён'; break}
                  else {sp = 'Влюблена'; break}}
          case 8: {sp = 'В гражданском браке'; break}
        }
      } else {var sp = null;}
      if (typeof this.props.state.profileInfo.personal !== 'undefined' && this.props.state.profileInfo.personal.length !== 0) {
        console.log(this.props.state.profileInfo.personal);
        var views = this.props.state.profileInfo.personal;
        var political, people_main, life_main, smoking, alcohol

        switch(views.political) {
          case 1 : political = 'коммунистические'; break;
          case 2 : political = 'социалистические'; break;
          case 3 : political = 'умеренные'; break;
          case 4 : political = 'либеральные'; break;
          case 5 : political = 'консервативные'; break;
          case 6 : political = 'монархические'; break;
          case 7 : political = 'ультраконсервативные'; break;
          case 8 : political = 'индифферентные'; break;
          case 9 : political = 'либертарианские'; break;
        }
        switch(views.people_main) {
          case 1 : people_main = 'ум и креативность'; break;
          case 2 : people_main = 'доброта и честность'; break;
          case 3 : people_main = 'красота и здоровье'; break;
          case 4 : people_main = 'власть и богатство'; break;
          case 5 : people_main = 'смелость и упорство'; break;
          case 6 : people_main = 'юмор и жизнелюбие'; break;
        }       
        switch(views.life_main) {
          case 1 : life_main = 'семья и дети'; break;
          case 2 : life_main = 'карьера и деньги'; break;
          case 3 : life_main = 'развлечения и отдых'; break;
          case 4 : life_main = 'наука и исследования'; break;
          case 5 : life_main = 'совершенствование мира'; break;
          case 6 : life_main = 'саморазвитие'; break;
          case 7 : life_main = 'красота и искусство'; break;
          case 8 : life_main = 'слава и влияние'; break;
        }  
        switch(views.smoking) {
          case 1 : smoking = 'резко негативное'; break;
          case 2 : smoking = 'негативное'; break;
          case 3 : smoking = 'компромиссное'; break;
          case 4 : smoking = 'нейтральное'; break;
          case 5 : smoking = 'положительное'; break;
        }        
        switch(views.alcohol) {
          case 1 : alcohol = 'резко негативное'; break;
          case 2 : alcohol = 'негативное'; break;
          case 3 : alcohol = 'компромиссное'; break;
          case 4 : alcohol = 'нейтральное'; break;
          case 5 : alcohol = 'положительное'; break;
        }
        var langs = ''
        if (typeof views.langs !== 'undefined') {
          langs = views.langs.map((currentItem)=>{
            langs=' '+currentItem;
            return(langs)
          })
        }
      } else {var views = null;}
      if (typeof this.props.state.profileInfo.occupation !== 'undefined'  && this.props.state.profileInfo.occupation.length !== 0) {
        console.log(this.props.state.profileInfo.occupation);
        var work = this.props.state.profileInfo.occupation;
        var type;
        var nameWork = '';
        switch(work.type) {
          case 'work' : type = 'Работаю'; break;
          case 'school' : type = 'Учусь в школе'; break;
          case 'university' : type = 'Учусь в ВУЗе'; break;
        }
        if(typeof work.name !== 'undefined'){nameWork = work.name}
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
        var interests = this.props.state.profileInfo.interests;
      } else {var interests = null;}
      if (typeof this.props.state.profileInfo.quotes !== 'undefined') {
        var quotes = this.props.state.profileInfo.quotes
      } else {var quotes = null;}
      if (typeof this.props.state.profileInfo.books !== 'undefined') {
        var books = this.props.state.profileInfo.books;
      } else {var books = null;}
      if (typeof this.props.state.profileInfo.movies !== 'undefined') {
        var movies = this.props.state.profileInfo.movies;
      } else {var movies = null;}
      if (typeof this.props.state.profileInfo.music !== 'undefined') {
        var music = this.props.state.profileInfo.music;
      } else {var music = null;}
      if (typeof this.props.state.profileInfo.games !== 'undefined') {
        var games = this.props.state.profileInfo.games;
      } else {var games = null;}
      if (typeof this.props.state.profileInfo.tv !== 'undefined') {
        var tv = this.props.state.profileInfo.tv;
      } else {var tv = null;}
      return(
      <>
      <h1>Это профиль номер {id}</h1>
      <div className="block1">
        <img className='photo' src={photo} vspace="5" hspace="5"/>
        <div className="block1__elm1">
        <h1>{fName+' '+nName+' '+lName}</h1>
          <h3>Статус:<i>{status}</i></h3>
          <h4>Онлайн:<i>{online}</i></h4>
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
        <div className='block2__caunters' >
          <div className='block2__caunter'>Количество друзей{' '+count.friends}</div>
          <div className='block2__caunter'>Количество друзей онлайн{' '+count.online_friends}</div>
          <div className='block2__caunter'>Количество общих друзей{' '+count.mutual_friends}</div>
          <div className='block2__caunter'>Количество подписчиков{' '+count.followers}</div>
          <div className='block2__caunter'>Количество альбомов{' '+count.albums}</div>
          <div className='block2__caunter'>Количество фотографий{' '+count.photos}</div>
          <div className='block2__caunter'>Количество видео{' '+count.videos}</div>
          <div className='block2__caunter'>Количество аудиозаписей{' '+count.audios}</div>
          <div className='block2__caunter'>Количество документов{' '+count.gifts}</div>
          <div className='block2__caunter'>Количество заметок{' '+count.notes}</div>
          <div className='block2__caunter'>Количество интересных страниц{' '+count.pages}</div>
        </div>
        <p>Страна:{country}</p>
        <p>Город:{city}</p>
        <p>Родной город:{homeTown}</p>
        <p>Семейное положение:{sp}</p>
        <p>Обо мне:{about}</p>
        <h4>Взгляды:</h4>
        <ul>
          <li>Политические:{political}</li>
          <li>Главное в людях:{people_main}</li>
          <li>Главное в жизни:{life_main}</li>
          <li>Отношение к курению:{smoking}</li>
          <li>Отношение к алкоголю:{alcohol}</li>
        </ul>
        <p>Языки:{langs}</p>
        <p>Занятость:{type}</p>
        <p>Место занятости:{nameWork}</p>
        {/*
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
        {/* <p>Карьера:{career}</p> */}
        <p>Интересы:{interests}</p>
        <p>Любимые цитаты:{quotes}</p>
        <p>Любимые книги:{books}</p>
        <p>Любимые фильмы:{movies}</p>
        <p>Любимая музыка:{music}</p>
        <p>Любимые телефошу:{tv}</p>
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