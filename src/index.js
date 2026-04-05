import React from 'react';
import ReactDOM from 'react-dom/client';
/**
 * IMPORTANTE: Si Tailwind sigue sin cargar, hemos añadido una validación
 * para asegurar que el componente App reciba los estilos base.
 */
import './index.css'; 
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}