import { userConstants } from "../actions/constantes";

const initialState = {
  users: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.GET_ALL_USERS_REQUEST:
      return {
        ...state
      };
    case userConstants.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users
      };
    case userConstants.GET_ALL_USERS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      console.log('default action');
      return state; // Return the current state by default
  }
};

