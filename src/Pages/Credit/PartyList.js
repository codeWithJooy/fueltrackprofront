import React from 'react';

const PartyList = () => {
  const partyData = [
    { partyName: 'Party 1', previousBalance: 100, addition: 50, received: 30, closingBalance: 120 },
    { partyName: 'Party 2', previousBalance: 150, addition: 20, received: 50, closingBalance: 120 },
    { partyName: 'Party 3', previousBalance: 100, addition: 50, received: 30, closingBalance: 120 },
    { partyName: 'Party 4', previousBalance: 150, addition: 20, received: 50, closingBalance: 120 },
    { partyName: 'Party 5', previousBalance: 100, addition: 50, received: 30, closingBalance: 120 },
    { partyName: 'Party 6', previousBalance: 150, addition: 20, received: 50, closingBalance: 120 },
    { partyName: 'Party 7', previousBalance: 100, addition: 50, received: 30, closingBalance: 120 },
    { partyName: 'Party 8', previousBalance: 150, addition: 20, received: 50, closingBalance: 120 },
    // Add more party data as needed
  ];

  return (
    <div className='partyContainer'>
      <table>
        <thead style={{ background: '#19363C', color: 'white' }}>
          <tr>
            <th>Party Name</th>
            <th>Previous Balance</th>
            <th>Addition</th>
            <th>Received</th>
            <th>Closing Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {partyData.map((party) => (
            <tr key={party.partyName}>
              <td>{party.partyName}</td>
              <td>{party.previousBalance}</td>
              <td>{party.addition}</td>
              <td>{party.received}</td>
              <td>{party.closingBalance}</td>
              <td>
                <button>Credit</button>
                <button>Receive</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartyList;