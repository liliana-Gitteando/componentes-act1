import React, { useState } from 'react';

export default function App() {

  const [documentos, setDocumentos] = useState([
    {
      id: 'RAD-E-04/04/2026-0000001',
      remitente: 'Juan Pérez',
      asunto: 'Solicitud de información',
      estado: 'Pendiente'
    }
  ]);

  const [formData, setFormData] = useState({
    remitente: '',
    asunto: ''
  });

  const generarRadicado = () => {
    const fecha = new Date();

    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();

    const consecutivo = String(documentos.length + 1).padStart(7, '0');

    return `RAD-E-${dia}/${mes}/${anio}-${consecutivo}`;
  };

  const handleGuardar = () => {
    if (!formData.remitente || !formData.asunto) return;

    const nuevoDocumento = {
      id: generarRadicado(),
      remitente: formData.remitente,
      asunto: formData.asunto,
      estado: 'Pendiente'
    };

    setDocumentos([nuevoDocumento, ...documentos]);

    setFormData({
      remitente: '',
      asunto: ''
    });
  };

  // 🔥 CAMBIAR ESTADO
  const cambiarEstado = (index, nuevoEstado) => {
    const nuevosDocumentos = [...documentos];
    nuevosDocumentos[index].estado = nuevoEstado;
    setDocumentos(nuevosDocumentos);
  };

  const getEstadoColor = (estado) => {
    switch (estado) {
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-700';
      case 'En trámite':
        return 'bg-blue-100 text-blue-700';
      case 'Resuelto':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow">

        <h1 className="text-3xl font-bold text-indigo-600">
          Sistema de Radicación
        </h1>

        <p className="text-gray-500 mt-1">
          Gestión de correspondencia
        </p>

        {/* FORMULARIO */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
          <h2 className="text-lg font-semibold mb-3">Nuevo Documento</h2>

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
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Guardar
          </button>
        </div>

        {/* TABLA */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3">Bandeja de Entrada</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border rounded-lg overflow-hidden">
              
              <thead className="bg-gray-100 text-gray-600 text-sm">
                <tr>
                  <th className="p-3">Radicado</th>
                  <th className="p-3">Remitente</th>
                  <th className="p-3">Asunto</th>
                  <th className="p-3">Estado</th>
                </tr>
              </thead>

              <tbody>
                {documentos.map((doc, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="p-3 font-semibold text-indigo-600">{doc.id}</td>
                    <td className="p-3">{doc.remitente}</td>
                    <td className="p-3">{doc.asunto}</td>
                    <td className="p-3 space-y-1">
                      
                      <span className={`block px-3 py-1 rounded-full text-xs font-semibold ${getEstadoColor(doc.estado)}`}>
                        {doc.estado}
                      </span>

                      <select
                        value={doc.estado}
                        onChange={(e) => cambiarEstado(index, e.target.value)}
                        className="mt-1 border rounded p-1 text-sm"
                      >
                        <option>Pendiente</option>
                        <option>En trámite</option>
                        <option>Resuelto</option>
                      </select>

                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>

    </div>
  );
}