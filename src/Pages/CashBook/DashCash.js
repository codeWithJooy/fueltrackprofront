import React from "react";

const DashCash = () => {
  const partyData = [
    {
      nozel: "MS1",
      open: "1234",
      close: "2341",
      sales: "123",
      net: "12345",
    },
    {
        nozel: "MS2",
        open: "1234",
        close: "2341",
        sales: "123",
        net: "12345",
      },
      {
        nozel: "HSD1",
        open: "1234",
        close: "2341",
        sales: "123",
        net: "12345",
      },
      {
        nozel: "HSD2",
        open: "1234",
        close: "2341",
        sales: "123",
        net: "12345",
      },
  ];
  return (
    <div className="dashCash">
      <table className="dashCashTable">
        <thead style={{ background: "#19363C", color: "white" }}>
          <tr>
            <th>Nozel</th>
            <th>Opening Meter</th>
            <th>Closing Meter</th>
            <th>Sales</th>
            <th>Net</th>
          </tr>
        </thead>
        <tbody>
          {partyData.map((party) => (
            <tr key={party.nozel}>
              <td>{party.nozel}</td>
              <td>{party.open}</td>
              <td>{party.close}</td>
              <td>{party.sales}</td>
              <td>{party.net}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashCash;