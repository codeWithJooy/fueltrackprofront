import React from "react";

const SalesList = () => {
  const partyData = [
    {
      product: "MS",
      quantity: "2345",
      rate: "98.04",
      amount: "229,903",
    },
    {
        product: "HSD",
        quantity: "6299",
        rate: "90.35",
        amount: "569114",
      },
      {
        product: "Lube",
        quantity: "1",
        rate: "300",
        amount: "300",
      },
  ];
  return (
    <div className="partyContainer">
      <table>
        <thead style={{ background: "#19363C", color: "white" }}>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {partyData.map((party) => (
            <tr key={party.nozel}>
              <td>{party.product}</td>
              <td>{party.quantity}</td>
              <td>{party.rate}</td>
              <td>{party.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesList;
