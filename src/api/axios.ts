import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://moody-hounds-shake.loca.lt/",
  headers: {
    "Content-Type": "application/json",
    "bypass-tunnel-reminder": "true" // bypass the athentication for the URL
  },
});

// customAxios.interceptors.request.use(
//   (config) => {
//     if (config?.params?.isAuthRequired) {
//       config.headers.authorization = `Bearer ${getItem("authtoken")}`;
//     }

//     config.params = omit(config.params, "isAuthRequired");

//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

// customAxios.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (err) => {
//     if (err.response.data.name === "TokenExpiredError") {
//       refreshToken();
//     }

//     return Promise.reject(err);
//   }
// );

export { customAxios };