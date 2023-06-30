
import { client } from "./index";

export const logIn = (params) => {
    return client.post("api/seller/authorize", params)
};


