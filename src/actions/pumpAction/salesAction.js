import { pumpSaleApi } from "../../apis/apis";
import { dispatchAction } from "../actionHelper";
import { updateToast } from "../toastActions";
import { CodeAnalogy } from "../../Components/Toasty/Toasty";

export const getNozelByPumpId = async (pumpId) => {
  try {
    let pump = {
      pumpId,
    };
    const response = await pumpSaleApi.post("/getNozelByPumpId", pump);
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
export const getNozelReading = async (data) => {
  try {
    let pumpData = {
      pumpId:data.pumpId,
      mpd:data.mpd,
      date:data.date,
      status:data.status
    };
    const response = await pumpSaleApi.post("/getNozelReading", pumpData);
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
export const getNozelReadingRange = async (data) => {
  try {
    let pumpData = {
      pumpId:data.pumpId,
      mpd:data.mpd,
      initialDate:data.initialDate,
      finalDate:data.finalDate,
      status:data.status
    };
    const response = await pumpSaleApi.post("/getNozelReadingRange", pumpData);
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
export const getPumpNozelClosingMeter = async (pumpId,nozelId) => {
  try {
    let pump = {
      pumpId,
      nozelId
    };
    const response = await pumpSaleApi.post("/getPumpNozelClosingMeter", pump);
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
export const addNozelReading = async (data,sellDate) => {
  try {
    let pumpData={
      data:data,
      sellDate:sellDate,
    }
    const response = await pumpSaleApi.post("/addNozelReadingFinal", pumpData);
    if (response.data.code == 200) {
      updateToast({
        code:CodeAnalogy.SUCCESS,
        title: "Nozel Reading Added SuccessFully",
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
export const getPumpNozelSale = async (pumpId) => {
  try {
    let pump = {
      pumpId,
    };
    const response = await pumpSaleApi.post("/getPumpNozelSale", pump);
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

export const addOtherSale = async (data) => {
  try {
    let OtherData = {
      pumpId:data.pumpId,
      productId:data.productId,
      productName:data.productName,
      date:data.date,
      quantity:data.quantity,
      rate:data.rate,
      amount:data.amount,
    };
    const response = await pumpSaleApi.post("/addOtherSale", OtherData);
    if (response.data.code == 200) {
      updateToast({
        code:CodeAnalogy.SUCCESS,
        title: "Product Sale Added SuccessFully",
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

export const getOtherSale = async (data) => {
  try {
    let OtherData = {
      pumpId:data.pumpId,
      productId:data.productId,
      date:data.date,
    };
    const response = await pumpSaleApi.post("/getOtherSale", OtherData);
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
export const getAllProducts = async (pumpId) => {
  try {
    let pump = {
      pumpId,
    };
    const response = await pumpSaleApi.post("/getAllProducts", pump);
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
export const getNozelData = async (pumpId) => {
  try {
    let pump = {
      pumpId,
    };
    const response = await pumpSaleApi.post("/getNozelData", pump);
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