import React from 'react';

function FeesRecord() {
  return (
    <div className="container mt-4">
      <h2>Fees Record</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>August 2024</td>
            <td>$200</td>
            <td>Paid</td>
          </tr>
          <tr>
            <td>September 2024</td>
            <td>$200</td>
            <td>Pending</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default FeesRecord;
