import axios from 'axios';
import * as actionTypes from './actionTypes';


export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('token');
    // setAuthorizationToken(false);
    // dispatch(setCurrentUser({}));
  }
}

// export function login(data) {
//   return dispatch => {
//     return axios.post('/api/auth', data).then(res => {
//       const token = res.data.token;
//       localStorage.setItem('jwtToken', token);
//       setAuthorizationToken(token);
//       dispatch(setCurrentUser(jwtDecode(token)));
//     });
//   }
// }