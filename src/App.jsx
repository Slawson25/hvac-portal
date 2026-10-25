import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import ServiceTickets from './pages/ServiceTickets';
import './App.css';

function App() {
  const [currentTech, setCurrentTech] = useState(null);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between bg-slate-950 text-white w-full">

        <main className="w-full flex-grow">
          <Routes>

            {/* Home Page is now the main landing page at root */}
            <Route
              path="/"
              element={
                <HomePage currentTech={currentTech} />
              }
            />

            {/* Login Page moved to /login */}
            <Route
              path="/login"
              element={
                <Login
                  onLogin={(tech) => setCurrentTech(tech)}
                />
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