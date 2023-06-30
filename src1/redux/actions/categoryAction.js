import * as categoryApi from "../../services/category";
import * as categoryActionType from "../actionsType/categoryActionType";

export const addCategory = (params) => async (dispatch) => {
  const response = await categoryApi.addCategory(params);
  return response.data

};

export const allCategories = (params) => async (dispatch) => {
  const response = await categoryApi.allCagtegory(params);
  // if (response.data.success) {
  //   dispatch({
  //     type: categoryActionType.ALL_CATEGORY ,
  //     payload: response.data.data,
  //   });
  // }
  return {};
};



export const deleteCategory = (id) => async () => {
  const response = await categoryApi.deleteCategory(id);
  return response.data;
};

export const updateCategory = (param) => async () => {
  const response = await categoryApi.updateCategory(param);
  return response.data;
};
