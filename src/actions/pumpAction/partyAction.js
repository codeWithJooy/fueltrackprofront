import { pumpPartyApi } from "../../apis/apis";
import { dispatchAction } from "../actionHelper";
import { updateToast } from "../toastActions";
import { CodeAnalogy } from "../../Components/Toasty/Toasty";

export const getPartyName = async (pumpId) => {
  try {
    let pump = {
      pumpId,
    };
    const response = await pumpPartyApi.post("/getPartyName", pump);
    if (response.data.code == 200) {
      return response.data.model;
    } else {
      return false;
    }
  } catch(error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Error in User Signup",
    });
    console.log(error);
  }
};
export const addPartyVehicle= async (data) => {
    try {
      let OtherData = {
        pumpId:data.pumpId,
        partyId:data.partyId,
        partyName:data.partyName,
        vehicleNo:data.vehicleNo,
      };
      const response = await pumpPartyApi.post("/addPartyVehicle", OtherData);
      if (response.data.code == 200) {
        updateToast({
          code:CodeAnalogy.SUCCESS,
          title: "Party Vehicle Added Successfully",
        })
        return true
      } else {
        updateToast({
          code:CodeAnalogy.ERROR,
          title: "Something Went Wrong",
        })
        return false;
      }
    } catch(error) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: error.message,
      });
      console.log(error);
    }
  };
  export const getPartyVehicle = async (data) => {
    try {
      let pump = {
        pumpId:data.pumpId,
        partyName:data.partyName,
      };
      const response = await pumpPartyApi.post("/getPartyVehicle", pump);
      if (response.data.code == 200) {
        return response.data.model;
      } else {
        return false;
      }
    } catch(error) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error in User Signup",
      });
      console.log(error);
    }
  };



