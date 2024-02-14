import { pumpMiscApi } from "../../apis/apis";
import { updateToast } from "../toastActions";
import { CodeAnalogy } from "../../Components/Toasty/Toasty";

export const getPumpName = async (pumpId) => {
  try {
    let pumpData = {
      pumpId,
    };
    const response = await pumpMiscApi.post("/getPumpName", pumpData);
    if (response.data.code == 200) {
      return response.data.name;
    } else {
      return false;
    }
  } catch (error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Error in PumpName",
    });
  }
};
