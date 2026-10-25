import React from 'react';
import { useNavigate } from 'react-router-dom';
import hvacLogo from '../assets/custom-HVAC.png';

function HomePage({ currentTech }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full relative flex flex-col justify-between items-center p-4 sm:p-6 lg:p-8 text-white bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
      
      {/* Dark semi-transparent overlay to ensure high contrast and readability */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-lg flex flex-col justify-between items-center min-h-[calc(100vh-4rem)] mx-auto text-center">
        
        {/* Top Header Section */}
        <div className="pt-6 sm:pt-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            SunShine HVAC Portal
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Advanced Service Management & Dispatch System
          </p>
        </div>

        {/* Central Glassmorphic Card */}
        <div className="w-full bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col items-center my-auto">
          
          {/* Logo Section */}
          <div className="mb-6 relative flex flex-col items-center justify-center w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-2xl blur-md"></div>
            <img
              src={hvacLogo}
              alt="SunShine HVAC Logo"
              className="relative w-36 sm:w-44 h-auto object-contain rounded-xl"
            />
          </div>

          {/* Dynamic Greeting based on Login Status */}
          {currentTech ? (
            <div className="mb-6">
              <p className="text-slate-300 text-sm">Logged in as:</p>
              <p className="text-xl font-bold text-white">{currentTech.name}</p>
            </div>
          ) : (
            <p className="text-slate-300 text-sm mb-6">
              Select an option below to access technician tools and dispatch schedules.
            </p>
          )}

          {/* Navigation Action Buttons */}
          <div className="w-full flex flex-col gap-3">
            {currentTech ? (
              <button
                onClick={() => navigate('/tickets')}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition duration-200 shadow-lg shadow-blue-500/20 cursor-pointer"
              >
                View Service Tickets
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition duration-200 shadow-lg shadow-blue-500/20 cursor-pointer"
              >
                Technician Sign In
              </button>
            )}
          </div>

        </div>

        {/* Footer / Status Indicator */}
        <div className="pb-2 text-xs text-slate-400">
          <div className="flex items-center justify-center gap-2 text-emerald-400 font-medium mb-1">
            <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Portal Status: Operational
          </div>
          <p>© SunShine HVAC Service Portal</p>
        </div>

      </div>

    </div>
  );
}

export default HomePage;