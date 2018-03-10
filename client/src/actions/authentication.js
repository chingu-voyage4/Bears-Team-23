import axios from 'axios';

export function getUser() {
  // action gets user authentication status from /profile route of server then
  //updates store

  return async (dispatch) => {
    const response = await axios.get('/api/profile');
    try {
      dispatch({
        type: "GET_USER_STATUS",
        payload: response.data
      })
    } catch (error) { //if no connection to server or any other error force response
      dispatch({
        type: "GET_USER_STATUS_REJECTED",
        payload: {
          authenticated: false,
          userip: null,
          username: null,
          displayname: null
        }
      });
    }
  }
}