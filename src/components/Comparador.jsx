import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Comparador = ({ respuesta }) => {
  if (!respuesta) {
    return (
      <div style={{
        background: '#1a2332',
        padding: '40px',
        borderRadius: '12px',
        textAlign: 'center',
        border: '1px solid #2d3e52'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔍</div>
        <p style={{ fontSize: '16px', color: '#9ca3af' }}>Realiza una consulta para ver resultados</p>
      </div>
    );
  }

  const { motor, datos } = respuesta;
  const isOpenAI = motor === 'openai';
  const borderColor = isOpenAI ? '#173380' : '#173380';
  //const borderColor = isOpenAI ? '#10a37f' : '#d97706';

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ background: '#3a4453', borderRadius: '12px', overflow: 'hidden', border: '1px solid #2d3e52' }}>
        {/* HEADER */}
        <div style={{
          background: borderColor,
          color: 'white',
          padding: '20px',
          fontSize: '16px',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>{isOpenAI ? '🤖 OPENAI' : ' 🤖 CLAUDE'}</span>
          <span style={{ fontSize: '12px', fontWeight: 'normal' }}>{isOpenAI ? 'gpt-4o-mini + FileSearch' : 'Claude Opus 4.7'}</span>
        </div>

        {/* CONTENIDO CON MARKDOWN */}
        <div style={{
          padding: '25px',
          maxHeight: '500px',
          overflowY: 'auto',
          color: '#cfd7e7',
          lineHeight: '1.8'
        }}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => (
                <h1 style={{ 
                  fontSize: '28px', 
                  color: '#60a5fa', 
                  marginTop: '25px', 
                  marginBottom: '15px', 
                  fontWeight: '700',
                  borderBottom: '2px solid #1e3a8a',
                  paddingBottom: '10px'
                }} {...props} />
              ),
              h2: ({node, ...props}) => (
                <h2 style={{ 
                  fontSize: '24px', 
                  color: '#60a5fa', 
                  marginTop: '20px', 
                  marginBottom: '12px', 
                  fontWeight: '700',
                  borderBottom: '1px solid #2d3e52',
                  paddingBottom: '8px'
                }} {...props} />
              ),
              h3: ({node, ...props}) => (
                <h3 style={{ 
                  fontSize: '20px', 
                  color: '#93c5fd', 
                  marginTop: '18px', 
                  marginBottom: '12px', 
                  fontWeight: '700'
                }} {...props} />
              ),
              h4: ({node, ...props}) => (
                <h4 style={{ 
                  fontSize: '18px', 
                  color: '#bfdbfe', 
                  marginTop: '15px', 
                  marginBottom: '10px', 
                  fontWeight: '600'
                }} {...props} />
              ),
              p: ({node, ...props}) => (
                <p style={{ 
                  marginBottom: '12px', 
                  textAlign: 'justify',
                  color: '#e5e7eb'
                }} {...props} />
              ),
              ul: ({node, ...props}) => (
                <ul style={{ 
                  marginLeft: '25px', 
                  marginBottom: '12px', 
                  listStyle: 'disc',
                  color: '#e5e7eb'
                }} {...props} />
              ),
              ol: ({node, ...props}) => (
                <ol style={{ 
                  marginLeft: '25px', 
                  marginBottom: '12px', 
                  listStyle: 'decimal',
                  color: '#e5e7eb'
                }} {...props} />
              ),
              li: ({node, ...props}) => (
                <li style={{ 
                  marginBottom: '8px', 
                  color: '#e5e7eb'
                }} {...props} />
              ),
              strong: ({node, ...props}) => (
                <strong style={{ 
                  color: '#fbbf24', 
                  fontWeight: '700'
                }} {...props} />
              ),
              em: ({node, ...props}) => (
                <em style={{ 
                  color: '#bfdbfe', 
                  fontStyle: 'italic'
                }} {...props} />
              ),
              code: ({node, ...props}) => (
                <code style={{ 
                  background: '#0f172a', 
                  color: '#fbbf24', 
                  padding: '2px 6px', 
                  borderRadius: '4px', 
                  fontSize: '13px'
                }} {...props} />
              ),
              pre: ({node, ...props}) => (
                <pre style={{ 
                  background: '#0f172a', 
                  color: '#fbbf24',
                  padding: '15px',
                  borderRadius: '8px',
                  overflow: 'auto',
                  marginBottom: '12px'
                }} {...props} />
              ),
              blockquote: ({node, ...props}) => (
                <blockquote style={{ 
                  borderLeft: '4px solid #1e3a8a', 
                  paddingLeft: '15px', 
                  marginLeft: '0', 
                  marginBottom: '12px', 
                  color: '#9ca3af',
                  fontStyle: 'italic'
                }} {...props} />
              ),
              table: ({node, ...props}) => (
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  marginBottom: '12px',
                  border: '1px solid #2d3e52'
                }} {...props} />
              ),
              thead: ({node, ...props}) => (
                <thead style={{
                  background: '#0f172a',
                  color: '#60a5fa'
                }} {...props} />
              ),
              th: ({node, ...props}) => (
                <th style={{
                  padding: '10px',
                  border: '1px solid #2d3e52',
                  textAlign: 'left',
                  fontWeight: '700'
                }} {...props} />
              ),
              td: ({node, ...props}) => (
                <td style={{
                  padding: '10px',
                  border: '1px solid #2d3e52'
                }} {...props} />
              ),
            }}
          >
            {datos.datos.respuesta}
          </ReactMarkdown>
        </div>

        {/* METADATA */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '15px',
          padding: '20px',
          borderTop: '1px solid #2d3e52',
          background: '#0f172a'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '5px' }}>⏱️ Tiempo</div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#e5e7eb' }}>{datos.datos.metadata.tiempoMs}</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '5px' }}>📚 Citas</div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#e5e7eb' }}>{datos.datos.metadata.citasNormativas}</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '5px' }}>✅ Estructura</div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#e5e7eb' }}>{datos.datos.metadata.estructuraCompleta ? 'Completa' : 'Incompleta'}</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '5px' }}>🎯 Confianza</div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#e5e7eb' }}>
              {datos.datos.metadata.nivelConfianza === 3 ? 'Alta' : datos.datos.metadata.nivelConfianza === 2 ? 'Media' : 'Baja'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparador;