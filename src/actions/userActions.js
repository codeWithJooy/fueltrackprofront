import { USER_SIGNUP,USER_LOGIN } from "../actionTypes/userTypes";
import { userApi } from "../apis/apis";
import { dispatchAction } from "./actionHelper";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";

export const userSignup = async (data) => {
  try {
    let user = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      password: data.password,
    };
    const response = await userApi.post("/signup", user);
    if (response.data.code == 200) {
      localStorage.setItem("ownerId",response.data.ownerId)
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Signup Successful",
      });
      dispatchAction(USER_SIGNUP,response.data)
      return true;
    } else if (response.data.code == 409) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "User Present Already",
      });
      return false;
    }
  } catch (error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Error in User Signup",
    });
    console.log(error);
  }
};
export const userLogin = async (data) => {
  try {
    let user = {
      email: data.email,
      password: data.password,
    };
    const response = await userApi.post("/login", user);
    if (response.data.code == 200) {
      localStorage.setItem("ownerId",response.data.ownerId)
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Login Successful",
      });
      dispatchAction(USER_LOGIN,response.data)
      return true;
    } else if (response.data.code == 401) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: response.data.msg,
      });
      return false;
    }
  } catch (error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Error in User Signup",
    });
    console.log(error);
  }
};