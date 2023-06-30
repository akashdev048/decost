import * as api from "../../services/walletTransaction";

export const walletTransactions = (params) => async (dispatch) => {
  const response = await api.transactions(params);
  return response.data
};