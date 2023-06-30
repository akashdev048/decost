import * as usersApi from "../../services/users";
import * as usersActionType from "../actionsType/userActionType";

// export const newUser = (params) => async (dispatch) => {
//   const response = await authApis.loginUser(params);
//   console.log('resp', response)
//   if (response) {
//     if (response.data.success) {
//       localStorage.clear();
//       localStorage.setItem("token", response.data.accessToken);
//       localStorage.setItem("isLoggedIn", true);
//       dispatch({
//         type: authActionType.LOGIN_USER,
//         payload: response.data,
//       });
//     }
//     return response.data;
//   }
//   return response

// };

export const allUser = (params) => async (dispatch) => {
  const response = await usersApi.allUsers(params);
  if (response.data.success) {
    dispatch({
      type: usersActionType.ALL_USER,
      payload: response.data.data,
    });
  }
  return response.data;
};

export const userById = (params) => async (dispatch) => {
  const response = await usersApi.userById(params);
  if (response.data.success) {
    dispatch({
      type: usersActionType.USER_BY_ID,
      payload: response.data.data,
    });
  }
  return response.data;
};


export const deleteUser = (id) => async () => {
  const response = await usersApi.deleteUser(id);
  return response.data;
};

export const updateUser = (param) => async () => {
  const response = await usersApi.updateUser(param);
  return response.data;
};

export const blockUser = (param) => async () => {
  const response = await usersApi.block(param);
  return response.data;
};