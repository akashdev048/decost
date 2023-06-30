import * as usersApi from "../../services/rides";
import * as actionType from "../actionsType/rideActionType";
//localStorage.setItem("token", response.data.accessToken);

export const allRides = (params) => async (dispatch) => {
  const response = await usersApi.allRides(params);
  if (response.data.success) {
    dispatch({
      type: actionType.GET_RIDES,
      payload: response.data.data,
    });
  }
  return response.data;
};


// export const rideByUser = (params) => async (dispatch) => {
//   const response = await usersApi.userById(params);
//   if (response.data.success) {
//     dispatch({
//       type: usersActionType.USER_BY_ID,
//       payload: response.data.data,
//     });
//   }
//   return response.data;
// };

export const ridesByStatus = (params) => async (dispatch) => {
  const response = await usersApi.ridesByStatus(params);
  if (response.data.success) {
    dispatch({
      type: actionType.GET_RIDES,
      payload: response.data.data,
    });
  }
  return response.data;
};

export const ridesByDriverStatus = (params) => async (dispatch) => {
  const response = await usersApi.ridesByDriverStatus(params);
  if (response.data.success) {
    dispatch({
      type: actionType.GET_RIDES,
      payload: response.data.data,
    });
  }
  return response.data;
};

export const ridesByUserStatus = (params) => async (dispatch) => {
  const response = await usersApi.ridesByUserStatus(params);
  if (response.data.success) {
    dispatch({
      type: actionType.GET_USER_RIDES,
      payload: response.data.data,
    });
  }
  return response.data;
};


export const rideByDriver = (params) => async (dispatch) => {
    const response = await usersApi.ridesByDriver(params);
    if (response.data.success) {
      dispatch({
        type: actionType.GET_RIDES,
        payload: response.data.data,
      });
    }
    return response.data;
  };

  export const ridesRequestByUser = (params) => async (dispatch) => {
    const response = await usersApi.ridesRequestByUser(params);
    if (response.data.success) {
      dispatch({
        type: actionType.GET_USER_RIDES,
        payload: response.data.data,
      });
    }
    return response.data;
  };

  export const ridesByUser = (params) => async (dispatch) => {
    const response = await usersApi.ridesByUser(params);
    if (response.data.success) {
      dispatch({
        type: actionType.GET_USER_RIDES,
        payload: response.data.data,
      });
    }
    return response.data;
  };
  
  export const rideRequestByDriver = (params) => async (dispatch) => {
    const response = await usersApi.ridesRequestByDriver(params);
    if (response.data.success) {
      dispatch({
        type: actionType.GET_RIDES,
        payload: response.data.data,
      });
    }
    return response.data;
  };
 
  export const allRideRequests = (params) => async (dispatch) => {
    const response = await usersApi.allRequests(params);
    if (response.data.success) {
      dispatch({
        type: actionType.GET_RIDES,
        payload: response.data.data,
      });
    }
    return response.data;
  };

  export const rideRequestById = (params) => async (dispatch) => {
    const response = await usersApi.rideRequest(params);
    // if (response.data.success) {
    //   dispatch({
    //     type: actionType.GET_RIDES,
    //     payload: response.data.data,
    //   });
    // }
    return response.data;
  };

  export const rideTransaction = (params) => async (dispatch) => {
    const response = await usersApi.rideTransaction(params);
    // if (response.data.success) {
    //   dispatch({
    //     type: actionType.GET_RIDES,
    //     payload: response.data.data,
    //   });
    // }
    return response.data;
  };
  
  export const rideById = (params) => async (dispatch) => {
    const response = await usersApi.ride(params);
    // if (response.data.success) {
    //   dispatch({
    //     type: actionType.GET_RIDES,
    //     payload: response.data.data,
    //   });
    // }
    return response.data;
  };

  export const rideTransactionDetails = (params) => async (dispatch) => {
    const response = await usersApi.rideTransactionDetails(params);
    // if (response.data.success) {
    //   dispatch({
    //     type: actionType.GET_RIDES,
    //     payload: response.data.data,
    //   });
    // }
    return response?.data?.data || {};
  };
  

// export const deleteUser = (id) => async () => {
//   const response = await usersApi.deleteUser(id);
//   return response.data;
// };

// export const updateUser = (param) => async () => {
//   const response = await usersApi.updateUser(param);
//   return response.data;
// };

// export const blockUser = (param) => async () => {
//   const response = await usersApi.block(param);
//   return response.data;
// };