import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

function ServiceTickets({ currentTech, onSignOut }) {
  const navigate = useNavigate();

  // Redirect to login if someone accesses /tickets directly without logging in
  if (!currentTech) {
    navigate('/login');
    return null;
  }

  const handleSignOut = () => {
    onSignOut();
    navigate('/');
  };

  // All service tickets across the company
  const [tickets] = useState([
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
    },
    {
      id: 104,
      customer: 'Disney Animal Lodge',
      unitType: 'Window Unit',
      issue: 'Not cooling, humming sound',
      status: 'Completed',
      assignedTechId: '1129'
    }
  ]);

  const isSupervisor = currentTech.role === 'supervisor' || currentTech.role === 'manager';

  // Supervisors see all tickets; technicians see only their assigned tickets
  const displayedTickets = isSupervisor
    ? tickets
    : tickets.filter(ticket => ticket.assignedTechId === currentTech.id);

  return (
    <div className="min-h-screen w-full relative flex flex-col justify-between items-center p-4 sm:p-6 lg:p-8 text-white bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
      
      {/* Dark atmospheric overlay */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center mx-auto flex-grow py-6">
        
        {/* Header Section */}
        <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {isSupervisor ? 'Dispatcher Command Center' : 'My Service Tickets'}
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Logged in as <span className="text-white font-semibold">{currentTech.name}</span> 
              <span className="ml-2 px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full">
                {isSupervisor ? 'Supervisor' : 'Technician'}
              </span>
            </p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-xl transition duration-200 border border-slate-700 cursor-pointer"
          >
            Home
          </button>
        </div>

        {/* Tickets Listing Container */}
        <div className="w-full flex flex-col gap-4 mb-8">
          {displayedTickets.length > 0 ? (
            displayedTickets.map(ticket => (
              <div 
                key={ticket.id}
                className="w-full bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-5 shadow-xl transition hover:border-slate-700"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      Ticket #{ticket.id}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">{ticket.customer}</h3>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${
                    ticket.status === 'Completed' 
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  }`}>
                    {ticket.status}
                  </span>
                </div>

                <p className="text-sm text-slate-300 mb-2">
                  <strong className="text-slate-400 font-medium">Unit:</strong> {ticket.unitType}
                </p>
                <p className="text-sm text-slate-300 mb-4">
                  <strong className="text-slate-400 font-medium">Issue:</strong> {ticket.issue}
                </p>

                {/* If supervisor, show who it's assigned to */}
                {isSupervisor && (
                  <div className="pt-3 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-400">
                    <span>Assigned Tech ID: <strong className="text-white">{ticket.assignedTechId}</strong></span>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="w-full bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 text-center text-slate-400">
              No service tickets are currently assigned.
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="w-full flex gap-4 mt-auto pt-4">
          <button
            onClick={handleSignOut}
            className="w-full py-3 bg-red-600/80 hover:bg-red-600 text-white font-semibold rounded-xl transition duration-200 shadow-lg shadow-red-600/20 cursor-pointer"
          >
            Sign Out
          </button>
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-10 py-4 text-center text-xs text-slate-500">
        <p>© SunShine HVAC Service Portal</p>
      </div>

    </div>
  );
}

export default ServiceTickets;