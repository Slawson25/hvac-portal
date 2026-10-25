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
    <div className="min-h-screen w-full relative flex flex-col justify-between items-center p-4 sm:p-6 lg:p-8 text-white bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
      
      {/* Dark semi-transparent overlay to ensure high contrast and readability */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"></div>

      {/* Main Content Container (relative z-10 ensures it sits above the background overlay) */}
      <div className="relative z-10 w-full max-w-md flex flex-col justify-between items-center min-h-[calc(100vh-4rem)] mx-auto">
        
        {/* Top Header Section */}
        <div className="w-full pt-4 sm:pt-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            HVAC Service Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Manage customer calls, equipment status, and service tickets.
          </p>
        </div>

        {/* Central Glassmorphic Card Container */}
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

          {/* Sign In Component */}
          <div className="w-full">
            <SignIn onLogin={handleLogin} />
          </div>

        </div>

        {/* Footer */}
        <div className="text-center text-xs text-slate-400 pb-2">
          <p>© HVAC Service Portal</p>
        </div>

      </div>

    </div>
  );
}

export default Login;