import SignIn from '../components/SignIn';
import hvacLogo from '../assets/custom-HVAC.png';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = (tech) => {
    onLogin(tech);
    navigate('/tickets');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-between items-center p-6 text-slate-100">
      
      {/* Top Header Section */}
      <div className="w-full max-w-md pt-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">
          HVAC Service Portal
        </h1>
        <p className="text-sm text-slate-400">
          Manage customer calls, equipment status, and service tickets.
        </p>
      </div>

      {/* Central Glassmorphic Card Container */}
      <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 shadow-2xl flex flex-col items-center my-auto">
        
        {/* Logo Section - Centered with flex */}
        <div className="mb-6 relative flex flex-col items-center justify-center w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-2xl blur-md"></div>
          <img
            src={hvacLogo}
            alt="SunShine HVAC Logo"
            className="relative w-44 h-auto object-contain rounded-xl"
          />
        </div>

        {/* Sign In Component */}
        <div className="w-full">
          <SignIn onLogin={handleLogin} />
        </div>

      </div>

      {/* Footer */}
      <div className="text-center text-xs text-slate-600 pb-2">
        <p>© HVAC Service Portal</p>
      </div>

    </div>
  );
}

export default Login;