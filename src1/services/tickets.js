import { client } from "./index";

export const ticketList = (params) => client.post("api/gameCard/sellerticket", params);


