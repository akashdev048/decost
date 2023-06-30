import * as colorApi from "../../services/color";
import * as colorActionType from "../actionsType/colorActionType";

export const addColor = (params) => async (dispatch) => {
  const response = await colorApi.newColor(params);
  return response.data
};

export const updateColor = (params) => async (dispatch) => {
  const response = await colorApi.updateColor(params);
  return response.data

};

export const allColors = (params) => async (dispatch) => {
  const response = await colorApi.allColors(params);
  if (response.data.success) {
    dispatch({
      type: colorActionType.ALL_COLORS,
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


export const deleteColor = (id) => async () => {
  const response = await colorApi.deleteColor(id);
  return response.data;
};

// export const updateCategory = (param) => async () => {
//   const response = await categoryApi.updateCategory(param);
//   return response.data;
// };
