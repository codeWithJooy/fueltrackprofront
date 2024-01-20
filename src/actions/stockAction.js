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
export const getTankByProduct = async (ownerId, pumpId,product="") => {
    try {
      let req = {
        ownerId,
        pumpId,
        product,
      };
      const response = await stockApi.post("/getTankByProduct", req);
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
  export const getNozels = async (ownerId, pumpId) => {
    try {
      let req = {
        ownerId,
        pumpId,
      };
      const response = await stockApi.post("/getNozels", req);
      if (response.data.code == 200) {
        return response.data.model;
      } else {
        updateToast({
          code: CodeAnalogy.ERROR,
          title: "No Nozels Present",
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
  export const addNozel = async (data) => {
    try {
      let req = {
        ownerId:data.ownerId,
        pumpId:data.pumpId,
        nozelName:data.nozelName,
        product:data.product,
        npd:data.npd,
        tank:data.tank,
      };
      const response = await stockApi.post("/addNozel", req);
      if (response.data.code == 200) {
        updateToast({
            code: CodeAnalogy.SUCCESS,
            title: "Nozel Added Successfully",
          });
          return true;
      } else {
        updateToast({
          code: CodeAnalogy.ERROR,
          title: "Error Adding Nozel",
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