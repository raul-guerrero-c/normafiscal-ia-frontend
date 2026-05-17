import React, { useState } from 'react';

const CumplimientoTributario = () => {
  const [selectedTab, setSelectedTab] = useState('resumen');

  const features = [
    { icon: '📅', title: 'Validador de Fechas', desc: 'Límites de ISR, IVA, IEPS' },
    { icon: '✅', title: 'Checklist Automático', desc: 'Obligaciones por régimen fiscal' },
    { icon: '⏰', title: 'Alertas de Vencimientos', desc: 'Recordatorios por contribuyente' },
    { icon: '📆', title: 'Calendario Fiscal', desc: 'Personalizado para tu negocio' },
    { icon: '📋', title: 'Validador CFDI', desc: 'Requisitos y cumplimiento' },
  ];

  return (
    <div style={{ padding: '30px', background: '#0f172a', minHeight: '100vh', color: '#e5e7eb' }}>
      {/* HEADER */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#60a5fa', marginBottom: '10px' }}>
          📋 CUMPLIMIENTO TRIBUTARIO
        </h1>
        <p style={{ fontSize: '16px', color: '#9ca3af', marginBottom: '20px' }}>
          Gestiona tus obligaciones fiscales de forma automática y precisa
        </p>
        <div style={{ 
          background: '#1a2332', 
          padding: '15px 20px', 
          borderRadius: '8px', 
          borderLeft: '4px solid #d97706',
          color: '#fbbf24',
          fontWeight: '600'
        }}>
          💰 Rentabilidad Alta - Despachos contables lo usan semanal
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
          <h2 style={{ color: '#60a5fa', marginBottom: '15px', fontSize: '20px' }}>¿Qué es Cumplimiento Tributario?</h2>
          <p style={{ marginBottom: '15px', lineHeight: '1.8', textAlign: 'justify' }}>
            Es tu asistente fiscal que automatiza todas las obligaciones tributarias de tu empresa. Desde validar fechas críticas 
            hasta generar calendarios personalizados, garantiza que nunca te pierdas un vencimiento importante.
          </p>
          <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
            <h3 style={{ color: '#93c5fd', marginBottom: '10px' }}>Beneficios principales:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>✅ Cero retrasos en declaraciones</li>
              <li style={{ marginBottom: '8px' }}>✅ Alertas automáticas antes de vencer</li>
              <li style={{ marginBottom: '8px' }}>✅ Adaptado a tu tipo de régimen fiscal</li>
              <li style={{ marginBottom: '8px' }}>✅ Reduce sanciones y multas</li>
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

export default CumplimientoTributario;
