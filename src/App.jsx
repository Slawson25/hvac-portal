import React, { useState } from 'react';
import ServiceCard from './components/ServiceCard';
import SignIn from './components/SignIn';

function App() {

  const [currentTech, setCurrentTech] = useState(null);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#464545'}}>
      <header>
        <h1>HVAC Service Portal</h1>
        <p class='subtitle'>Manage customer calls, equipment status, and service tickets.</p>
      </header>
      <main>
        {!currentTech ? (
          <SignIn onLogin={(id) => setCurrentTech(id)}/>
        ) : (
          <div>
        <h2>Active Service Tickets</h2>
        <ServiceCard
          customer="Acme Corp"
          unitType="Goodman 4-Ton Split System"
          issue="No cooling - R-410A Leak Detected"
          status="Pending" 
          />

          <ServiceCard 
          customer="Royalty Auto Care"
          unitType="Carrier Rooftop Package Unit"
          issue="Compacitor replacement & maintenance"
          status="Completed"
          />

          <button
            onClick={() => setCurrentTech(null)}
            style={{ marginTop: '20px', padding: '8px 16px', backgroundColor: '#d9534f', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Sign Out
            </button>
          </div>
          )}
      </main>

      <footer style={{ marginTop: '30px', color: '#777', fontSize: '14px'}}>
        <p>@HVAC Service Portal - Logged in as Technician</p>
      </footer>
    </div>
  );
}

export default App;