import * as driverApi from "../../services/driver";
import * as driverActionType from "../actionsType/driverActionType";

// export const addCategory = (params) => async (dispatch) => {
//   const response = await categoryApi.addCategory(params);
//   return response.data

// };

export const allDrivers = (params) => async (dispatch) => {
  const response = await driverApi.allDrivers(params);
  if (response.data.success) {
    dispatch({
      type: driverActionType.ALL_DRIVER ,
      payload: response.data.data,
    });
  }
  return response.data;
};

export const driverByStatus = (params) => async (dispatch) => {
  const response = await driverApi.driverByStatus(params);
  console.log("ress", response.data)
  if (response.data.success) {
    dispatch({
      type: driverActionType.ALL_DRIVER ,
      payload: response.data.data,
    });
  }
  return response.data;
};


export const driverById = (payload) => async () => {
  const response = await driverApi.driverById(payload);
  return response.data;
};

export const updateDriver = (param) => async () => {
  const response = await driverApi.updateDriver(param);
  return response.data;
};


export const deleteDriver = (id) => async () => {
  const response = await driverApi.deleteDriver(id);
  return response.data;
};

export const logs = (param) => async () => {
  const response = await driverApi.logs(param);
  return response.data;
};

// export const updateCategory = (param) => async () => {
//   const response = await categoryApi.updateCategory(param);
//   return response.data;
// };
