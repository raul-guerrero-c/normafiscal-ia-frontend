import React from 'react';

const Sidebar = ({ onSelectModule }) => {
  const modulos = [
    { id: 1, nombre: 'Cumplimiento Tributario', icon: '📋' },
    { id: 2, nombre: 'Auditoria Fiscal', icon: '🔍' },
    { id: 3, nombre: 'Investigacion Normativa', icon: '📚' },
    { id: 4, nombre: 'Operaciones Documentacion', icon: '📄' },
  ];

  return (
    <aside style={{
      width: '280px',
      background: '#1a2332',
      padding: '25px',
      borderRight: '1px solid #2d3e52',
      color: 'white',
      minHeight: '100vh',
      overflowY: 'auto'
    }}>
      <h3 style={{ marginBottom: '15px', color: '#60a5fa', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>MODULOS</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {modulos.map((mod) => (
          <button
            key={mod.id}
            onClick={() => onSelectModule(mod.id)}
            style={{
              padding: '12px 15px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              color: '#e5e7eb',
              textAlign: 'left'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(30, 58, 138, 0.3)';
              e.target.style.borderColor = '#1e3a8a';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <span>{mod.icon}</span> {mod.nombre}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
