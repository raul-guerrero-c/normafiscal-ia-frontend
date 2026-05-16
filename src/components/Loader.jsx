import React from 'react';

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <>
      <style>
        {`@keyframes spin { to { transform: rotate(360deg); } }`}
      </style>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(3px)',
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 10px 50px rgba(0, 0, 0, 0.3)',
          textAlign: 'center',
        }}>
          <div style={{
            width: '70px',
            height: '70px',
            border: '4px solid #e5e7eb',
            borderTopColor: '#667eea',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto',
          }}></div>
          <div style={{
            color: '#1a1a1a',
            marginTop: '20px',
            fontSize: '16px',
            fontWeight: '600',
          }}>
            Procesando tu consulta
          </div>
          <div style={{
            color: '#666',
            fontSize: '12px',
            marginTop: '5px',
          }}>
            Esto puede tomar unos segundos...
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;