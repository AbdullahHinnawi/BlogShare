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
      window.console.log('login res: ', res);
      window.console.log('res.data.token: ', res.data.token);

      setToken(res.data.token);
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
  // trigger the action which type is 'authenticate' in the store
  store.dispatch('authenticate');
  window.console.log("the action which type is 'authenticate' in the store is triggered");

}

export function getToken(){
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