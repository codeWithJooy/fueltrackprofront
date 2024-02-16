
import { pumpExpenditureApi } from "../../apis/apis";
import { updateToast } from "../toastActions";
import { CodeAnalogy } from "../../Components/Toasty/Toasty";


export const addExpenditureType=async(data)=>{
    try{
      let expData={
        pumpId:data.pumpId,
        expenditureType:data.expenditureType
      }
      const response=await pumpExpenditureApi.post("/addExpenditureType",expData)
      if(response.data.code==200){
        updateToast({
            code:CodeAnalogy.SUCCESS,
            title:"Expenditure Type Added",
            message:"Expenditure Type Added",
        })
        return true
      }
      else{
        updateToast({
            code:CodeAnalogy.ERROR,
            title:"Expenditure Type Added",
            message:"Something Went Wrong",
        })
        return true
      }
    }
    catch(error){
        console.log(error.message)
        updateToast({
            code:CodeAnalogy.ERROR,
            message:"Something Went Wrong"
        })
    }
}

export const getExpenditureType=async(data)=>{
    try{
        let pumpData={
            pumpId:data.pumpId
        }
        const response=await pumpExpenditureApi.post("/getExpenditureType",pumpData)
        if(response.data.code==200){
          return response.data.model
        }
        else{
          updateToast({
              code:CodeAnalogy.ERROR,
              message:"Something Went Wrong",
          })
          return []
        }
    }
    catch(error){
        console.log(error.message)
        updateToast({
            code:CodeAnalogy.ERROR,
            message:"Something Went Wrong"
        })
    }
}

export const addPumpExpenditure=async(data)=>{
    try{
      let expData={
        pumpId:data.pumpId,
        date:data.date,
        expenditureType:data.expenditureType,
        details:data.details,
        amount:data.amount,
      }
      const response=await pumpExpenditureApi.post("/addPumpExpenditure",expData)
      if(response.data.code==200){
        updateToast({
            code:CodeAnalogy.SUCCESS,
            title:"ExpenditureAdded",
        })
        return true
      }
      else{
        updateToast({
            code:CodeAnalogy.ERROR,
            title:"Something Went Wrong",
            message:"Something Went Wrong",
        })
        return true
      }
    }
    catch(error){
        console.log(error.message)
        updateToast({
            code:CodeAnalogy.ERROR,
            title:"Something Went Wrong"
        })
    }
}

export const getPumpExpenditure=async(data)=>{
    try{
        let pumpData={
            pumpId:data.pumpId,
            date:data.date
        }
        const response=await pumpExpenditureApi.post("/getPumpExpenditure",pumpData)
        if(response.data.code==200){
          return response.data.model
        }
        else{
          updateToast({
              code:CodeAnalogy.ERROR,
              message:"Something Went Wrong",
          })
          return []
        }
    }
    catch(error){
        console.log(error.message)
        updateToast({
            code:CodeAnalogy.ERROR,
            message:"Something Went Wrong"
        })
    }
}