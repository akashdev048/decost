import * as carApi from "../../services/carModel";
import * as carActionType from "../actionsType/carModelActionType";

export const addCarModel = (params) => async (dispatch) => {
  const response = await carApi.newCarModel(params);
  return response.data

};

export const updateCarModel = (params) => async (dispatch) => {
  const response = await carApi.updateCarModel(params);
  return response.data

};

export const allCarModels = (params) => async (dispatch) => {
  const response = await carApi.allCarModels(params);
  if (response.data.success) {
    dispatch({
      type: carActionType.ALL_CAR_MODELS,
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


export const deleteCarModel = (id) => async () => {
  const response = await carApi.deleteCarModel(id);
  return response.data;
};

// export const updateCategory = (param) => async () => {
//   const response = await categoryApi.updateCategory(param);
//   return response.data;
// };
