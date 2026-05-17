import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ConsultaForm from './components/ConsultaForm';
import Comparador from './components/Comparador';
import Footer from './components/Footer';
import { useConsultaStore } from './store/consultaStore';
import './styles/App.css';

function App() {
  const error = useConsultaStore((state) => state.error);

  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <ConsultaForm />
          {error && <div className="error-message">{error}</div>}
          <Comparador />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;