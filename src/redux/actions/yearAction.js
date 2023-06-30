import * as yearApi from "../../services/year";
import * as yearActionType from "../actionsType/yearActionType";

export const addYear = (params) => async (dispatch) => {
  const response = await yearApi.newYear(params);
  return response.data
};

export const updateYear = (params) => async (dispatch) => {
  const response = await yearApi.updateYear(params);
  return response.data

};

export const allYears = (params) => async (dispatch) => {
  const response = await yearApi.allYears(params);
  if (response.data.success) {
    dispatch({
      type: yearActionType.ALL_YEARS,
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


export const deleteYear = (id) => async () => {
  const response = await yearApi.deleteYear(id);
  return response.data;
};

// export const updateCategory = (param) => async () => {
//   const response = await categoryApi.updateCategory(param);
//   return response.data;
// };
