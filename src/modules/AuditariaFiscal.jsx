import React, { useState } from 'react';

const AuditariaFiscal = () => {
  const [selectedTab, setSelectedTab] = useState('resumen');

  const features = [
    { icon: '⚠️', title: 'Analizador de Riesgos', desc: 'Detecta inconsistencias fiscales' },
    { icon: '📊', title: 'Validador de Deducciones', desc: 'Permitidas vs Prohibidas' },
    { icon: '💰', title: 'Simulador de Multas', desc: 'Cálculo de sanciones y recargos' },
    { icon: '🔄', title: 'Comparador Fiscal', desc: 'Reportado vs Debido' },
    { icon: '📄', title: 'Reportes de Contingencia', desc: 'Documentación de defensa' },
  ];

  return (
    <div style={{ padding: '30px', background: '#0f172a', minHeight: '100vh', color: '#e5e7eb' }}>
      {/* HEADER */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#60a5fa', marginBottom: '10px' }}>
          🔍 AUDITORÍA FISCAL
        </h1>
        <p style={{ fontSize: '16px', color: '#9ca3af', marginBottom: '20px' }}>
          Identifica riesgos fiscales antes de que el SAT lo haga
        </p>
        <div style={{ 
          background: '#1a2332', 
          padding: '15px 20px', 
          borderRadius: '8px', 
          borderLeft: '4px solid #d97706',
          color: '#fbbf24',
          fontWeight: '600'
        }}>
          💰 Rentabilidad Alta - Las empresas pagan bien por evitar sanciones
        </div>
      </div>

      {/* TABS */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #2d3e52', paddingBottom: '10px' }}>
        {['resumen', 'features', 'proximamente'].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            style={{
              padding: '12px 20px',
              background: selectedTab === tab ? '#1e3a8a' : 'transparent',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
          >
            {tab === 'resumen' ? '📊 Resumen' : tab === 'features' ? '✨ Features' : '🚀 Próximamente'}
          </button>
        ))}
      </div>

      {/* CONTENIDO */}
      {selectedTab === 'resumen' && (
        <div style={{ background: '#1a2332', padding: '25px', borderRadius: '12px', border: '1px solid #2d3e52' }}>
          <h2 style={{ color: '#60a5fa', marginBottom: '15px', fontSize: '20px' }}>¿Qué es Auditoría Fiscal?</h2>
          <p style={{ marginBottom: '15px', lineHeight: '1.8', textAlign: 'justify' }}>
            Un análisis profundo de tu situación fiscal que detecta riesgos antes de que representen problemas legales. 
            Identifica deducciones incorrectas, simula multas y genera reportes de defensa.
          </p>
          <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
            <h3 style={{ color: '#93c5fd', marginBottom: '10px' }}>Casos de uso:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>✅ Auditorías internas preventivas</li>
              <li style={{ marginBottom: '8px' }}>✅ Preparación ante revisiones SAT</li>
              <li style={{ marginBottom: '8px' }}>✅ Identificación de oportunidades de ahorro</li>
              <li style={{ marginBottom: '8px' }}>✅ Validación de cambios normativos</li>
            </ul>
          </div>
        </div>
      )}

      {selectedTab === 'features' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                background: '#1a2332',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #2d3e52',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1e3a8a';
                e.currentTarget.style.background = '#202d3f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2d3e52';
                e.currentTarget.style.background = '#1a2332';
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>{feature.icon}</div>
              <h3 style={{ color: '#60a5fa', marginBottom: '8px', fontSize: '16px', fontWeight: '700' }}>{feature.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      )}

      {selectedTab === 'proximamente' && (
        <div style={{ 
          background: '#1a2332', 
          padding: '40px', 
          borderRadius: '12px', 
          border: '2px dashed #1e3a8a',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>🔧</div>
          <h2 style={{ color: '#60a5fa', marginBottom: '10px', fontSize: '24px' }}>En desarrollo</h2>
          <p style={{ color: '#9ca3af', marginBottom: '20px' }}>
            Este módulo está siendo desarrollado. Pronto tendrá funcionalidad completa.
          </p>
          <div style={{ 
            background: '#0f172a', 
            padding: '15px', 
            borderRadius: '8px',
            borderLeft: '4px solid #d97706',
            color: '#fbbf24',
            fontWeight: '600'
          }}>
            📅 Lanzamiento estimado: Q2 2026
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditariaFiscal;
