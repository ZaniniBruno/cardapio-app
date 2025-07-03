import axios, {
    AxiosInstance,
    AxiosResponse,
    InternalAxiosRequestConfig,
  } from 'axios';
  
  // Define a interface para a resposta de erro
  interface ApiError {
    status: number;
    message: string;
  }
  
  // Cria uma instância do axios
  const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL, // Substitua pela URL base da sua API
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  
  
  export default api;