import * as carApi from "../../services/carType";
import * as carActionType from "../actionsType/carTypeActionType";

export const addCarType = (params) => async (dispatch) => {
  const response = await carApi.newCarType(params);
  return response.data
};

export const updateCarType = (params) => async (dispatch) => {
  const response = await carApi.updateCarType(params);
  return response.data

};

export const allcarTypes = (params) => async (dispatch) => {
  const response = await carApi.allCarTypes(params);
  if (response.data.success) {
    dispatch({
      type: carActionType.ALL_CAR_TYPES,
      payload: response.data.data,
    });
  }
  return response.data;
};


// export const driverById = (payload) => async () => {
//   const response = await driverApi.driverById(payload);
//   console.log("respppppppp", response)
//   return response.data;
// };


export const deleteCarType = (id) => async () => {
  const response = await carApi.deleteCarType(id);
  return response.data;
};

// export const updateCategory = (param) => async () => {
//   const response = await categoryApi.updateCategory(param);
//   return response.data;
// };
