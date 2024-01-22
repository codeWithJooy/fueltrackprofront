import { ledgerApi } from "../apis/apis";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";

export const getLedger = async (ownerId, pumpId) => {
  try {
    let req = {
      ownerId,
      pumpId,
    };
    const response = await ledgerApi.post("/getLedger", req);
    if (response.data.code == 200) {
      return response.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "No Ledger Present",
      });
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
export const addLedger = async (data) => {
    try {
      let req = {
        ownerId:data.ownerId,
        pumpId:data.pumpId,
        partyName:data.partyName,
        group:data.group,
        house:data.house,
        street:data.street,
        pincode:data.pincode,
        city:data.city,
        state:data.state,
        pan:data.pan,
        gst:data.gst,
        mobile:data.mobile,
        email:data.email,
        openingBalance:data.openingBalance,
      };
      const response = await ledgerApi.post("/addLedger", req);
      if (response.data.code == 200) {
        updateToast({
            code: CodeAnalogy.SUCCESS,
            title: "Ledger Added Successfully",
          });
          return true;
      } else {
        updateToast({
          code: CodeAnalogy.ERROR,
          title: "Error Adding Ledger",
        });
        return false;
      }
    } catch (error) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
      console.log(error.message);
      return false;
    }
  };
