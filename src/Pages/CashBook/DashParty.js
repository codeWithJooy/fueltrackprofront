import React from "react";

const DashParty = () => {
  const partyData = [
    { partyName: 'Party 1',  addition: 50, received: 30, closingBalance: 120 },
    { partyName: 'Party 2',  addition: 20, received: 50, closingBalance: 120 },
    { partyName: 'Party 3',  addition: 50, received: 30, closingBalance: 120 },
    { partyName: 'Party 4',  addition: 20, received: 50, closingBalance: 120 },
    { partyName: 'Party 5',  addition: 50, received: 30, closingBalance: 120 },
    { partyName: 'Party 6',  addition: 20, received: 50, closingBalance: 120 },
    { partyName: 'Party 7',  addition: 50, received: 30, closingBalance: 120 },
    { partyName: 'Party 8',  addition: 20, received: 50, closingBalance: 120 },
  ];
  return (
    <div className="dashCash">
      <table className="dashCashTable">
        <thead style={{ background: "#19363C", color: "white" }}>
          <tr>
            <th>Party</th>
            <th>Addition</th>
            <th>Received</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {partyData.map((party) => (
            <tr key={party.nozel}>
              <td>{party.partyName}</td>
              <td>{party.addition}</td>
              <td>{party.received}</td>
              <td>{party.closingBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashParty;