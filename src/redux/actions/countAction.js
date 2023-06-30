import * as api from "../../services/count";

export const getcounts = (params) => async (dispatch) => {
  const response = await api.allCounts(params);
  return response.data
};