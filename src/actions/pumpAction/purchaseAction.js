import { pumpPurchaseApi } from "../../apis/apis"
import { updateToast } from "../toastActions";
import { CodeAnalogy } from "../../Components/Toasty/Toasty";


export const getPumpPurchase=async(data)=>{
    try{
      let pumpData={
        pumpId:data.pumpId,
        date:data.date,
        status:data.status,
        itemName:data.itemName,
      }
      const response=await pumpPurchaseApi.post("/getPumpPurchase",pumpData)
      if(response.data.code==200){
        return response.data.model
      }
      else{
        return false
      }
    }
    catch(error){
       updateToast({
        code:CodeAnalogy.ERROR,
        title:"Something Went Wrong",
        message:"Error in user Signup"
       })
       console.log(error)
    }
}
export const getPumpPurchaseRange=async(data)=>{
  try{
    let pumpData={
      pumpId:data.pumpId,
      initialDate:data.initialDate,
      finalDate:data.finalDate,
      itemName:data.itemName,
    }
    const response=await pumpPurchaseApi.post("/getPumpPurchaseRange",pumpData)
    if(response.data.code==200){
      return response.data.model
    }
    else{
      return false
    }
  }
  catch(error){
     updateToast({
      code:CodeAnalogy.ERROR,
      title:"Something Went Wrong",
      message:"Error in user Signup"
     })
     console.log(error)
  }
}
export const addPumpPurchase=async(data)=>{
    try{
      let pumpData={
        pumpId:data.pumpId,
        date:data.date,
        supplierName:data.supplierName,
        purchaseLedger:data.purchaseLedger,
        itemName:data.itemName,
        qty:data.qty,
      }
      const response=await pumpPurchaseApi.post("/addPumpPurchase",pumpData)
      if(response.data.code==200){
        updateToast({
            code:CodeAnalogy.SUCCESS,
            title:"Purchase Added",
           })
           return true
      }
      else{
        updateToast({
            code:CodeAnalogy.ERROR,
            title:"Something Went Wrong",
            message:"Error in user Signup"
           })
        return false
      }
    }
    catch(error){
       updateToast({
        code:CodeAnalogy.ERROR,
        title:"Something Went Wrong",
        message:"Error in user Signup"
       })
       console.log(error)
    }
}