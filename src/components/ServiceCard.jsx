import React from 'react';

function ServiceCard({ customer, unitType, issue, status }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '12px 0',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  };

  const statusStyle = {
    fontWeight: 'bold',
    color: status === 'Pending' ? '#d9534f' : '#5cb85c'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0 0 8px 0' }}>{customer}</h3>
      <p><strong>Equipment:</strong> {unitType}</p>
      <p><strong>Issue:</strong> {issue}</p>
      <p><strong>Status:</strong> <span style={statusStyle}>{status}</span></p>
    </div>
  );
}

export default ServiceCard;