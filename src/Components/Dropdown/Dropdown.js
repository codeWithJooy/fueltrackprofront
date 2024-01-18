import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllPumps } from "../../actions/pumpAction";
import "./Dropdown.css";

const Dropdown = () => {
  const { ownerId } = useSelector((state) => state.user);
  const [pumpName, setPumpName] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(true);
  useEffect(() => {
    if (!forceUpdate) return;
    (async () => {
      let data = await getAllPumps(ownerId);
      setPumpName(data);
      setForceUpdate(false);
    })();
  }, [forceUpdate]);
  return (
    <div className="pumpDropdown">
      <select>
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
