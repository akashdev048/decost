import * as carApi from "../../services/car";
import * as carActionType from "../actionsType/carActionType";

export const addCarMake = (params) => async (dispatch) => {
  const response = await carApi.newCarMake(params);
  return response.data

};

export const updateCarMake = (params) => async (dispatch) => {
  const response = await carApi.updateCarMake(params);
  return response.data

};

export const allcars = (params) => async (dispatch) => {
  const response = await carApi.allCarMakes(params);
  if (response.data.success) {
    dispatch({
      type: carActionType.ALL_CAR_MAKES,
      payload: response.data.data,
    });
  }
  return response.data;
};


export const carById = (payload) => async () => {
  const response = await carApi.carById(payload);
  return response.data;
};


export const deleteCarMake = (id) => async () => {
  const response = await carApi.deleteCarMake(id);
  return response.data;
};

// export const updateCategory = (param) => async () => {
//   const response = await categoryApi.updateCategory(param);
//   return response.data;
// };
