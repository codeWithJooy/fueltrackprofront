import axios from "axios";
const local="http://localhost:5000"
const prod="https://fueltrackpro-4cd0.onrender.com"
const devApis = {
  USER_API: `${local}/api/auth`,
  SETUP_API:`${local}/api/setup`,
  PUMP_API:`${local}/api/pump`,
  STOCK_API:`${local}/api/stock`,
  LEDGER_API:`${local}/api/ledger`,
  PUMP_SALE_API:`${local}/api/pumps/sales`,
  PUMP_PARTY_API:`${local}/api/pumps/party`,
  PUMP_MISC_API:`${local}/api/pumps/misc`,
  PUMP_EXPENDITURE_API:`${local}/api/pumps/expenditure`,
};
const prodApis = {
  USER_API: `${prod}/api/auth`,
  SETUP_API:`${prod}/api/setup`,
  PUMP_API:`${prod}/api/pump`,
  STOCK_API:`${prod}/api/stock`,
  LEDGER_API:`${prod}/api/ledger`,

  PUMP_SALE_API:`${prod}/api/pumps/sales`,
  PUMP_PARTY_API:`${prod}/api/pumps/party`,
  PUMP_MISC_API:`${prod}/api/pumps/misc`,
  PUMP_EXPENDITURE_API:`${prod}/api/pumps/expenditure`,
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
export const ledgerApi=axios.create({
  baseURL:APIS.LEDGER_API,
})

export const pumpSaleApi=axios.create({
  baseURL:APIS.PUMP_SALE_API
})
export const pumpPartyApi=axios.create({
  baseURL:APIS.PUMP_PARTY_API
})
export const pumpMiscApi=axios.create({
  baseURL:APIS.PUMP_MISC_API
})
export const pumpExpenditureApi=axios.create({
  baseURL:APIS.PUMP_EXPENDITURE_API
})