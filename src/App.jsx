import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ServiceTickets from './pages/ServiceTickets';
import './App.css';

function App() {
  const [currentTech, setCurrentTech] = useState(null);

  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          color: '#333',
          maxWidth: '600px',
          margin: '0 auto',
          boxSizing: 'border-box'
        }}
      >

        <main>
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

        <footer
          style={{
            marginTop: '30px',
            color: '#777',
            fontSize: '14px',
            textAlign: 'center'
          }}
        >
          <p>© HVAC Service Portal</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;