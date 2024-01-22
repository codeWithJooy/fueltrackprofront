import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllPumps } from "../../actions/pumpAction";
import "./Dropdown.css";

const Dropdown = ({pumpId,setPumpId}) => {
  const { ownerId } = useSelector((state) => state.user);
  const [pumpName, setPumpName] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(true);
  useEffect(() => {
    if (!forceUpdate) return;
    (async () => {
      let data = await getAllPumps(ownerId);
      setPumpName(data);
      if(data.length >=1){
        setPumpId(data[0]._id)
      }
      setForceUpdate(false);
    })();
  }, [forceUpdate]);
  return (
    <div className="pumpDropdown">
      <select onChange={(e) => setPumpId(e.target.value)}>
        {pumpName.map((pump) => (
          <option key={pump._id} value={pump._id}>
            {pump.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
