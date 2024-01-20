import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ItemData } from "../../../../Data/Items";

const ItemUnit = () => {
  const { ownerId } = useSelector((state) => state.user);
  const [tankModel,setTankModel]=useState(false)

  const openModel=()=>{
    setTankModel(true)
  }
  return (
    <div className="pageSection">
            <table>
        <thead style={{ background: "#19363C", color: "white" }}>
          <tr>
            <th>Symbol</th>
            <th>Product Name</th>
            <th>Unit</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {ItemData.map((party) => (
            <tr key={party.symbol}>
              <td>{party.symbol}</td>
              <td>{party.product}</td>
              <td>{party.unit}</td>
              <td>{party.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemUnit;