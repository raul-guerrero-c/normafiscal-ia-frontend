import axios from 'axios';

const API_BASE = 'https://normafiscal-ia-backend-production.up.railway.app/api/v1/consultas';

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const consultarClaude = async (consulta, tipoRespuesta, modulo) => {
  try {
    const response = await apiClient.post('/procesar-claude', {
      consulta,
      tipoRespuesta,
      modulo,
      usuarioId: 'user-001',
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error en Claude');
  }
};

export const consultarOpenAI = async (consulta, tipoRespuesta, modulo) => {
  try {
    const response = await apiClient.post('/procesar-openai', {
      consulta,
      tipoRespuesta,
      modulo,
      usuarioId: 'user-001',
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error en OpenAI');
  }
};

export default apiClient;
