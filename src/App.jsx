import React from 'react';
import ServiceCard from './components/ServiceCard';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333'}}>
      <header>
        <h1>HVAC Service Portal</h1>
        <p>Manage customer calls, equipment status, and service tickets.</p>
      </header>
      <main>
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
      </main>

      <footer style={{ marginTop: '30px', color: '#777', fontSize: '14px'}}>
        <p>@HVAC Service Portal - Logged in as Technician</p>
      </footer>
    </div>
  );
}

export default App;