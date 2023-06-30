import * as promotionsApi from "../../services/promotions";
import * as promotionActionType from "../actionsType/promotionActionType";

// driver
export const newProviderPromotion = (params) => async (dispatch) => {
  const response = await promotionsApi.newProviderPromotion(params);
  return response.data
};

export const updateProviderPromotion = (params) => async (dispatch) => {
  const response = await promotionsApi.updateProviderPromotion(params);
  return response.data

};

export const getAllProviderPromotion = (params) => async (dispatch) => {
  const response = await promotionsApi.allProviderPromotion(params);
  if (response.data.success) {
    dispatch({
      type: promotionActionType.ALL_DRIVER_PROMOTION,
      payload: response.data.data,
    });
  }
  return response.data;
};

export const deleteProviderPromotion = (id) => async () => {
  const response = await promotionsApi.deleteProviderPromotion(id);
  return response.data;
};



// user
export const newUserPromotion = (params) => async (dispatch) => {
  const response = await promotionsApi.newUserPromotion(params);
  return response.data
};

export const updateUserPromotion = (params) => async (dispatch) => {
  const response = await promotionsApi.updateUserPromotion(params);
  return response.data

};

export const getAllUserPromotion = (params) => async (dispatch) => {
  const response = await promotionsApi.allUserPromotion(params);
  console.log(response,"response")
  if (response.data.success) {
    dispatch({
      type: promotionActionType.ALL_USER_PROMOTION,
      payload: response.data.data,
    });
  }
  return response.data;
};

export const deleteUserPromotion = (id) => async () => {
  const response = await promotionsApi.deleteUserPromotion(id);
  return response.data;
};
