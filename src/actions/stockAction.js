import { stockApi } from "../apis/apis";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";

export const getTanks = async (ownerId, pumpId) => {
  try {
    let req = {
      ownerId,
      pumpId,
    };
    const response = await stockApi.post("/getTanks", req);
    if (response.data.code == 200) {
      return response.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "No Tanks Present",
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
export const addTank = async (data) => {
    try {
      let req = {
        ownerId:data.ownerId,
        pumpId:data.pumpId,
        tankName:data.tankName,
        product:data.product,
        quantity:data.quantity,
      };
      const response = await stockApi.post("/addTank", req);
      if (response.data.code == 200) {
        updateToast({
            code: CodeAnalogy.SUCCESS,
            title: "Tank Added Successfully",
          });
          return true;
      } else {
        updateToast({
          code: CodeAnalogy.ERROR,
          title: "Error Adding Tank",
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
