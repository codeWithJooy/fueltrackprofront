import React,{useEffect,useState} from 'react'

const BankForm=()=>{
    const [currentDate, setCurrentDate] = useState("");
    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setCurrentDate(today);
      }, []);
    
      const handleDateChange = (event) => {
        
        const newDate = event.target.value;
        setCurrentDate(newDate);
      };
      
    return(
        <div className="dataContainer">
            <div className="dataDiv">
              <div className="cashInput">
                <label>Type</label>
                <select>
                  <option>Gpay</option>
                  <option>PhonePe</option>
                  <option>PayTm</option>
                  <option>Card</option>
                </select>
              </div>
              <div className="cashInput">
                <label>Date</label>
                <input
                  type="date"
                  value={currentDate}
                  onChange={handleDateChange}
                />
              </div>
            </div>
            <div className="dataDiv">
              <div className="cashInput">
                <label>Amount</label>
                <input />
              </div>
            </div>
            <div className="buttonSection">
              <button className="addButton">Add</button>
              <button className="resetButton">Reset</button>
            </div>
          </div>
    )
}

export default BankForm;