//it is like we are requesting the state of particular object
//means jo bhi state based on action set ki hai that will be returned
import { userActionTypes } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
