import { pumpApi } from "../apis/apis";
import { dispatchAction, getHeaders } from "./actionHelper";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";

export const getAllPumps = async (ownerId) => {
  let data = {
    ownerId,
  };
  try {
    const response = await pumpApi.post("/getAllPumps", data);
    if (response.data.code == 200) {
      return response.data.model;
    } else if (response.data.code == 404) {
      return [];
    }
  } catch (error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
    });
    console.log(error.message);
  }
};

export const getPumpsName = async (ownerId) => {
  let data = {
    ownerId,
  };
  try {
    const response = await pumpApi.post("/getPumpsName", data);
    if (response.data.code == 200) {
      return response.data.model;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const addPump = async (data) => {
  try {
    let pump = {
      ownerId: data.ownerId,
      name: data.name,
      plotNo: data.plotNo,
      street: data.street,
      owner: data.owner,
      pan: data.pan,
      gstin: data.gstin,
      vat: data.vat,
      cst: data.cst,
      tin: data.tin,
      tan: data.tan,
    };

    const response = await pumpApi.post("/addPump", pump);
    if (response.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Pump Added Successfully",
      });
      return true;
    } else if (response.data.code != 200) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Error Adding Pump",
      });
      return false;
    }
  } catch (error) {
    console.log(error.message)
  }
};
