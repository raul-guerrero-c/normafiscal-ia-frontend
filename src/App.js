import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ConsultaForm from './components/ConsultaForm';
import Comparador from './components/Comparador';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CumplimientoTributario from './modules/CumplimientoTributario';
import AuditariaFiscal from './modules/AuditariaFiscal';
import InvestigacionNormativa from './modules/InvestigacionNormativa';
import OperacionesDocumentacion from './modules/OperacionesDocumentacion';

function App() {
  const [respuesta, setRespuesta] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [activeModule, setActiveModule] = useState(null);

  const handleRespuesta = (resp) => {
    setRespuesta(resp);
    setLoading(false);
  };

  const handleLoading = (isLoading) => {
    setLoading(isLoading);
  };

  const renderModulo = () => {
    switch(activeModule) {
      case 1: return <CumplimientoTributario />;
      case 2: return <AuditariaFiscal />;
      case 3: return <InvestigacionNormativa />;
      case 4: return <OperacionesDocumentacion />;
      default: return null;
    }
  };

  if (activeModule) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#0f172a' }}>
        <Header />
        <div style={{ display: 'flex', flex: 1 }}>
          {/* SIDEBAR */}
          <div style={{
            width: sidebarVisible ? '280px' : '0px',
            overflow: 'hidden',
            transition: 'width 0.3s ease'
          }}>
            <Sidebar onSelectModule={setActiveModule} />
          </div>

          {/* MAIN CONTENT CON BOTÓN VOLVER */}
          <main style={{ flex: 1, position: 'relative', overflow: 'auto', background: '#0f172a' }}>
            <button
              onClick={() => setActiveModule(null)}
              style={{
                position: 'sticky',
                top: '20px',
                left: '20px',
                zIndex: 50,
                background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '14px',
                boxShadow: '0 4px 12px rgba(217, 119, 6, 0.3)',
                transition: 'all 0.3s ease',
                margin: '20px',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(217, 119, 6, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(217, 119, 6, 0.3)';
              }}
            >
              ← Volver a Consultas
            </button>

            {/* TOGGLE SIDEBAR */}
            <button
              onClick={() => setSidebarVisible(!sidebarVisible)}
              style={{
                position: 'sticky',
                top: '20px',
                right: '20px',
                zIndex: 50,
                background: '#1e3a8a',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 14px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                float: 'right',
                margin: '20px 20px 0 0'
              }}
              title={sidebarVisible ? 'Ocultar menú' : 'Mostrar menú'}
            >
              {sidebarVisible ? '◀' : '▶'}
            </button>

            {/* CONTENIDO MÓDULO */}
            <div style={{ clear: 'both' }}>
              {renderModulo()}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#0f172a' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
        {/* SIDEBAR CON TRANSICIÓN */}
        <div style={{
          width: sidebarVisible ? '280px' : '0px',
          overflow: 'hidden',
          transition: 'width 0.3s ease'
        }}>
          <Sidebar onSelectModule={setActiveModule} />
        </div>

        {/* MAIN CONTENT */}
        <main style={{ flex: 1, padding: '30px', background: '#0f172a', overflow: 'auto', position: 'relative' }}>
          {/* BOTÓN TOGGLE SIDEBAR */}
          <button
            onClick={() => setSidebarVisible(!sidebarVisible)}
            style={{
              position: 'absolute',
              top: '20px',
              left: sidebarVisible ? '300px' : '20px',
              zIndex: 100,
              background: '#1e3a8a',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 12px',
              cursor: 'pointer',
              fontSize: '18px',
              transition: 'all 0.3s ease'
            }}
            title={sidebarVisible ? 'Ocultar menú' : 'Mostrar menú'}
          >
            {sidebarVisible ? '◀' : '▶'}
          </button>

          <ConsultaForm onRespuesta={handleRespuesta} onLoading={handleLoading} />
          <Comparador respuesta={respuesta} />
        </main>
      </div>
      <Footer />
      <Loader loading={loading} />
    </div>
  );
}

export default App;
