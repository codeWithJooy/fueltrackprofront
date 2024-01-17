import { setupApi } from "../apis/apis";
import { dispatchAction,getHeaders } from "./actionHelper";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";


export const pumpSetup=async(ownerId,data)=>{
    try{
      let req={
        ownerId,
        pumpArray:data
      }
      const response=await setupApi.post("/pumpsetup",req)
      if(response.data.code==200){
        updateToast({
            code:CodeAnalogy.SUCCESS,
            title:"Pumps Data Uploaded"
        })
        return true;
      }
      else if(response.data.code==404){
        updateToast({
            code:CodeAnalogy.ERROR,
            title:"User Not Present"
        })
        return false;
      }
    }catch(error){
        updateToast({
            code:CodeAnalogy.ERROR,
            title:"Something Went Wrong",
        })
        console.log(error.message)
    }
}