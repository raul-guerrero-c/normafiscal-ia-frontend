import React, { useState } from 'react';
import { consultarClaude, consultarOpenAI } from '../services/apiService';

const ConsultaForm = ({ onRespuesta, onLoading }) => {
  const [consulta, setConsulta] = useState('');
  const [tipo, setTipo] = useState(2);
  const [motor, setMotor] = useState('claude');
  const [error, setError] = useState('');

  const handleConsultar = async () => {
    if (!consulta.trim() || consulta.length < 10) {
      setError('La consulta debe tener al menos 10 caracteres');
      return;
    }

    onLoading(true);
    setError('');

    try {
      if (motor === 'claude') {
        const resp = await consultarClaude(consulta, tipo, 1);
        onRespuesta({ motor: 'claude', datos: resp });
      } else {
        const resp = await consultarOpenAI(consulta, tipo, 1);
        onRespuesta({ motor: 'openai', datos: resp });
      }
    } catch (err) {
      setError(err.message);
      onLoading(false);
    }
  };

  return (
    <div style={{
      padding: '25px',
      background: '#1a2332',
      borderRadius: '12px',
      marginBottom: '20px',
      border: '1px solid #2d3e52'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          fontWeight: '600',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '14px'
        }}>
          Escribe tu consulta fiscal
        </label>
        <textarea
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          placeholder="Ej: Cual es la fecha limite para declarar ISR?"
          style={{
            width: '100%',
            height: '120px',
            padding: '15px',
            border: '1px solid #2d3e52',
            borderRadius: '8px',
            fontFamily: 'inherit',
            fontSize: '14px',
            background: '#0f172a',
            color: '#e5e7eb',
            resize: 'vertical',
            transition: 'border-color 0.3s ease'
          }}
          onFocus={(e) => e.target.style.borderColor = '#1e3a8a'}
          onBlur={(e) => e.target.style.borderColor = '#2d3e52'}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
        <div>
          <label style={{
            display: 'block',
            fontWeight: '600',
            marginBottom: '8px',
            color: '#e5e7eb',
            fontSize: '14px'
          }}>
            Tipo de Respuesta
          </label>
          <select
            value={tipo}
            onChange={(e) => setTipo(parseInt(e.target.value))}
            style={{
              width: '100%',
              padding: '12px 15px',
              border: '1px solid #2d3e52',
              borderRadius: '8px',
              background: '#0f172a',
              color: '#e5e7eb',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            <option value={1}>Breve</option>
            <option value={2}>Ejecutiva</option>
            <option value={3}>Tecnica</option>
            <option value={4}>Informe</option>
          </select>
        </div>

        <div>
          <label style={{
            display: 'block',
            fontWeight: '600',
            marginBottom: '8px',
            color: '#e5e7eb',
            fontSize: '14px'
          }}>
            Motor IA
          </label>
          <select
            value={motor}
            onChange={(e) => setMotor(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 15px',
              border: '1px solid #2d3e52',
              borderRadius: '8px',
              background: '#0f172a',
              color: '#e5e7eb',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            <option value="claude">Claude</option>
            <option value="openai">OpenAI</option>
          </select>
        </div>
      </div>

      {error && <div style={{ color: '#f87171', marginBottom: '15px', fontSize: '14px' }}>{error}</div>}

      <button
        onClick={handleConsultar}
        style={{
          width: '100%',
          padding: '14px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
      >
        <span>🚀</span> Consultar
      </button>
    </div>
  );
};

export default ConsultaForm;
