import React, { useState } from 'react';
import hvacLogo from '../assets/custom-HVAC.png';

const AUTHORIZED_TECHS = [
  { id: '1129', name: 'Shawn Lawson'},
    { id: '1220', name: 'Heather Lawson'},
    { id: '1105', name: 'Ethan Lawson'},
    { id: '0924', name: 'Autumn Lawson'},
    { id: '0612', name: 'Paislee Lawson'},
    { id: '0214', name: 'Thayer Lawson'}
];

function SignIn({ onLogin }) {
  const [techId, setTechId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundTech = AUTHORIZED_TECHS.find(tech => tech.id === techId);
    if (foundTech && techId.length === 4) {
      onLogin(foundTech);
    } else {
      alert('Please enter a valid 4-digit Tech ID');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      {/* Sign In Card */}
      <div style={{ width: '100%', maxWidth: '320px', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', backgroundColor: '#fff', border: '1px solid #ddd', textAlign: 'center' }}>
        <h2 class ='subtitle'style={{ marginTop: 0 }}>Technician Access</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', textAlign: 'left' }}>
              Enter 4-Digit Tech ID:
            </label>
            <input
              type="password"
              maxLength="4"
              value={techId}
              onChange={(e) => setTechId(e.target.value)}
              placeholder="••••"
              style={{ width: '100%', padding: '10px', fontSize: '18px', textAlign: 'center', letterSpacing: '4px', boxSizing: 'border-box' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0275d8', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Sign In
          </button> 
        </form>
      </div>

      <div style={{ width: '100%', maxWidth: '320px', margin: '16px 0 0 0', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef', textAlign: 'center', fontSize: '13px', color: '#6c757d', boxSizing: 'border-box' }}>
        <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', color: '#495057' }}>Need Support?</p>
        <p style={{ margin: 0 }}>Dispatch Hotline: <strong>(800) 555-HVAC</strong></p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '10px', fontSize: '11px', color: '#28a745', fontWeight: 'bold' }}>
          <span style={{ height: '7px', width: '7px', backgroundColor: '#28a745', borderRadius: '50%', display: 'inline-block' }}></span>
          Portal Status: Operational
        </div>
      </div>
    </div>
  );
}

export default SignIn;