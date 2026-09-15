import SignIn from '../components/SignIn';
import hvacLogo from '../assets/custom-HVAC.png';

function Login({ onLogin }) {
  return (
    <div style={{ textAlign: 'center' }}>

      <h1>HVAC Service Portal</h1>

      <p className="title">
        Manage customer calls, equipment status, and service tickets.
      </p>

      <img
        src={hvacLogo}
        alt="SunShine HVAC Logo"
        style={{
          width: '320px',
          height: 'auto',
          display: 'block',
          margin: '155px auto',
          borderRadius: '8px'
        }}
      />

      <SignIn onLogin={onLogin} />

    </div>
  );
}

export default Login;