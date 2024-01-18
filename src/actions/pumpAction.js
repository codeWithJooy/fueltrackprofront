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
