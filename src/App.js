import React, { useState } from 'react';

export default function App() {

  // Estado inicial de documentos
  const [documentos, setDocumentos] = useState([
    {
      id: 'RAD-E-04/04/2026-000001',
      remitente: 'Juan Pérez',
      asunto: 'Solicitud de información'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        
        <h1 className="text-3xl font-bold text-blue-600">
          Sistema de Radicación
        </h1>

        <p className="mt-2 text-gray-600">
          Gestión de correspondencia
        </p>

        {/* Vista temporal de datos */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Documentos</h2>
          
          <ul className="list-disc pl-5">
            {documentos.map((doc, index) => (
              <li key={index}>
                {doc.id} - {doc.remitente}
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}