import { setupApi } from "../apis/apis";
import { dispatchAction, getHeaders } from "./actionHelper";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";

export const pumpSetup = async (ownerId, data) => {
  try {
    let req = {
      ownerId,
      pumpArray: data,
    };
    const response = await setupApi.post("/pumpsetup", req);
    if (response.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Pumps Data Uploaded",
      });
      return true;
    } else if (response.data.code == 404) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "User Not Present",
      });
      return false;
    }
  } catch (error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
    });
    console.log(error.message);
  }
};
export const addItem = async (data) => {
  try {
    let req = {
      ownerId: data.ownerId,
      pumpId: data.pumpId,
      productName: data.productName,
      symbol: data.symbol,
      unit: data.unit,
      type: data.type,
    };
    const response = await setupApi.post("/addItem", req);
    if (response.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Items Data Uploaded",
      });
      return true;
    } else if (response.data.code == 404) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
      return false;
    }
  } catch (error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
    });
    console.log(error.message);
  }
};
export const getItem = async (data) => {
  try {
    let req = {
      pumpId: data.pumpId,
    };
    const response = await setupApi.post("/getItem", req);
    if (response.data.code == 200) {
      return response.data.model;
    } else if (response.data.code == 404) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
      return false;
    }
  } catch (error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
    });
    console.log(error.message);
  }
};
export const addItemRate = async (data) => {
  try {
    let req = {
      ownerId: data.ownerId,
      pumpId: data.pumpId,
      product: data.product,
      date: data.date,
      rate:data.rate,
    };
    const response = await setupApi.post("/addItemRate", req);
    if (response.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Item Rate Uploaded",
      });
      return true;
    } else if (response.data.code == 404) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
      return false;
    }
  } catch (error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
    });
    console.log(error.message);
  }
};
export const getItemRate = async (data) => {
  try {
    let req = {
      pumpId: data.pumpId,
      date:data.date
    };
    const response = await setupApi.post("/getItemRate", req);
    if (response.data.code == 200) {
      return response.data.model;
    } else if (response.data.code == 404) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
      return false;
    }
  } catch (error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
    });
    console.log(error.message);
  }
};
export const getOneItemRate = async (data) => {
  try {
    let req = {
      pumpId: data.pumpId,
      product:data.product,
    };
    const response = await setupApi.post("/getOneItemRate", req);
    if (response.data.code == 200) {
      return response.data.model;
    } else if (response.data.code == 404) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
      return false;
    }
  } catch (error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
    });
    console.log(error.message);
  }
};