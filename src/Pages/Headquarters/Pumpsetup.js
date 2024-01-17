import React, { useState } from "react";
import { useSelector } from "react-redux";
import { pumpSetup } from "../../actions/setupActions";
import { useHistory } from "react-router-dom";
import "./css/Pumpsetup.css";

const PumpSetup = () => {
  const [numberOfPumps, setNumberOfPumps] = useState(0);
  const [dummyNumber, setDummyNumber] = useState(0);
  const [pumpDetails, setPumpDetails] = useState([]);
  const { ownerId } = useSelector((state) => state.user);
  const history=useHistory()
  const handleNumberOfPumpsChange = (e) => {
    setDummyNumber(Number(e.target.value));
  };

  const handleSaveRow = (index) => {
    // Handle saving individual row to the database
    console.log(`Saving details for Pump ${index + 1}: `, pumpDetails[index]);

    // Set the row to non-editable after saving
    const updatedPumpDetails = [...pumpDetails];
    updatedPumpDetails[index].editable = false;
    setPumpDetails(updatedPumpDetails);
  };

  const handleSaveAll = () => {
    (async()=>{
      if(await pumpSetup(ownerId,pumpDetails)){
        history.push("/pumps")
      }
    })()
  };
  const handlePumpNumberSave = () => {
    setNumberOfPumps(dummyNumber);
    const initialPumpDetails = Array.from({ length: dummyNumber }, () => ({
      editable: true,
      name: "",
      plotNo: "",
      street: "",
      city: "",
      state: "",
      owner: "",
      pan: "",
      gstin: "",
      vat: "",
      cst: "",
      tin: "",
      tan: "",
    }));
    setPumpDetails(initialPumpDetails);
  };

  const handleInputChange = (index, fieldName, value) => {
    // Handle input changes for each field in a pump row
    const updatedPumpDetails = [...pumpDetails];
    updatedPumpDetails[index] = {
      ...updatedPumpDetails[index],
      [fieldName]: value,
    };
    setPumpDetails(updatedPumpDetails);
  };

  const handleEditRow = (index) => {
    // Set the row to editable when the Edit button is clicked
    const updatedPumpDetails = [...pumpDetails];
    updatedPumpDetails[index].editable = true;
    setPumpDetails(updatedPumpDetails);
  };

  const generateRows = () => {
    const rows = [];
    for (let i = 0; i < numberOfPumps; i++) {
      const isEditable = pumpDetails[i]?.editable || false;
      rows.push(
        <tr key={i}>
          <td>{`Pump ${i + 1}`}</td>
          <td>
            <input
              type="text"
              placeholder="Name"
              value={pumpDetails[i]?.name || ""}
              onChange={(e) => handleInputChange(i, "name", e.target.value)}
              readOnly={!isEditable}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Plot No"
              value={pumpDetails[i]?.plotNo || ""}
              onChange={(e) => handleInputChange(i, "plotNo", e.target.value)}
              readOnly={!isEditable}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Street"
              value={pumpDetails[i]?.street || ""}
              onChange={(e) => handleInputChange(i, "street", e.target.value)}
              readOnly={!isEditable}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="City"
              value={pumpDetails[i]?.city || ""}
              onChange={(e) => handleInputChange(i, "city", e.target.value)}
              readOnly={!isEditable}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="State"
              value={pumpDetails[i]?.state || ""}
              onChange={(e) => handleInputChange(i, "state", e.target.value)}
              readOnly={!isEditable}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Owner"
              value={pumpDetails[i]?.owner || ""}
              onChange={(e) => handleInputChange(i, "owner", e.target.value)}
              readOnly={!isEditable}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="PAN"
              value={pumpDetails[i]?.pan || ""}
              onChange={(e) => handleInputChange(i, "pan", e.target.value)}
              readOnly={!isEditable}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="GSTIN"
              value={pumpDetails[i]?.gstin || ""}
              onChange={(e) => handleInputChange(i, "gstin", e.target.value)}
              readOnly={!isEditable}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="VAT"
              value={pumpDetails[i]?.vat || ""}
              onChange={(e) => handleInputChange(i, "vat", e.target.value)}
              readOnly={!isEditable}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="CST"
              value={pumpDetails[i]?.cst || ""}
              onChange={(e) => handleInputChange(i, "cst", e.target.value)}
              readOnly={!isEditable}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="TIN"
              value={pumpDetails[i]?.tin || ""}
              onChange={(e) => handleInputChange(i, "tin", e.target.value)}
              readOnly={!isEditable}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="TAN"
              value={pumpDetails[i]?.tan || ""}
              onChange={(e) => handleInputChange(i, "tan", e.target.value)}
              readOnly={!isEditable}
            />
          </td>
          <td>
            <button
              onClick={() => (isEditable ? handleSaveRow(i) : handleEditRow(i))}
            >
              {isEditable ? "Save" : "Edit"}
            </button>
          </td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <div className="main">
      <div className="pumpSetupContainer">
        {numberOfPumps < 1 && (
          <div className="card">
            <h2>Setup Wizard: Number of Pumps</h2>
            <p>How many pumps do you have?</p>
            <input
              type="number"
              value={dummyNumber}
              onChange={handleNumberOfPumpsChange}
              placeholder="Enter the number of pumps"
            />
            <button onClick={handlePumpNumberSave}>Continue</button>
          </div>
        )}

        {numberOfPumps > 0 && (
          <div className="tablePage">
            <div className="tableHeader">
              <p>Add Details About Your Pumps</p>
              <button className="addPump" onClick={handleSaveAll}>
                {" "}
                Add Pumps{" "}
              </button>
            </div>
            <div className="table-section">
              <table>
                <thead>
                  <tr>
                    <th>Pump</th>
                    <th>Name</th>
                    <th>Plot No</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Owner</th>
                    <th>PAN</th>
                    <th>GSTIN</th>
                    <th>VAT</th>
                    <th>CST</th>
                    <th>TIN</th>
                    <th>TAN</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{generateRows()}</tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PumpSetup;
