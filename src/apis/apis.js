import axios from "axios";

const devApis = {
  USER_API: "http://localhost:5000/api/auth",
  SETUP_API:"http://localhost:5000/api/setup",
  PUMP_API:"http://localhost:5000/api/pump",
  STOCK_API:"http://localhost:5000/api/stock",
};
const prodApis = {
  USER_API: "https://fueltrackpro.onrender.com/api/auth",
  SETUP_API:"https://fueltrackpro.onrender.com/api/setup",
  PUMP_API:"https://fueltrackpro.onrender.com/api/pump",
  STOCK_API:"https://fueltrackpro.onrender.com/api/stock",
};

const getApiUrls = () => {
  const environment = process.env.REACT_APP_ENV;
  console.log(environment);
  switch (environment) {
    case "dev":
      return devApis;
    case "prod":
      return prodApis;
    default:
      return devApis;
  }
};

export const APIS = getApiUrls();

export const userApi = axios.create({
  baseURL: APIS.USER_API,
});
export const setupApi = axios.create({
  baseURL: APIS.SETUP_API,
});
export const pumpApi = axios.create({
  baseURL: APIS.PUMP_API,
});
export const stockApi=axios.create({
  baseURL:APIS.STOCK_API,
})