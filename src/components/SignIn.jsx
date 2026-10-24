import React, { useState } from 'react';

const AUTHORIZED_TECHS = [
    { id: '1129', name: 'Shawn Lawson' },
    { id: '1220', name: 'Heather Lawson' },
    { id: '1105', name: 'Ethan Lawson' },
    { id: '0924', name: 'Autumn Lawson' },
    { id: '0612', name: 'Paislee Lawson' },
    { id: '0214', name: 'Thayer Lawson' }
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
    <div className="flex flex-col items-center justify-center w-full">
      {/* Sign In Card */}
      <div className="w-full max-w-sm bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 shadow-2xl text-center">
        <h2 className="text-xl font-bold mb-4 text-white">Technician Access</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-center">
            <label className="block mb-2 text-sm font-medium text-slate-200">
              Enter 4-Digit Tech ID:
            </label>
            <input
              type="password"
              maxLength="4"
              value={techId}
              onChange={(e) => setTechId(e.target.value)}
              placeholder="••••"
              className="w-full px-4 py-3 bg-slate-950/60 border border-slate-700/80 rounded-xl text-white text-center text-xl tracking-widest placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition duration-200 shadow-lg shadow-blue-500/20 cursor-pointer"
          >
            Sign In
          </button> 
        </form>
      </div>

      {/* Support Card */}
      <div className="w-full max-w-sm mt-8 p-4 bg-slate-900/30 backdrop-blur-md border border-slate-800/60 rounded-xl text-center text-slate-400 text-xs">
        <p className="font-semibold text-slate-300 mb-1">Need Support?</p>
        <p className="mb-2">Dispatch Hotline: <strong className="text-slate-200">(800) 555-HVAC</strong></p>
        <div className="flex items-center justify-center gap-2 text-emerald-400 font-medium">
          <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Portal Status: Operational
        </div>
      </div>
    </div>
  );
}

export default SignIn;