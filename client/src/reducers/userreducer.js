//store reducer handles all authentication actions
export function userStatusReducer(state={user:[]},action){
  switch (action.type) {
    case "GET_USER_STATUS":
      return {user: action.payload};
    case "SET_GUEST_STATUS":
      return {user:action.payload};
    case "GET_USER_STATUS_REJECTED":
      return {user:action.payload};
    case "SET_GUEST_STATUS_REJECTED":
      return {user:action.payload};
    default:
      return state;
  }
}
