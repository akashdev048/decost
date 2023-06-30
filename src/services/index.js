import axios from "axios";
export const client = axios.create({
    baseURL: "https://frenzy-backend.herokuapp.com/",
  //baseURL: "http://68.183.94.112:5000/",
 //baseURL: "http://localhost:9101"
});

client.interceptors.response.use(
  (response) => response,
  (error) => console.log(error)
  // const { response } = error;
  // console.log(error, "<<< error in interceptors");
  // if (response.responseCode === 401) {
  //   return response;
  // } else if (response.responseCode === 400) {
  //   return response;
  // } else if (response.responseCode === 422) {
  //   return response;
  // } else {
  //   return response;
  // }
  // return Promise.reject(error.response);
);
