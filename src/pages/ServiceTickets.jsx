import ServiceCard from '../components/ServiceCard';
import { useNavigate } from 'react-router-dom';

function ServiceTickets({ currentTech, onSignOut }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    onSignOut();
    navigate('/');
  };

  // All service tickets
  const tickets = [
    {
      id: 101,
      customer: 'Acme Corp',
      unitType: 'Goodman 4-Ton Split System',
      issue: 'No cooling - R-410A Leak Detected',
      status: 'Pending',
      assignedTechId: '1129'
    },
    {
      id: 102,
      customer: 'Royalty Auto Care',
      unitType: 'Carrier Rooftop Package Unit',
      issue: 'Capacitor replacement & maintenance',
      status: 'Completed',
      assignedTechId: '1105'
    },
    {
      id: 103,
      customer: 'Smith Manufacturing',
      unitType: 'Trane 5-Ton Package Unit',
      issue: 'Unit not starting',
      status: 'Pending',
      assignedTechId: '1220'
    }
  ];

  // Only show tickets assigned to the logged-in technician
  const myTickets = tickets.filter(
    ticket => ticket.assignedTechId === currentTech.id
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>My Service Tickets</h2>

      {myTickets.map(ticket => (
        <ServiceCard
          key={ticket.id}
          customer={ticket.customer}
          unitType={ticket.unitType}
          issue={ticket.issue}
          status={ticket.status}
        />
      ))}

      {myTickets.length === 0 && (
        <p>No service tickets are currently assigned to you.</p>
      )}

      <button
        onClick={handleSignOut}
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