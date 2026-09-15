import ServiceCard from '../components/ServiceCard';

function ServiceTickets({ currentTech, onSignOut }) {
  return (
    <div style={{ textAlign: 'center' }}>

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
        issue="Capacitor replacement & maintenance"
        status="Completed"
      />

      <button
        onClick={onSignOut}
        style={{
          marginTop: '20px',
          padding: '8px 16px',
          backgroundColor: '#d9534f',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Sign Out
      </button>

      {currentTech && (
        <p
          style={{
            color: '#0275d8',
            fontWeight: 'bold',
            marginTop: '20px'
          }}
        >
          Logged in as {currentTech.name} (Tech #{currentTech.id})
        </p>
      )}

    </div>
  );
}

export default ServiceTickets;