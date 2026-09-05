import React, { useState} from 'react';

const AUTHORIZED_TECHS = [
    { id: '1129', name: 'Shawn Lawson'},
    { id: '1220', name: 'Heather Lawson'},
    { id: '1105', name: 'Ethan Lawson'},
    { id: '0924', name: 'Autumn Lawson'},
    { id: '0612', name: 'Paislee Lawson'},
    { id: '0214', name: 'Thayer Lawson'}
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
    <div style={{ maxWidth: '320px', margin: '40px auto', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', backgroundColor: '#ebe6e6' }}>
        <h2 class='subtitle' style={{ marginTop: 0 }}> Technician Access</h2>
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', }}>
                    Enter 4-Digit Tech ID:
                </label>
                <input
                    type="password"
                    maxLength="4"
                    value={techId}
                    onChange={(e) => setTechId(e.target.value)}
                    placeholder="..."
                    style={{ width: '100%', padding: '10px', fontSize: '18px', textAlign: 'center', letterSpacing: '4px', boxSizing: 'border-box' }}/>
            </div>
            <button type="submit" style= {{ width: '100%', padding: '10px', backgroundColor: '#0275d8', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                Sign In
                </button> 
        </form>
    </div>
);
}

export default SignIn;
