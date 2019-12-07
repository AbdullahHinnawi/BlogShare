import store from './store';
import axios from 'axios';
import jwt from 'jsonwebtoken';


// functions for authentication
export function isLoggedIn(){
  const token = localStorage.getItem('token');
  return token != null;

}

export function login(user){
  return http().post('/auth', user).then(res =>{
    if(res){
      window.console.log('login res: ');
      window.console.log(res);

      window.console.log('res.data.token: ');
      window.console.log(res.data.token);


      setToken(res.data.token);
      window.console.log('333333333');
    }
  });
}
export function logout(){
  localStorage.clear();
  store.dispatch('authenticate');
}




// to save the token to the browsers localstorage which
// will keep the session active
function setToken(token){
  localStorage.setItem('token', token);
  store.dispatch('authenticate');
  window.console.log('222222222222');
}

export function getToken(){
 // window.console.log('getToken method authService.js 45');
 // window.console.log(localStorage.getItem('token'));
  return localStorage.getItem('token');

}

export function getUsername(){
  const token = decodeToken();
  if(!token){
    return null
  }
  return token.user.username;
}

export function getUserId(){
  const token = decodeToken();
  if(!token){
    return null
  }
  return token.user.id;
}

export function http(){
  // create a new request
  return axios.create({
    baseURL: store.state.apiUrl,
    headers:{
      Authorization: getToken(),
    }
  });
}


export function registerUser(user){

  return http().post('/register', user);

}

function decodeToken(){
  const token = getToken();
  if(!token){
    return null;
  }
  return jwt.decode(token);
}