import * as ActionType from "../actionsType/authActionType";

const initialState = {
  user: {},
};

 const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      return {
        ...state,
        // loading: true,
        // failure: false,
        user: action.payload,
      };

    default:
      return state;
  }
};
export default authReducer
