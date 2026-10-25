import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ServiceTickets from './pages/ServiceTickets';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  const [currentTech, setCurrentTech] = useState(null);

  return (
    <BrowserRouter>
      {/* Removed the 600px width constraint so full-screen pages can stretch edge-to-edge */}
      <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-white w-full">

        <main className="w-full flex-grow">
          <Routes>

            {/* Login Page */}
            <Route
              path="/"
              element={
                <Login
                  onLogin={(tech) => setCurrentTech(tech)}
                />
              }
            />

            {/* Home Page */}
            <Route
              path="/home"
              element={
                <HomePage currentTech={currentTech} />
              }
            />

            {/* Service Tickets Page */}
            <Route
              path="/tickets"
              element={
                <ServiceTickets
                  currentTech={currentTech}
                  onSignOut={() => setCurrentTech(null)}
                />
              }
            />

          </Routes>
        </main>

        <footer className="py-4 text-center text-slate-500 text-xs">
          <p>© HVAC Service Portal</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;