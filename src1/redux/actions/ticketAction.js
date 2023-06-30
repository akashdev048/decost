import * as ticketApis from "../../services/tickets";
import * as ticketActionType from "../actionsType/ticketActionType";

export const ticketListAction = (params) => async (dispatch) => {
  console.log(params, 'PARAMS')
  const response = await ticketApis.ticketList(params);
  console.log(response, 'RESPONSE')
  if (response) {
    if (response.data.success) {
      localStorage.clear();
      localStorage.setItem("token", response.data.accessToken);
      // localStorage.setItem("isLoggedIn", true);
      
      dispatch({
        type: ticketActionType.SELLER_TICKET,
        payload: response.data.data,
      });
    }
    else{
      console.log("error responce in auth action", response.data)
    }
    return response.data;
  }

};




