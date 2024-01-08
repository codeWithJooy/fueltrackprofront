import React from "react";

const BankList = () => {
  const partyData = [
    { partyName: 'PhonePe',  addition: 3000, received: "10.00 am" },
    { partyName: 'HDFC Card',  addition:2000, received: "11.02 am"  },
    { partyName: 'Paytm',  addition: 10000, received: "12.05 am" },
    { partyName: 'A/C Transfer',  addition:12000, received: "01.00 pm"  },
  ];
  return (
    <div className="partyList">
      <table>
        <thead style={{ background: "#19363C", color: "white" }}>
          <tr>
            <th>Particular</th>
            <th>Amount</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {partyData.map((party) => (
            <tr key={party.partyName}>
              <td>{party.partyName}</td>
              <td>{party.addition}</td>
              <td>{party.received}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankList;