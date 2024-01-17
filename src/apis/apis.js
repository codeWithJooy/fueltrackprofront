import axios from "axios";

const devApis = {
  USER_API: "http://localhost:5000/api/auth",
  SETUP_API:"http://localhost:5000/api/setup",
  PUMP_API:"http://localhost:5000/api/pump",
};
const prodApis = {
  USER_API: "https://fueltrackpro.onrender.com/api/auth",
  SETUP_API:"http://fueltrackpro.onrender.com/api/setup",
  
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
export const floorApi = axios.create({
  baseURL: APIS.FLOOR_API,
});
export const roomApi = axios.create({
  baseURL: APIS.ROOM_API,
});
export const tenantApi = axios.create({
  baseURL: APIS.TENANT_API,
});
export const expenseApi = axios.create({
  baseURL: APIS.EXPENSE_API,
});
export const foodApi = axios.create({
  baseURL: APIS.FOOD_API,
});
export const memberApi = axios.create({
  baseURL: APIS.MEMBER_API,
});
export const collectionApi = axios.create({
  baseURL: APIS.COLLECTION_API,
});
export const duesApi = axios.create({
  baseURL: APIS.DUE_API,
});
export const summaryApi = axios.create({
  baseURL: APIS.SUMMARY_API,
});
export const studentApi = axios.create({
  baseURL: APIS.STUDENT_API,
});
export const complaintApi = axios.create({
  baseURL:APIS.COMPLAINT_API,
})