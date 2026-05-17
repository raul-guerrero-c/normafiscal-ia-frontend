import React from 'react';

const Header = () => {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
      color: 'white',
      padding: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 5px 0' }}>NormaFiscal IA</h1>
        <p style={{ fontSize: '14px', opacity: 0.9, margin: 0 }}>Consultas Legales Fiscales Mexicanas</p>
      </div>
      <div style={{
        width: '50px',
        height: '50px',
        background: 'white',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        color: '#1e3a8a',
        fontSize: '20px'
      }}>
        TSW
      </div>
    </header>
  );
};

export default Header;
