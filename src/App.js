import React, { useState } from 'react';

export default function App() {

  // Estado de documentos
  const [documentos, setDocumentos] = useState([
    {
      id: 'RAD-4/5/2026-0000001',
      remitente: 'Juan Pérez',
      asunto: 'Solicitud de información'
    }
  ]);

  // Estado del formulario
  const [formData, setFormData] = useState({
    remitente: '',
    asunto: ''
  });

  // FUNCIÓN PARA GUARDAR
  const handleGuardar = () => {
    if (!formData.remitente || !formData.asunto) return;

    const nuevoDocumento = {
      id: `RAD-00${documentos.length + 1}`,
      remitente: formData.remitente,
      asunto: formData.asunto
    };

    setDocumentos([nuevoDocumento, ...documentos]);

    // limpiar formulario
    setFormData({
      remitente: '',
      asunto: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        
        <h1 className="text-3xl font-bold text-blue-600">
          Sistema de Radicación
        </h1>

        <p className="mt-2 text-gray-600">
          Gestión de correspondencia
        </p>

        {/* FORMULARIO */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Nuevo Documento</h2>

          <input
            type="text"
            placeholder="Remitente"
            value={formData.remitente}
            onChange={(e) => setFormData({...formData, remitente: e.target.value})}
            className="w-full border p-2 mb-2 rounded"
          />

          <input
            type="text"
            placeholder="Asunto"
            value={formData.asunto}
            onChange={(e) => setFormData({...formData, asunto: e.target.value})}
            className="w-full border p-2 mb-2 rounded"
          />

          <button 
            onClick={handleGuardar}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Guardar
          </button>
        </div>

        {/* LISTA */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Documentos</h2>
          
          <ul className="list-disc pl-5">
            {documentos.map((doc, index) => (
              <li key={index}>
                {doc.id} - {doc.remitente} - {doc.asunto}
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}