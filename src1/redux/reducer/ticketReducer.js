import * as ActionType from "../actionsType/ticketActionType";

const initialState = {
  sellerTicket: [],
};

 const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELLER_TICKET:
      return {
        ...state,
        loading: true,
        failure: false,
        sellerTicket: action.payload,
      };

    default:
      return state;
  }
};
export default ticketReducer
